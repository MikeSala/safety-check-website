import { gql, useMutation } from "@apollo/client";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { Banner } from "~/components/Banner";
import Button, { ButtonColor, ButtonProps } from "~/components/Button";
import {
  ConfirmationCheckboxDialog,
  ConfirmationCheckboxDialogContent,
  initConfirmationCheckboxDialogContent,
} from "~/components/ConfirmationCheckboxDialog";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import client from "~/lib/apollo-cd";
import { errorToast, successToast } from "~/utils/toast";

type QuoteData = {
  quoteID: string;
  quoteNumber: string;
  reference: string;
  terms: string;
  contact: {
    contactID: string;
    name: string;
    emailAddress: string;
  };
  lineItems: LineItem[];
  date: string;
  dateString: string;
  expiryDate: string;
  expiryDateString: string;
  status: string;
  currencyCode: string;
  currencyRate: number;
  subTotal: number;
  totalTax: number;
  total: number;
  brandingThemeID: string;
  updatedDateUTC: string;
  lineAmountTypes: string;
};

type LineItem = {
  lineItemID: string;
  description: string;
  quantity: number;
  unitAmount: number;
  itemCode: string;
  taxAmount: number;
  lineAmount: number;
  tracking: any[]; // Specify a more detailed type if you have the structure of the tracking objects
};

type XeroQuote = {
  data: QuoteData;
  pdfDownloadUrl: string;
};

type QuoteNode = {
  quoteNumber: string;
  status: string;
  xeroQuote: XeroQuote;
};

type QuoteForBillableContact = {
  node: QuoteNode;
};

type QuoteResponse = {
  data: {
    quoteForBillableContact: QuoteForBillableContact;
  };
  extensions: {
    profiler: {
      elapsedTime: string;
    };
  };
};

const GET_QUOTE_SERVICE = gql`
  query quoteForBillableContact($quoteId: ID!) {
    quoteForBillableContact(quoteId: $quoteId) {
      node {
        quoteNumber
        status
        xeroQuote {
          data
          pdfDownloadUrl(forBillableContact: true)
        }
      }
    }
  }
`;

const QUOTE_APPROVAL_SERVICE = gql`
  mutation updateQuoteApprovalForBillableContact(
    $input: UpdateQuoteApprovalForBillableContactMutationInput!
  ) {
    updateQuoteApprovalForBillableContact(input: $input) {
      quote {
        node {
          status
          xeroQuote {
            data
          }
        }
      }
    }
  }
`;

const PDFViewer = dynamic(() => import("../../../components/PDFViewer"), {
  ssr: false,
});

async function fetchPdfAsBase64(url: RequestInfo | URL) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return buffer.toString("base64");
  } catch (error) {
    console.error("Error fetching or converting PDF:", error);
    return "";
  }
}

async function fetchQuoteData(id: string): Promise<QuoteResponse | {}> {
  try {
    return await client.query({
      query: GET_QUOTE_SERVICE,
      variables: { quoteId: id },
      context: {
        headers: {
          "x-org-id": "00000000-0000-4000-8000-000000000000", // TODO: Fix in https://github.com/strivellc/cindirect-node/issues/707
        },
      },
    });
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    return {};
  }
}

// TODO: Fix me
// @ts-ignore
export async function getServerSideProps({ query }) {
  const { id } = query;
  const quoteDataResponse = (await fetchQuoteData(id)) as QuoteResponse;

  const pdfDownloadUrl =
    quoteDataResponse?.data?.quoteForBillableContact?.node.xeroQuote
      .pdfDownloadUrl;

  let pdfBase64 = "";
  if (pdfDownloadUrl) {
    pdfBase64 = await fetchPdfAsBase64(pdfDownloadUrl);
  }

  return {
    props: {
      quoteDataResponse: quoteDataResponse ?? {},
      quotePDFResponse: pdfBase64,
    },
  };
}

type QuotePageProps = {
  quoteDataResponse: any;
  quotePDFResponse: string;
};

