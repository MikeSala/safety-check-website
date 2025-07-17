import clsx from "clsx";
import { NextSeo } from "next-seo";
import { ReactElement, useContext } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/FAQ/FaqComponent";
import FaqSectionsData from "~/components/FAQ/FaqData";
import InclusionsExclusions from "~/components/InclusionsExclusions";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import PropertyComplianceForm from "~/components/PropertyComplianceForm";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { NextPageWithLayout } from "~/pages/_app";
import { SmokeSafetyCheckContent } from "~/pages/content/SmokeSafetyCheck";
import { InspectionAreas } from "~/pages/InspectionAreas";
import { ViewportContext } from "~/providers/ViewportProvider";

const selectedId = [11, 12, 13, 14, 15, 16, 17];

const SmokeSafetyCheckPage: NextPageWithLayout = () => {
  const { isMobile } = useContext(ViewportContext);

  return (
    <>
      <Banner title="Smoke Alarm Safety Check" />
      <MarginLayout className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
            isMobile ? "gap-3 p-3" : "gap-8 p-8 "
          )}
        >
          <div className="relative top-0 flex flex-col md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/smoke_4.jpg"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              {SmokeSafetyCheckContent.section1.title}
            </h3>
            {SmokeSafetyCheckContent.section1.paragraphs.map((p, i) => (
              <p key={i} className="mb-2">
                {p}
              </p>
            ))}

            <InspectionAreas
              ctaLabel="Book Now and get your Smoke Safety Check"
              ctaHref="/book-now"
            />
          </div>
        </div>
      </MarginLayout>
      <MarginLayout className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "mx-auto flex max-w-7xl flex-col-reverse rounded  bg-white shadow-sm",
            isMobile ? "gap-3 p-3" : "gap-8 p-8 md:grid md:grid-cols-2"
          )}
        >
          <div className="flex flex-col text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              {SmokeSafetyCheckContent.section2.title}
            </h3>
            {SmokeSafetyCheckContent.section2.paragraphs.map((p, i) => (
              <p key={i} className="mb-2">
                {p}
              </p>
            ))}
          </div>
          <div className="relative top-0 flex flex-col md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/smoke_1.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </MarginLayout>

      <InclusionsExclusions category="Smoke Alarm Safety Checks" />
      <PropertyComplianceForm />
      <SubscriptionServiceBanner />
      <ServiceBoxes />

      <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
    </>
  );
};

SmokeSafetyCheckPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="Smoke Alarm Safety Check for Rental Property"
        description="Smoke alarm detector checks in rented or commercial properties in Melbourne. Book an inspection and keep your property safe with RCSC."
      />
      {page}
    </MainLayout>
  );
};

export default SmokeSafetyCheckPage;
