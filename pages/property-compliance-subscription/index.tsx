import { CheckCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import { ReactElement, useContext } from "react";
import { Banner } from "~/components/Banner";
import ComplianceSubscriptionMaterials from "~/components/ComplianceSubscriptionMaterials";
import FaqComponent from "~/components/FAQ/Faq";
import FaqSectionsData from "~/components/FAQ/faqContent";
import { InspectionAreas } from "~/components/InspectionAreas";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import PropertyComplianceForm from "~/components/PropertyComplianceForm";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { NextPageWithLayout } from "~/pages/_app";
import { ViewportContext } from "~/providers/ViewportProvider";
import { PropertyComplianceSubscriptionContent as content } from "./content.pl";

const selectedId = [91, 92, 93, 94, 95, 96, 97, 98];

const PropertyComplianceSubscriptionPage: NextPageWithLayout = () => {
  const { isMobile } = useContext(ViewportContext);
  return (
    <>
      <Banner title={content.seo.title} />

      <MarginLayout className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "mx-auto flex max-w-7xl rounded bg-white shadow-sm",
            isMobile
              ? "flex-col-reverse gap-3 p-3"
              : "gap-8 p-8 md:grid md:grid-cols-2"
          )}
        >
          <div className="relative top-0 order-1 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/family_1.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className=" text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              {content.section1.title}
            </h3>
            {content.section1.paragraphs.map((p, i) => (
              <p key={i} className="mb-2">
                {p}
              </p>
            ))}
            <InspectionAreas
              ctaHref="/zarezerwuj-przeglad"
              ctaLabel="Skontaktuj się z nami"
            />
          </div>
        </div>
      </MarginLayout>

      <MarginLayout className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "mx-auto flex max-w-7xl rounded bg-white shadow-sm",
            isMobile
              ? "flex-col-reverse gap-3 p-3"
              : "gap-8 p-8 md:grid md:grid-cols-2"
          )}
        >
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/victoria_1.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="mb-4 text-gray-700">
            <h3 className="mb-4 text-xl font-bold text-gray-800 h3">
              {content.section2.title}
            </h3>
            {content.section2.paragraphs.map((p, i) => (
              <p key={i} className="mb-2">
                {p}
              </p>
            ))}
          </div>
        </div>
      </MarginLayout>

      <div className="mb-20 mt-20 flex flex-col gap-0 bg-black px-4 py-6 sm:mb-8 sm:mt-8 sm:px-8 md:mb-20 md:mt-20 md:flex-row md:px-24 md:py-12">
        <div className="flex w-full flex-col items-center justify-center border-white bg-black p-4 text-center sm:p-6 md:w-1/2 md:border-r-2 md:p-4">
          <p className="mb-4 text-center font-semibold text-white h5">
            {content.description}
          </p>

          <div className="flex items-center justify-center">
            <h4 className="text-3xl font-semibold text-white h2 sm:h3">
              {content.price}/<span className="text-xl">{content.year}</span>
            </h4>
          </div>
          <br></br>
          <i className="text-white">{content.note}</i>
        </div>

        <div className="w-full bg-black p-4 sm:p-6 md:w-1/2 md:p-2">
          <h3 className="mb-4 flex items-center justify-center text-xl font-semibold text-white h2">
            Korzyści
          </h3>
          <ul className="mb-4 space-y-4 pl-4 text-white sm:space-y-6 md:space-y-10">
            {content.items.map((item) => (
              <li key={item.title} className="flex items-start space-x-3">
                <CheckCircleIcon className="mt-1 h-10 w-10 shrink-0" />
                <div>
                  <strong>{item.title}</strong> <br />
                  {item.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <PropertyComplianceForm />
      <MarginLayout className="-mt-20 -mb-20 flex w-full flex-col">
        <ComplianceSubscriptionMaterials />
      </MarginLayout>

      <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
    </>
  );
};

PropertyComplianceSubscriptionPage.getLayout = function GetLayout(
  page: ReactElement
) {
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

export default PropertyComplianceSubscriptionPage;
