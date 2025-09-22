import clsx from "clsx";
import { NextSeo } from "next-seo";
import { ReactElement, useContext } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/Faq/Faq";
import FaqSectionsData from "~/components/Faq/FaqContent";
import { InspectionAreas } from "~/components/InspectionAreas";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import PropertyComplianceForm from "~/components/PropertyComplianceForm";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { NextPageWithLayout } from "~/pages/_app";
import InfoLinks from "~/pages/InfoLinks";
import { SolutionsForHomeownersContent as content } from "~/pages/dla-wlascicieli-domow/content.pl";
import { ROUTES } from "~/pages/content/Routes";
import { ViewportContext } from "~/providers/ViewportProvider";

const selectedId = [121, 122, 123, 124, 125];

const SolutionsForHomeownersPage: NextPageWithLayout = () => {
  const { isMobile } = useContext(ViewportContext);
  return (
    <>
      <Banner title={content.seo.title} />
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
              {content.section1.title}
            </h3>
            {content.section1.paragraphs.map((p, i) => (
              <p key={i} className="mb-2">
                {p}
              </p>
            ))}
            <InspectionAreas
              ctaHref={ROUTES.BOOK_NOW}
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
              {content.section2.title}
            </h3>
            {content.section2.paragraphs.map((p, i) => (
              <p key={i} className="mb-2">
                {p}
              </p>
            ))}
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

SolutionsForHomeownersPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title={content.seo.title}
        description={content.seo.description}
      />
      {page}
    </MainLayout>
  );
};

export default SolutionsForHomeownersPage;
