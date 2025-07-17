import clsx from "clsx";
import { NextSeo } from "next-seo";
import { ReactElement, useContext } from "react";
import { Banner } from "~/components/Banner";
import FormComponent from "~/components/FormComponent";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { GeneralPlumbingContent } from "~/pages/content/GeneralPluming";
import { ViewportContext } from "~/providers/ViewportProvider";
import { Icons8ArrowRight, Icons8checkmark } from "~/src/components/icons";

const GeneralPlumbing: NextPageWithLayout = () => {
  const { isMobile } = useContext(ViewportContext);
  return (
    <>
      <Banner title="General Plumbing Services" />
      <MarginLayout className="mx-auto -mb-20 max-w-7xl">
        <div
          className={clsx(
            "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
            isMobile ? "gap-3 p-3" : "gap-8 p-8 "
          )}
        >
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/plumbing_2.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              {GeneralPlumbingContent.section1.title}
            </h3>
            <p className="mb-4">{GeneralPlumbingContent.section1.paragraphs}</p>
            <h5 className="mb-4 ">{GeneralPlumbingContent.section1.bullet}</h5>
            <ul className="mb-4 list-disc">
              {GeneralPlumbingContent.section1.list.map((p, i) => (
                <li
                  key={i}
                  className={`mb-2 flex items-center ${
                    isMobile ? "h-10 text-sm" : "h-14 text-base"
                  }`}
                >
                  <Icons8ArrowRight
                    className={`-ml-1 flex-shrink-0 ${
                      isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                    }`}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MarginLayout>
      <FormComponent titleId="plumbingService" />
      <MarginLayout className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "mx-auto flex max-w-7xl flex-col-reverse rounded  bg-white shadow-sm",
            isMobile ? "gap-3 p-3" : "gap-8 p-8 md:grid md:grid-cols-2"
          )}
        >
          <div className="flex flex-col text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              {GeneralPlumbingContent.section2.title}
            </h3>
            <p className="mb-4">{GeneralPlumbingContent.section2.paragraph}</p>
            <ul className="mb-2 list-disc">
              {GeneralPlumbingContent.section2.list.map((p, i) => (
                <li
                  key={i}
                  className={`mb-2 flex items-center ${
                    isMobile ? "h-12 text-sm" : "h-20 text-base"
                  }`}
                >
                  <Icons8checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            {GeneralPlumbingContent.section2.note}
          </div>
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/plumbing_4.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </MarginLayout>

      <MarginLayout className="mx-auto -mt-20 max-w-7xl">
        <div
          className={clsx(
            "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
            isMobile ? "gap-2 p-2" : "gap-8 p-8 "
          )}
        >
          <div className="relative top-0 flex flex-col md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/plumbing_1.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              {GeneralPlumbingContent.section3.title}
            </h3>
            <p className="mb-4">{GeneralPlumbingContent.section3.paragraph}</p>

            {GeneralPlumbingContent.section3.list.map((p, i) => (
              <li
                key={i}
                className={`mb-2 flex items-center ${
                  isMobile ? "h-12 text-sm" : "h-20 text-base"
                }`}
              >
                <Icons8ArrowRight
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                {p}
              </li>
            ))}

            <p>{GeneralPlumbingContent.section3.note}</p>
          </div>
        </div>
      </MarginLayout>
    </>
  );
};

GeneralPlumbing.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="General Plumbing Services"
        description="Our professional plumbers are here, offering expert hot water and leak repair, gas heater service, and comprehensive plumbing solutions."
      />
      {page}
    </MainLayout>
  );
};

export default GeneralPlumbing;
