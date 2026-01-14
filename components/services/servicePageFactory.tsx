import { ReactElement } from "react";
import { StaticImageData } from "next/image";
import { NextSeo } from "next-seo";
import { Banner } from "~/components/Banner";
import Faq from "~/components/Faq/Faq";
import faqSections from "~/components/Faq/FaqContent";
import { ServiceSection } from "~/components/shared/ServiceSection";
import { MainLayout } from "~/components/layouts/MainLayout";
import { NextPageWithLayout } from "~/pages/_app";

type ContentSection = {
  title: string;
  paragraphs: string[];
};

type SEOContent = {
  title: string;
  description: string;
};

type ServicePageContent = {
  section1: ContentSection;
  section2: ContentSection;
  section3?: ContentSection;
  seo: SEOContent;
};

type ServiceImage = {
  src: StaticImageData | string;
  alt: string;
};

export type ServicePageOptions = {
  content: ServicePageContent;
  images: ServiceImage[];
  faqSelectedIds: number[];
  section1Children?: React.ReactNode;
  section2Children?: React.ReactNode;
  section3Children?: React.ReactNode;
  showInclusionsExclusions?: boolean;
  inclusionsExclusionsComponent?: React.ReactNode;
  additionalBottomContent?: React.ReactNode;
};

export const createServicePage = ({
  content,
  images,
  faqSelectedIds,
  section1Children,
  section2Children,
  section3Children,
  showInclusionsExclusions = false,
  inclusionsExclusionsComponent,
  additionalBottomContent,
}: ServicePageOptions): NextPageWithLayout => {
  const ServicePage: NextPageWithLayout = () => {
    return (
      <>
        <Banner title={content.seo.title} />

        {/* Section 1 */}
        <ServiceSection
          title={content.section1.title}
          paragraphs={content.section1.paragraphs}
          image={images[0]}
          imagePosition="left"
        >
          {section1Children}
        </ServiceSection>

        {/* Section 2 */}
        <ServiceSection
          title={content.section2.title}
          paragraphs={content.section2.paragraphs}
          image={images[1]}
          imagePosition="right"
        >
          {section2Children}
        </ServiceSection>

        {/* Section 3 (optional) */}
        {content.section3 && images[2] && (
          <ServiceSection
            title={content.section3.title}
            paragraphs={content.section3.paragraphs}
            image={images[2]}
            imagePosition="left"
            marginTop="-mt-20"
          >
            {section3Children}
          </ServiceSection>
        )}

        {/* Inclusions/Exclusions (optional) */}
        {showInclusionsExclusions && inclusionsExclusionsComponent}

        {/* FAQ */}
        <Faq sections={faqSections} selectedIds={faqSelectedIds} />

        {/* Additional bottom content (optional) */}
        {additionalBottomContent}
      </>
    );
  };

  ServicePage.getLayout = function GetLayout(page: ReactElement) {
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

  return ServicePage;
};
