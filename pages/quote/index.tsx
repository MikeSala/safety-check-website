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
import client from "~/lib/apollo";
import { errorToast } from "~/utils/toast";

const GET_QUOTE_SERVICE = gql`
  query xeroQuoteForSite($q: String!) {
    xeroQuoteForSite(q: $q) {
      quoteDataForSite
    }
  }
`;

const GET_QUOTE_PDF_SERVICE = gql`
  query xeroQuotePDFForSite($q: String!) {
    xeroQuotePDFForSite(q: $q) {
      pdf
    }
  }
`;

const QUOTE_APPROVAL_SERVICE = gql`
  mutation quoteApprovalCustomer($input: QuoteApprovalCustomerInput!) {
    quoteApprovalCustomer(input: $input) {
      clientMutationId
      quoteApprovalCustomerEdge {
        node {
          quoteData
        }
      }
    }
  }
`;

const PDFViewer = dynamic(() => import("../../components/PDFViewer"), {
  ssr: false,
});

// TODO: Fix me
// @ts-ignore
export const getServerSideProps = async ({ context, query }) => {
  const q = query?.q;
  const quoteDataResponse = await client
    .query({
      query: GET_QUOTE_SERVICE,
      variables: {
        q,
      },
    })
    .catch((error) => {
      console.log(JSON.stringify(error, null, 2));
    });

  const quotePDFResponse = await client
    .query({
      query: GET_QUOTE_PDF_SERVICE,
      variables: {
        q,
      },
    })
    .catch((error) => {
      console.log(JSON.stringify(error, null, 2));
    });

  return {
    props: {
      quoteDataResponse: quoteDataResponse ?? {},
      quotePDFResponse: quotePDFResponse ?? {},
    },
  };
};

type QuotePageProps = {
  quoteDataResponse: any;
  quotePDFResponse: any;
};

const QuotePage = ({ quoteDataResponse, quotePDFResponse }: QuotePageProps) => {
  const [quoteData, setQuoteData] = useState(null);
  const [pdf, setPdf] = useState("");
  const [getQuoteEmailHref, setQuoteEmailHref] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationDialogContent, setConfirmationDialogContent] = useState(
    initConfirmationCheckboxDialogContent()
  );

  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    if (quoteDataResponse) {
      setQuoteData(quoteDataResponse?.data?.xeroQuoteForSite?.quoteDataForSite);
      setQuoteEmailHref(
        `mailto:${process.env.NEXT_PUBLIC_EMAIL_LINK}?subject=${quoteDataResponse?.data?.xeroQuoteForSite?.quoteDataForSite?.reference} - Regarding quote number ${quoteDataResponse?.data?.xeroQuoteForSite?.quoteDataForSite?.quoteNumber}`
      );
    }
  }, [quoteDataResponse]);

  useEffect(() => {
    if (quotePDFResponse) {
      setPdf(quotePDFResponse?.data?.xeroQuotePDFForSite?.pdf);
    }
  }, [quotePDFResponse]);

  const [submitQuoteApprovalCustomer, { data, loading, error }] = useMutation(
    QUOTE_APPROVAL_SERVICE
  );

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
        return "Quote is still in draft status";
      case "SENT":
        return "Quote is sent to Xero";
      case "DECLINED":
        return "Quote has been already declined";
      case "ACCEPTED":
        return "Quote has been already accepted";
      case "INVOICED":
        return "Quote has been already invoiced";
      case "DELETED":
        return "Quote is deleted";
      default:
        return "Quote is in unknown status";
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
    let name = "Customer";
    if (quoteData) name = quoteData["name"] || "Customer";
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

  const onConfirm = async (approve: boolean | undefined) => {
    await submitQuoteApprovalCustomer({
      variables: {
        input: {
          approve: confirmationDialogContent.confirmText === "Accept",
          q: query.q,
          t: query.t,
        },
      },
    })
      .then(async (res) => {
        setQuoteData(
          res.data.quoteApprovalCustomer.quoteApprovalCustomerEdge.node
            ?.quoteData
        );
        setModalVisible(false);
      })
      .catch((e) => {
        console.log(e);
        errorToast(
          "There was an error approving your quote. Please try again. If problem persists please contact RCSC."
        );
      });
  };

  const getConfirmationDialogText = (
    approve: "accept" | "decline",
    name: string
  ) => {
    const confirmationDialogText: ConfirmationCheckboxDialogContent =
      initConfirmationCheckboxDialogContent();
    confirmationDialogText.title = "Quote approval confirmation";
    confirmationDialogText.cancelText = "Cancel";

    if (approve === "accept") {
      confirmationDialogText.dialogContextText = `I, ${name}, agree and accept this quotation.`;
      confirmationDialogText.confirmText = "Accept";
    }

    if (approve === "decline") {
      confirmationDialogText.dialogContextText = `I, ${name}, do not agree and decline this quotation.`;
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
          <div>
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
