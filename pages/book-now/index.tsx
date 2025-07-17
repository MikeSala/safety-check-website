import { NextSeo } from "next-seo";
import React, { ReactElement } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Banner } from "~/components/Banner";
import PropertyComplianceForm from "~/components/PropertyComplianceForm";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import { MainLayout } from "~/components/layouts/MainLayout";
import { NextPageWithLayout } from "~/pages/_app";
import Link from "next/link";
import { MarginLayout } from "~/components/layouts/MarginLayout";

const BookPage: NextPageWithLayout = () => {
  return (
    <div>
      <Banner title="Book Now" />

      {/* Form */}
      {/*<PropertyComplianceForm />*/}

      {/* Temporary message until connected with new Cindirect in #72 */}
      <MarginLayout className="max-w-prose flex-col gap-2">
        <p className={"mb-4"}>
          Due to system upgrades, online bookings are currently unavailable.
        </p>
        <p>
          Instead, please contact us directly at{" "}
          <Link
            href={`tel:${process.env.NEXT_PUBLIC_TEL_LINK}`}
            className="link"
          >
            {process.env.NEXT_PUBLIC_TEL_LINK}
          </Link>{" "}
        </p>
      </MarginLayout>

      <ServiceBoxes />
    </div>
  );
};

BookPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="Book Now | RCSC - Residential & Commercial Safety Checks"
        description="Our team is ready to help you keep your business or property safe. Book now for fast, reliable service."
      />
      {page}
    </MainLayout>
  );
};

export default BookPage;