const QuotePage = ({ quoteDataResponse, quotePDFResponse }: QuotePageProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [quoteData, setQuoteData] = useState<any>(null);
  const [pdf, setPdf] = useState("");
  const [getQuoteEmailHref, setQuoteEmailHref] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationDialogContent, setConfirmationDialogContent] = useState(
    initConfirmationCheckboxDialogContent()
  );

  useEffect(() => {
    if (quoteDataResponse) {
      const quoteResData =
        quoteDataResponse?.data?.quoteForBillableContact?.node;
      setQuoteData(quoteResData);
      setQuoteEmailHref(
        `mailto:${process.env.NEXT_PUBLIC_EMAIL_LINK}?subject=${quoteResData?.reference} - Regarding quote number ${quoteResData?.quoteNumber}`
      );
    }
  }, [quoteDataResponse]);

  useEffect(() => {
    if (quotePDFResponse) {
      setPdf(quotePDFResponse);
    }
  }, [quotePDFResponse]);

  const [submitQuoteApprovalForBillableContact, { data, loading, error }] =
    useMutation(QUOTE_APPROVAL_SERVICE, { client });

  const showButtons = (): boolean => {
    if (quoteData) return quoteData["status"] === "SENT";
    return true;
  };

  const getTotalAmount = (): string => {
    const toLocale = (amount: number): string => {
      return amount?.toLocaleString("en-AU", {
        style: "currency",
        currency: "AUD",
      });
    };
    const total = 0;
    if (quoteData) return toLocale(quoteData["total"]);
    return toLocale(total);
  };

  const getQuoteStatusMessage = (): string => {
    let status = "SENT";
    if (quoteData) status = quoteData?.["status"];

    switch (status) {
      case "DRAFT":
        return "Quote has status of draft";
      case "SENT":
        return "Quote has been sent";
      case "DECLINED":
        return "Quote has been declined";
      case "ACCEPTED":
        return "Quote has been accepted";
      case "INVOICED":
        return "Quote has been invoiced";
      case "DELETED":
        return "Quote has been deleted";
      default:
        return `Quote has status of ${status}`;
    }
  };

  const actionButtons: Array<ButtonProps & { label: string }> = [
    {
      label: "Decline",
      onClick: () => handleOnActionButtonClick("decline"),
      color: ButtonColor.Neutral,
      outline: true,
    },
    {
      label: "Accept",
      onClick: () => handleOnActionButtonClick("accept"),
      color: ButtonColor.Primary,
    },
  ];

  const handleOnActionButtonClick = (action: "accept" | "decline") => {
    const name = quoteData?.xeroQuote?.data?.contact?.name ?? "the customer";
    setConfirmationDialogContent(getConfirmationDialogText(action, name));
    setModalVisible(true);
  };

  const handleOnDownloadPDF = () => {
    let fileName = "RCSC Quote.pdf";
    if (quoteData) fileName = quoteData["quoteNumber"] + ".pdf";
    const linkSource = `data:application/pdf;base64,${pdf}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  const onConfirm = async (isApproved: boolean | undefined) => {
    await submitQuoteApprovalForBillableContact({
      variables: {
        input: {
          isApproved,
          quoteId: id,
        },
      },
    })
      .then(async (res) => {
        setQuoteData(
          res?.data?.updateQuoteApprovalForBillableContact?.quote?.node
        );
        setModalVisible(false);
        successToast(
          `Quote has been successfully ${isApproved ? "accepted" : "declined"}`
        );
      })
      .catch((e) => {
        console.log(e);
        errorToast(
          `There was an error ${
            isApproved ? "accepting" : "declining"
          } the quote. Please try again. If problem persists please contact RCSC.`
        );
      });
  };

  const getConfirmationDialogText = (
    isApproved: "accept" | "decline",
    name: string
  ) => {
    const confirmationDialogText: ConfirmationCheckboxDialogContent =
      initConfirmationCheckboxDialogContent();
    confirmationDialogText.title = "Quote approval confirmation";
    confirmationDialogText.cancelText = "Cancel";

    if (isApproved === "accept") {
      confirmationDialogText.dialogContextText = `I, ${name}, accept this quote.`;
      confirmationDialogText.confirmText = "Accept";
    }

    if (isApproved === "decline") {
      confirmationDialogText.dialogContextText = `I, ${name}, wish to decline this quote and take full responsibility for the rectification works required.`;
      confirmationDialogText.confirmText = "Decline";
    }

    return confirmationDialogText;
  };

  const errorMessage = (
    <MarginLayout className="max-w-prose flex-col gap-2">
      <p>There was an error loading the quote.</p>
      <p>
        Please try again by opening the link received in the email. If problem
        persists please contact RCSC at{" "}
        <Link
          href={getQuoteEmailHref}
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          {process.env.NEXT_PUBLIC_EMAIL_LINK}
        </Link>{" "}
        or call at{" "}
        <Link href={`tel:${process.env.NEXT_PUBLIC_TEL_LINK}`} className="link">
          {process.env.NEXT_PUBLIC_TEL_LINK}
        </Link>
        .
      </p>
    </MarginLayout>
  );

  return (
    <>
      <Banner title="Rectification Works Quote" />

      {quoteData ? (
        <MarginLayout className="flex-col gap-6">
          {/* Top message */}
          <div className={"mb-6"}>
            <p>Please review quote details below and accept or decline it.</p>
            <p>
              In case of further questions regarding the quote, please contact
              us at{" "}
              <Link
                href={getQuoteEmailHref}
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                {process.env.NEXT_PUBLIC_EMAIL_LINK}
              </Link>{" "}
              or call at{" "}
              <Link
                href={`tel:${process.env.NEXT_PUBLIC_TEL_LINK}`}
                className="link"
              >
                {process.env.NEXT_PUBLIC_TEL_LINK}
              </Link>
              .
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            {/* Buttons  */}
            <div className="flex w-full flex-wrap items-center gap-4">
              {showButtons() &&
                actionButtons.map((button, index) => {
                  return (
                    <Button key={index} size="xl" {...button}>
                      {button.label}
                    </Button>
                  );
                })}

              {showButtons() && (
                <div className="hidden h-full flex-col justify-center sm:inline-flex">
                  <p className="align-center pl-2 text-left text-sm font-bold uppercase text-black sm:text-3xl">
                    {getTotalAmount()}
                  </p>
                </div>
              )}

              {!showButtons() && (
                <div className="flex h-full w-full flex-col justify-center">
                  <p className="align-center pl-2 text-left text-base font-bold uppercase text-black sm:text-2xl">
                    {getQuoteStatusMessage()}
                  </p>
                </div>
              )}
              <Button
                onClick={handleOnDownloadPDF}
                size="xl"
                className="ml-auto"
              >
                PDF
                <ArrowDownTrayIcon className="h-5 w-5" />
              </Button>
            </div>
            <ConfirmationCheckboxDialog
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              onConfirm={onConfirm}
              content={confirmationDialogContent}
              isApproved={confirmationDialogContent.confirmText === "Accept"}
              loading={loading}
            />

            {/* PDF */}
            <div className="mt-8 w-full sm:overflow-hidden sm:rounded-md">
              <PDFViewer pdf={pdf} />
            </div>
          </div>
        </MarginLayout>
      ) : (
        errorMessage
      )}
    </>
  );
};

QuotePage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo title="Quote" noindex />
      {page}
    </MainLayout>
  );
};

export default QuotePage;
