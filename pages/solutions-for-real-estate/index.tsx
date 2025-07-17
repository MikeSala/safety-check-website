import clsx from "clsx";
import { NextSeo } from "next-seo";
import { ReactElement, useContext } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/FAQ/FaqComponent";
import FaqSectionsData from "~/components/FAQ/FaqData";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import PropertyComplianceForm from "~/components/PropertyComplianceForm";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { NextPageWithLayout } from "~/pages/_app";
import { solutionsForRealEstate } from "~/pages/content/Solutions";
import InfoLinks from "~/pages/InfoLinks";
import { InspectionAreas } from "~/pages/InspectionAreas";
import { ViewportContext } from "~/providers/ViewportProvider";

const selectedId = [141, 142, 143, 144, 145];

const SolutionsForRealEstatePage: NextPageWithLayout = () => {
  const { isMobile } = useContext(ViewportContext);
  return (
    <>
      <Banner title={solutionsForRealEstate.bannerTitle} />
      <MarginLayout className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
            isMobile ? "gap-3 p-3" : "gap-8 p-8 "
          )}
        >
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/Mobile/smoke_2.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              {solutionsForRealEstate.section1.title}
            </h3>
            <p className="mb-4">
              {solutionsForRealEstate.section1.paragraphs.map((p, i) => (
                <p key={i} className="mb-2">
                  {p}
                </p>
              ))}
            </p>
            <InspectionAreas
              ctaHref="book-now"
              ctaLabel="Skontaktuj się z nami"
            />
          </div>
        </div>
      </MarginLayout>

      <MarginLayout className="mx-auto -mt-20 max-w-7xl">
        <div
          className={clsx(
            "mx-auto flex max-w-7xl flex-col-reverse rounded  bg-white shadow-sm",
            isMobile ? "gap-3 p-3" : "gap-8 p-8 md:grid md:grid-cols-2"
          )}
        >
          <div className="text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              {solutionsForRealEstate.section2.title}
            </h3>
            <p className="mb-4">
              {" "}
              {solutionsForRealEstate.section2.paragraphs.map((p, i) => (
                <p key={i} className="mb-2">
                  {p}
                </p>
              ))}
            </p>
            <InfoLinks />
          </div>

          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/gas_9.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </MarginLayout>
      <SubscriptionServiceBanner />
      <PropertyComplianceForm />
      <ServiceBoxes />

      <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
    </>
  );
};

SolutionsForRealEstatePage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="Solutions for Real Estate"
        description="Comprehensive safety checks for Real Estate. Get a safety inspection to keep your property safe. "
      />
      {page}
    </MainLayout>
  );
};

export default SolutionsForRealEstatePage;
