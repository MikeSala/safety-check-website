import clsx from "clsx";
import { NextSeo } from "next-seo";
import { ReactElement, useContext } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/FAQ/Faq";
import FaqSectionsData from "~/components/FAQ/faqContent";
import InclusionsExclusions from "~/components/InclusionsExclusions";
import { InspectionAreas } from "~/components/InspectionAreas";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import PropertyComplianceForm from "~/components/PropertyComplianceForm";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { NextPageWithLayout } from "~/pages/_app";
import { ViewportContext } from "~/providers/ViewportProvider";
import { Icons8ArrowRight } from "~/src/components/icons";
import { GasSafetyCheckContent as content } from "./content.pl";

const selectedId = [
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
];

const GasSafetyCheckPage: NextPageWithLayout = () => {
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
          <div className="relative top-0 flex flex-col md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/gas_2.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              {" "}
              {content.section1.title}
            </h3>
            {content.section1.paragraphs.map((p, i) => (
              <p key={i} className="mb-2">
                {p}
              </p>
            ))}
            <InspectionAreas
              ctaLabel="Book Now and get your Gas Safety Check"
              ctaHref="/zarezerwuj-przeglad"
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
          <div className="flex flex-col  text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              {content.section2.title}
            </h3>

            {content.section2.paragraphs.map((p, i) => (
              <p key={i} className="mb-2">
                {p}
              </p>
            ))}
          </div>
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/elec_1.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </MarginLayout>

      <MarginLayout className="mx-auto -mt-20 max-w-7xl">
        <div
          className={clsx(
            "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
            isMobile ? "gap-3 p-3" : "gap-8 p-8 "
          )}
        >
          <div className="relative top-0 flex flex-col md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/elec_7.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="text-gray-700">
            <h3 className="mb-4 text-xl font-bold  h3">
              {content.section3.title}
            </h3>
            <p className="">{content.section3.intro}</p>
            <ul className="mb-4 list-disc">
              {content.section3.paragraphs.map((p, i) => (
                <li
                  key={i}
                  className={`mb-2 flex items-center ${
                    isMobile ? "h-20 text-sm" : "h-20 text-base"
                  }`}
                >
                  <Icons8ArrowRight
                    className={`-ml-1 flex-shrink-0 ${
                      isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                    }`}
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mb-4">{content.section3.note}</p>
          </div>
        </div>
      </MarginLayout>
      <InclusionsExclusions category="Przeglądy Bezpieczeństwa Elektrycznego" />
      <PropertyComplianceForm />
      <SubscriptionServiceBanner />
      <ServiceBoxes />

      <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
    </>
  );
};

GasSafetyCheckPage.getLayout = function GetLayout(page: ReactElement) {
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

export default GasSafetyCheckPage;
