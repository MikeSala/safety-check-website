import clsx from "clsx";
import { NextSeo } from "next-seo";
import { ReactElement, useContext } from "react";
import Bar from "~/components/Bar";
import FaqComponent from "~/components/Faq/Faq";
import FaqSectionsData from "~/components/Faq/FaqContent";
import HeaderComponent from "~/components/HeaderComponent";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import ServiceSelector from "~/components/ServiceSelector";
import SolutionSelector from "~/components/SolutionSelector";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { HomePageContent as content } from "~/content/homePageContent";
import { ViewportContext } from "~/providers/ViewportProvider";
import { Icons8checkmark } from "~/src/components/icons";
import homeElectricalImage from "~/src/assets/images/hero-power-box.webp";
import homeGasImage from "~/src/assets/images/gas_10.jpg";
import homeSmokeImage from "~/src/assets/images/smoke-alarm-check.webp";

const selectedId = [
  1, 2, 3, 4, 11, 12, 15, 21, 22, 23, 41, 42, 43, 44, 71, 72, 81, 83, 91, 93,
  95, 97,
];

const HomePage: NextPageWithLayout = () => {
  const { isMobile } = useContext(ViewportContext);

  return (
    <>
      <HeaderComponent />
      <Bar
        backgroundColor="bg-sky-800"
        textColor="text-white"
        iconColor="text-white"
      />
      <article className="flex h-[100px] flex-col items-center justify-center gap-4 bg-gray-200/70 px-4 py-12 text-center text-2xl h3 sm:py-16 lg:px-6">
        <h2 className="bg-transparent font-semibold h2 ">
          {content.titles.mainTitle}
        </h2>
      </article>

      <MarginLayout>
        <ServiceSelector />
      </MarginLayout>

      <article className="flex h-[100px] flex-col items-center justify-center gap-4 bg-gray-200 px-4 py-12 text-center text-2xl h3 sm:py-16 lg:px-8">
        <h2 className="font-semibold h2">{content.titles.subTitle1}</h2>
      </article>
      <MarginLayout>
        <SolutionSelector />
      </MarginLayout>
      {/* <ResponsiveImage className="-mt-15" src="/hero-hallway.webp" /> */}
      <article className="flex h-[100px] flex-col items-center justify-center gap-4 bg-sky-800 px-4 py-12 text-center text-2xl text-white h3 sm:py-24 lg:px-8">
        <h2 className="font-semibold h2">{content.titles.subTitle2}</h2>
      </article>
      <MarginLayout className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
            isMobile ? "gap-3 p-3" : "gap-8 p-8"
          )}
        >
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src={homeElectricalImage}
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 60vw, 100vw"
              alt="Technik wykonujący pomiary rozdzielnicy elektrycznej"
            />
          </div>

          <div className="min-w-0 flex-1 text-gray-700">
            <h3 className="mb-4 text-xl font-bold text-gray-800 h3">
              {content.electrical.title}
            </h3>
            {content.electrical.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 ">
                {p}
              </p>
            ))}

            <p className="">{content.electrical.subTitle}</p>
            <ul className="mb-2 mt-2 list-disc">
              {content.electrical.bullets.map((check, i) => (
                <li
                  key={i}
                  className={`flex items-center ${
                    isMobile ? "h-30 mb-4 text-sm" : "h-24"
                  }`}
                >
                  <Icons8checkmark
                    className={`-ml-1 flex-shrink-0 ${
                      isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                    }`}
                  />
                  {check}
                </li>
              ))}
            </ul>
            <i className="mb-4">{content.electrical.note}</i>
            <p className="mt-2">{content.electrical.closing}</p>
          </div>
        </div>
        <div
          className={clsx(
            "mx-auto flex max-w-7xl rounded bg-white shadow-sm",
            isMobile
              ? "flex-col-reverse gap-3 p-3"
              : "gap-8 p-8 md:grid md:grid-cols-2"
          )}
        >
          <div className="flex-2 relative min-w-0 flex-col items-center justify-center text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">{content.gas.title}</h3>
            <p className="mb-4 ">{content.gas.paragraphs}</p>

            <p className=" text-gray-800">{content.gas.subTitle}</p>
            <ul className="mt-2 list-disc">
              {content.gas.bullets.map((check, i) => (
                <li
                  key={i}
                  className={`flex items-center ${
                    isMobile
                      ? i === 0
                        ? " mb-4 h-8 text-sm"
                        : " mb-4 h-10 text-sm"
                      : "h-20"
                  }`}
                >
                  <Icons8checkmark
                    className={`-ml-1 flex-shrink-0 ${
                      isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                    }`}
                  />
                  {check}
                </li>
              ))}
            </ul>
            <p>{content.gas.closing}</p>
          </div>
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            {" "}
            <ResponsiveImage
              src={homeGasImage}
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
              alt="Specjalista kontrolujący instalację gazową w kuchni"
            />
          </div>
        </div>

        <div
          className={clsx(
            "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
            isMobile ? "gap-3 p-3" : "gap-8 p-8"
          )}
        >
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src={homeSmokeImage}
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
              alt="Zespół montujący czujniki dymu w domu"
            />
          </div>{" "}
          <div className="min-w-0 flex-1 text-gray-700">
            <h3 className="mb-4 text-xl font-bold  h3">
              {content.smoke.title}
            </h3>
            <p className="mb-4">{content.smoke.description}</p>
            <p className="mb-2">{content.smoke.subTitle}</p>
            <ul className="mb-6 mt-2 list-disc">
              {content.smoke.bullets.map((check, i) => (
                <li
                  key={i}
                  className={`flex items-center ${
                    isMobile ? " mb-4 h-8 text-sm" : "h-14"
                  }`}
                >
                  <Icons8checkmark
                    className={`-ml-1 flex-shrink-0 ${
                      isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                    }`}
                  />
                  {check}
                </li>
              ))}
            </ul>
            <p className="mb-2">{content.smoke.note}</p>
          </div>
        </div>
      </MarginLayout>
      <ServiceBoxes />
      <SubscriptionServiceBanner />
      <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
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

export default HomePage;
