import clsx from "clsx";
import { NextSeo } from "next-seo";
import { ReactElement, useContext } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/Faq/Faq";
import FaqSectionsData from "~/components/Faq/FaqContent";
import FormComponent from "~/components/FormComponent";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import SwitchboardInclusionsExclusions from "~/components/SwitchboardInclusionsExclusions";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { ViewportContext } from "~/providers/ViewportProvider";
import { Icons8ArrowRight } from "~/src/components/icons";
import { SwitchboardUpgradeContent as content } from "~/content/modernizacja-rozdzielnicy/content.pl";

const selectedId = [71, 72, 73, 74, 75, 76];

const SwitchboardUpgradePage: NextPageWithLayout = () => {
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
              src="/RCSC/electrical-switchboard-before.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="text-gray-700">
            <h3 className="mb-2 text-xl font-bold h3">
              {content.section1.title}
            </h3>

            {content.section1.paragraphs.map((p, i) => (
              <p key={i} className="mb-2">
                {p}
              </p>
            ))}

            <ul className="mb-2 mt-2 list-disc">
              {content.section1.bullets.map((p, i) => (
                <li key={i} className="mb-2 flex h-16 items-center">
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
      <MarginLayout className="mx-auto max-w-7xl">
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
          </div>

          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            {" "}
            <ResponsiveImage
              src="/RCSC/electrical-switchboard-after.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </MarginLayout>

      <MarginLayout className="mx-auto mb-10 max-w-7xl">
        <div
          className={clsx(
            "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
            isMobile ? "gap-2 p-2" : "gap-8 p-8 "
          )}
        >
          <div className="relative top-0 flex flex-col md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/elec_9.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-800 h3">
              {content.section3.title}
            </h3>
            {content.section3.paragraphs.map((p, i) => (
              <p key={i} className="mb-2">
                {p}
              </p>
            ))}
          </div>
        </div>
      </MarginLayout>
      <FormComponent titleId="switchboardUpgrade" />
      <SwitchboardInclusionsExclusions />
      <ServiceBoxes />
      <SubscriptionServiceBanner />
      <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
    </>
  );
};

SwitchboardUpgradePage.getLayout = function GetLayout(page: ReactElement) {
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

export default SwitchboardUpgradePage;
