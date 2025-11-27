import clsx from "clsx";
import type { StaticImageData } from "next/image";
import { type ComponentProps, type ReactNode } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/Faq/Faq";
import FaqSectionsData from "~/components/Faq/FaqContent";
import { InspectionAreas } from "~/components/InspectionAreas";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import PropertyComplianceForm from "~/components/PropertyComplianceForm";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";

export type SolutionsSection = {
  title: string;
  paragraphs: string[];
  image: StaticImageData | string;
  reverse?: boolean;
  additionalContent?: ReactNode;
  cta?: {
    href: string;
    label: string;
  };
};

export type SolutionsLandingPageProps = {
  bannerTitle: string;
  sections: SolutionsSection[];
  faqSelectedIds: number[];
  marginLayoutProps?: Partial<ComponentProps<typeof MarginLayout>>;
};

const containerBaseClass =
  "rounded bg-white shadow-sm flex flex-col gap-3 p-3 md:flex-row md:gap-8 md:p-8";
const imageWrapperClass =
  "relative top-0 w-full md:sticky md:top-[100px] md:h-[400px] md:w-1/2";
const textWrapperClass = "text-gray-700 md:w-1/2 md:flex md:flex-col";

export const SolutionsLandingPage: React.FC<SolutionsLandingPageProps> = ({
  bannerTitle,
  sections,
  faqSelectedIds,
  marginLayoutProps,
}) => {
  const { className: marginClassName, ...restMarginProps } =
    marginLayoutProps ?? {};

  return (
    <>
      <Banner title={bannerTitle} />
      {sections.map((section, index) => {
        const { title, paragraphs, image, reverse, additionalContent, cta } =
          section;

        return (
          <MarginLayout
            key={index}
            className={clsx("mx-auto max-w-7xl", marginClassName)}
            {...restMarginProps}
          >
            <div
              className={clsx(
                containerBaseClass,
                reverse && "flex-col-reverse md:flex-row-reverse"
              )}
            >
              <div className={textWrapperClass}>
                <h3 className="mb-4 text-xl font-bold h3">{title}</h3>
                {paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="mb-2">
                    {paragraph}
                  </p>
                ))}
                {additionalContent}
                {cta && (
                  <InspectionAreas ctaHref={cta.href} ctaLabel={cta.label} />
                )}
              </div>

              <div className={imageWrapperClass}>
                <ResponsiveImage
                  src={image}
                  sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
                  alt={`Ilustracja sekcji ${title}`}
                />
              </div>
            </div>
          </MarginLayout>
        );
      })}

      <SubscriptionServiceBanner />
      <PropertyComplianceForm />
      <ServiceBoxes />

      <FaqComponent sections={FaqSectionsData} selectedIds={faqSelectedIds} />
    </>
  );
};

export default SolutionsLandingPage;
