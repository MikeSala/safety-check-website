import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import Button, { ButtonColor } from "~/components/Button";
import { InspectionAreas } from "~/components/InspectionAreas";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { MainLayout } from "~/components/layouts/MainLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { ROUTES } from "~/pages/content/Routes";
import { AboutUsPageContent as content } from "~/content/o-nas/content.pl";

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title={content.seo.title} />
      <div className="flex flex-grow flex-wrap lg:flex-nowrap">
        <ResponsiveImage
          className="order-1 lg:order-1 lg:h-auto lg:w-1/2"
          src="/RCSC/cropped_tower.webp"
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="order-1 flex flex-col justify-center gap-4 px-4 py-8 sm:px-6 sm:py-12 lg:w-1/2 lg:px-16 lg:py-20">
          <h2 className="font-bold h2">{content.title}</h2>
          <p>{content.description}</p>
          <Button
            href="/kontakt"
            color={ButtonColor.Primary}
            className="mb-10 mt-10 w-fit"
            size="xl"
            outline
          >
            Skontaktuj się z nami
            <ArrowLongRightIcon className="ml-2 h-7 w-7" />{" "}
          </Button>

          <InspectionAreas
            ctaHref={ROUTES.BOOK_NOW}
            ctaLabel="Zarezerwuj przegląd"
          />
        </div>
      </div>
    </>
  );
};

AboutPage.getLayout = function GetLayout(page: ReactElement) {
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

export default AboutPage;
