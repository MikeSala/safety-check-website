import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/FAQ/FaqComponent";
import FaqSectionsData from "~/components/FAQ/FaqData";
import FormComponent from "~/components/FormComponent";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import { ServiceProjects } from "~/components/ServiceProjects";
import SolutionSelector from "~/components/SolutionSelector";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { solutionsContent } from "~/pages/content/Solutions";

const selectedId = [
  1, 2, 3, 4, 11, 12, 15, 21, 22, 23, 41, 42, 43, 44, 71, 72, 81, 83, 91, 93,
  95, 97,
];

const SolutionsPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title={solutionsContent.bannerTitle} />
      <MarginLayout className="flex w-full justify-center">
        <SolutionSelector />
      </MarginLayout>
      <MarginLayout className="flex">
        <div className="mx-auto -mt-20 rounded bg-white p-8 shadow-sm">
          <h3 className="mb-4 text-xl font-bold text-gray-800 h3">
            {solutionsContent.section1.title}
          </h3>
          {solutionsContent.section1.paragraphs.map((p, i) => (
            <p key={i} className="mb-2">
              {p}
            </p>
          ))}
        </div>
      </MarginLayout>
      <SubscriptionServiceBanner />
      <FormComponent titleId="ourServices" />
      <ServiceProjects />

      <ServiceBoxes />
      <MarginLayout className="flex-col gap-4 sm:py-1">
        <div className="px-4">
          <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
        </div>
      </MarginLayout>
    </>
  );
};

SolutionsPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="Solutions for Landlords, Property Managers, Building Managers, Real Estate and Homeowners"
        description="RCSC's solutions are designed for Landlords, Property Managers, Building Managers, Real Estate and Homeowners. Book now for fast, reliable service."
      />
      {page}
    </MainLayout>
  );
};

export default SolutionsPage;
