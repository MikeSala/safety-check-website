import { NextSeo } from "next-seo";
import { ReactElement, ReactNode } from "react";
import { MainLayout } from "~/components/layouts/MainLayout";
import {
  SolutionsLandingPage,
  type SolutionsSection,
} from "~/components/SolutionsLandingPage";
import { ROUTES } from "~/content/Routes";
import { NextPageWithLayout } from "~/pages/_app";
import gasServiceImage from "~/src/assets/images/gas_10.jpg";
import smokeServiceImage from "~/src/assets/images/smoke-alarm-check.webp";

type SolutionsPageContent = {
  section1: {
    title: string;
    paragraphs: string[];
  };
  section2: {
    title: string;
    paragraphs: string[];
  };
  seo: {
    title: string;
    description: string;
  };
};

type SolutionsPageFactoryOptions = {
  content: SolutionsPageContent;
  faqSelectedIds: number[];
  sections?: SolutionsSection[];
};

export const buildDefaultSolutionsSections = (
  content: SolutionsPageContent,
  additionalContent?: ReactNode
): SolutionsSection[] => [
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
    additionalContent,
  },
];

export const createSolutionsPage = ({
  content,
  faqSelectedIds,
  sections,
}: SolutionsPageFactoryOptions): NextPageWithLayout => {
  const resolvedSections = sections ?? buildDefaultSolutionsSections(content);

  const SolutionsPage: NextPageWithLayout = () => {
    return (
      <SolutionsLandingPage
        bannerTitle={content.seo.title}
        sections={resolvedSections}
        faqSelectedIds={faqSelectedIds}
      />
    );
  };

  SolutionsPage.getLayout = function GetLayout(page: ReactElement) {
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

  return SolutionsPage;
};
