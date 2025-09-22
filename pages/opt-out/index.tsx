import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { ReactElement, useState, useEffect } from "react";
import { Banner } from "~/components/Banner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { gql, useMutation } from "@apollo/client";
import { errorToast, successToast } from "~/utils/toast";
import PageMessage, {
  initPageMessageContent,
  PageMessageProps,
} from "~/components/PageMessage";
import { LoadingSpinner } from "~/components/Loaders/LoadingSpinner";

const OptOutCustomerMutation = gql`
  mutation optOutCustomer($input: OptOutCustomerInput!) {
    optOutCustomer(input: $input) {
      clientMutationId
    }
  }
`;

const successMessage: PageMessageProps = {
  heading: "Opt-Out Successful",
  mainContent:
    "You have successfully opted out of RCSC's Property Compliance Subscription.",
  note: "Please note that for any safety checks required in the future, or if you would like to opt back into service, you will need to contact your property manager.",
};

const errorMessage: PageMessageProps = {
  heading: "Error occurred when opting out, please try again.",
  mainContent:
    "If the problem persists, please contact our staff through the contact form.",
  link: {
    href: "/kontakt",
    text: "Contact form",
  },
};

const OptOutPage: NextPageWithLayout = () => {
  const [optOutMessage, setOptOutMessage] = useState(initPageMessageContent());
  const { query } = useRouter();

  const [submitOptOutCustomer, { data, loading, error }] = useMutation(
    OptOutCustomerMutation
  );

  const commitMutation = async (t: string) => {
    await submitOptOutCustomer({
      variables: {
        input: {
          t,
        },
      },
    })
      .then(async (_res) => {
        successToast("You have successfully opted out");
        setOptOutMessage(successMessage);
      })
      .catch((e) => {
        setOptOutMessage(errorMessage);
        console.log(e);
        errorToast(
          "There was an error opting-out. Please try again. If problem persists please contact RCSC."
        );
      });
  };

  useEffect(() => {
    if (query?.t) commitMutation(query.t as string);
  }, [query]);

  return (
    <>
      <Banner title="Opt-out" />
      <MarginLayout className="flex-col gap-2">
        {loading ? <LoadingSpinner /> : <PageMessage {...optOutMessage} />}
      </MarginLayout>
    </>
  );
};

OptOutPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo title="Opt-out" noindex />
      {page}
    </MainLayout>
  );
};

export default OptOutPage;
