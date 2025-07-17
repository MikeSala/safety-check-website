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
import { electricalSafetyCheckContent } from "~/pages/content/ElectricalSafetyCheck";
import { InspectionAreas } from "~/pages/InspectionAreas";
import { ViewportContext } from "~/providers/ViewportProvider";
import { Icons8checkmark } from "~/src/components/icons";

const selectedId = [21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33];

const ElectricalSafetyCheckPage: NextPageWithLayout = () => {
  const { isMobile } = useContext(ViewportContext);
  return (
    <>
      <Banner title="Electrical Safety Check" />
      <MarginLayout className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
            isMobile ? "gap-3 p-3" : "gap-8 p-8 "
          )}
        >
          <div className="relative top-0 flex flex-col md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/elec_3.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className=" text-gray-700 ">
            <div>
              <h3 className="mb-4 text-xl font-bold h3">
                {electricalSafetyCheckContent.section1.title}
              </h3>
              {electricalSafetyCheckContent.section1.paragraphs.map((p, i) => (
                <p key={i} className="mb-2">
                  {p}
                </p>
              ))}
              <InspectionAreas
                ctaLabel="Skontaktuj się z nami"
                ctaHref="/book-now"
              />
            </div>
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
            <h3 className="mb-4 text-xl font-bold text-gray-800 h3">
              {electricalSafetyCheckContent.section2.title}
            </h3>
            {electricalSafetyCheckContent.section2.paragraphs.map((p, i) => (
              <p key={i} className="mb-2">
                {p}
              </p>
            ))}
          </div>
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/elec_5.webp"
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
              src="/RCSC/elec_6.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              {electricalSafetyCheckContent.section3.title}
            </h3>
            <div>
              <p className="">{electricalSafetyCheckContent.section3.intro}</p>

              <ul className="mb-4 list-disc">
                {electricalSafetyCheckContent.section3.paragraphs.map(
                  (p, i) => (
                    <li
                      key={i}
                      className={`mb-2 flex items-center ${
                        isMobile ? "h-16 text-sm" : "h-20 text-base"
                      }`}
                    >
                      <Icons8checkmark
                        className={`-ml-1 flex-shrink-0 ${
                          isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                        }`}
                      />
                      {p}
                    </li>
                  )
                )}
              </ul>
              <p>{electricalSafetyCheckContent.section3.note}</p>
            </div>
          </div>
        </div>
      </MarginLayout>

      <InclusionsExclusions category="Electrical Safety Checks" />
      <PropertyComplianceForm />
      <SubscriptionServiceBanner />

      <ServiceBoxes />

      <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
    </>
  );
};

ElectricalSafetyCheckPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="Electrical Safety Check for Rental Property"
        description="Electrical safety checks in rented or commercial properties in Melbourne. Book a safety check now and keep your property safe with RCSC."
      />
      {page}
    </MainLayout>
  );
};

export default ElectricalSafetyCheckPage;
