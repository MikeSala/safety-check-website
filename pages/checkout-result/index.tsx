import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";

const CheckoutResultPage: NextPageWithLayout = () => {
  const { query } = useRouter();

  return (
    <>
      <Banner title="Checkout Result" />
      <MarginLayout className="flex-col gap-2">
        {query.redirect_status === "succeeded" ? (
          <>
            <p className="font-semibold">Thank you!</p>
            <p>
              Payment for your order will be debited from your account after
              your work order is reviewed and the work order is formally
              accepted by RCSC.
            </p>
            <p>All processed payments are non-refundable.</p>
            <p>
              Upon accepting a payment, one of our team members will be in touch
              shortly to confirm your appointment.
            </p>
          </>
        ) : (
          <>
            <p className="font-semibold">
              Error occurred when adding payment details, please try again.
            </p>
            <p>
              If the problem persists, please contact our staff through the{" "}
              <Link href="/contact-us" className="link">
                contact form
              </Link>
              .
            </p>
          </>
        )}
      </MarginLayout>
    </>
  );
};

CheckoutResultPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo title="Checkout Result" noindex />
      {page}
    </MainLayout>
  );
};

export default CheckoutResultPage;
