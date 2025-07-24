import clsx from "clsx";
import { NextSeo } from "next-seo";
import { ReactElement, useContext } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/FAQ/Faq";
import FaqSectionsData from "~/components/FAQ/faqContent";
import FormComponent from "~/components/FormComponent";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { caravanGasContent as content } from "~/pages/caravan-gas-compliance-check/content.pl";
import { ViewportContext } from "~/providers/ViewportProvider";
import { Icons8ArrowRight, Icons8checkmark } from "~/src/components/icons";

const selectedId = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70];

const CaravanGasComplianceCheckPage: NextPageWithLayout = () => {
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
              src="/RCSC/caravan_2.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">{content.intro.title}</h3>
            {content.intro.paragraphs.map((p, i) => (
              <p key={i} className="mb-4">
                {p}
              </p>
            ))}

            <ul className="mb-2 mt-2 list-disc">
              {content.intro.bullets.notes.map((n, i) => (
                <li
                  key={i}
                  className={`mb-2 flex items-center ${
                    isMobile ? "h-10 text-sm" : "h-10 text-base"
                  }`}
                >
                  <Icons8checkmark
                    className={`-ml-1 flex-shrink-0 ${
                      isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                    }`}
                  />
                  {n}
                </li>
              ))}
            </ul>
            <p className="mb-2">{content.intro.bullets.finalNote}</p>
          </div>
        </div>
      </MarginLayout>

      <FormComponent titleId="caravanSafety" />
      <MarginLayout className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "mx-auto flex max-w-7xl flex-col-reverse rounded  bg-white shadow-sm",
            isMobile ? "gap-3 p-3" : "gap-8 p-8 md:grid md:grid-cols-2"
          )}
        >
          <div className="flex flex-col text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              {content.guidelines.title}
            </h3>
            <p className="mb-4">{content.guidelines.paragraph}</p>
            <ul className="mb-4 list-disc">
              {content.guidelines.bullets.map((b, i) => (
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
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/caravan_3.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </MarginLayout>
      <MarginLayout className="mx-auto -mt-20 max-w-7xl">
        <div className="flex flex-col gap-8 rounded bg-white p-8 shadow-sm md:grid md:grid-cols-2">
          <div className="relative top-0 flex flex-col md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/caravan_1.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="text-gray-700">
            <h3 className="mb-4 text-xl font-bold  h3">
              {content.preparation.title}
            </h3>
            <p className="mb-2">{content.preparation.paragraph1}</p>
            <ul className="list-disc">
              {content.preparation.bullets.map((item, index) => (
                <li
                  key={index}
                  className={`mb-2 flex items-center ${
                    isMobile ? "h-12 text-sm" : "h-12 text-base"
                  }`}
                >
                  <Icons8ArrowRight
                    className={`-ml-1 flex-shrink-0 ${
                      isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                    }`}
                  />
                  {item}
                </li>
              ))}
            </ul>
            {content.preparation.finalNote}
          </div>
        </div>
      </MarginLayout>

      <SubscriptionServiceBanner />

      <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
    </>
  );
};

CaravanGasComplianceCheckPage.getLayout = function GetLayout(
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

export default CaravanGasComplianceCheckPage;
