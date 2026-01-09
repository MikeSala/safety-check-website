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
import ServiceHighlight from "~/components/ServiceHighlight";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import SectionStrip from "~/components/SectionStrip";
import { BG, TEXT } from "~/components/theme/colors";
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
      <SectionStrip
        title={content.titles.mainTitle}
        bgClassName={BG.lightMuted}
        paddingClassName="px-4 py-12 sm:py-16 lg:px-6"
        titleClassName="bg-transparent font-semibold h2"
      />

      <MarginLayout>
        <ServiceSelector />
      </MarginLayout>

      <SectionStrip title={content.titles.subTitle1} />
      <MarginLayout>
        <SolutionSelector />
      </MarginLayout>
      {/* <ResponsiveImage className="-mt-15" src="/hero-hallway.webp" /> */}
      <SectionStrip
        title={content.titles.subTitle2}
        bgClassName={`${BG.primary} ${TEXT.onPrimary}`}
        paddingClassName="px-4 py-12 sm:py-24 lg:px-8"
      />
      <MarginLayout className="mx-auto max-w-7xl">
        <ServiceHighlight
          title={content.electrical.title}
          description={content.electrical.paragraphs}
          subTitle={content.electrical.subTitle}
          bullets={content.electrical.bullets}
          note={content.electrical.note}
          imageSrc={homeElectricalImage}
          imageAlt="Technik wykonujący pomiary rozdzielnicy elektrycznej"
          imageSizes="(min-width: 1024px) 33vw,(min-width: 640px) 60vw, 100vw"
        />

        <ServiceHighlight
          title={content.gas.title}
          description={content.gas.paragraphs}
          subTitle={content.gas.subTitle}
          bullets={content.gas.bullets}
          note={content.gas.closing}
          imageSrc={homeGasImage}
          imageAlt="Specjalista kontrolujący instalację gazową w kuchni"
          imageSizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
          reverseOnMobile
        />

        <ServiceHighlight
          title={content.smoke.title}
          description={content.smoke.description}
          subTitle={content.smoke.subTitle}
          bullets={content.smoke.bullets}
          note={content.smoke.note}
          imageSrc={homeSmokeImage}
          imageAlt="Zespół montujący czujniki dymu w domu"
          imageSizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
        />
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
