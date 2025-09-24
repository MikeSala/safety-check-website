import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { MainLayout } from "~/components/layouts/MainLayout";
import {
  SolutionsLandingPage,
  type SolutionsSection,
} from "~/components/SolutionsLandingPage";
import { NextPageWithLayout } from "~/pages/_app";
import InfoLinks from "~/pages/InfoLinks";
import { ROUTES } from "~/content/Routes";
import { SolutionsForBuildingManagersContent as content } from "~/content/dla-administratorow-budynkow/content.pl";
import gasServiceImage from "~/src/assets/images/gas_10.jpg";
import smokeServiceImage from "~/src/assets/images/smoke-alarm-check.webp";

const selectedId = [131, 132, 133, 134, 135];

const sections: SolutionsSection[] = [
  {
    title: content.section1.title,
    paragraphs: content.section1.paragraphs,
    image: smokeServiceImage,
    cta: {
      href: ROUTES.BOOK_NOW,
      label: "Skontaktuj się z nami",
    },
  },
  {
    title: content.section2.title,
    paragraphs: content.section2.paragraphs,
    image: gasServiceImage,
    reverse: true,
    additionalContent: <InfoLinks />,
  },
];

const SolutionsForBuildingManagersPage: NextPageWithLayout = () => {
  return (
    <SolutionsLandingPage
      bannerTitle={content.seo.title}
      sections={sections}
      faqSelectedIds={selectedId}
    />
  );
};

SolutionsForBuildingManagersPage.getLayout = function GetLayout(
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

export default SolutionsForBuildingManagersPage;
