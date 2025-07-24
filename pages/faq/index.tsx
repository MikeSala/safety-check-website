import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import FaqComponent from "../../components/FAQ/Faq";
import faqSectionsData from "../../components/FAQ/faqContent";
import { faqPageContent as content } from "./content.pl";

const selectedId = [
  1, 2, 3, 4, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  31, 32, 33, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
  57, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
];

const FaqPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title={content.seo.title} />
      <MarginLayout className="mx-auto flex-col sm:-mb-20">
        <h3 className="mb-4 text-center font-bold h2">{content.title}</h3>
        {content.description}
      </MarginLayout>

      <MarginLayout className="flex-col gap-2 py-1">
        <FaqComponent sections={faqSectionsData} selectedIds={selectedId} />
      </MarginLayout>

      <MarginLayout className="-mb-15 mx-auto -mt-20 flex-col">
        <i>{content.note}</i>
      </MarginLayout>
    </>
  );
};

FaqPage.getLayout = function GetLayout(page: ReactElement) {
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

export default FaqPage;
