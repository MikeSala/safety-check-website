import { NextSeo } from "next-seo";
import Link from "next/link";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/FAQ/FaqComponent";
import FaqSectionsData from "~/components/FAQ/FaqData";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { Icons8checkmark } from "~/src/components/icons";

const selectedId = [151, 152, 153];

const FaqPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title="Legislation" />

      <MarginLayout className="flex-col sm:mt-20 sm:py-1">
        <div className="p-4">
          <h3 className="mb-4 text-center font-bold h2">
            The Residential Tenancies Amendment Act and 2021 Regulations
          </h3>
          <p className="mb-2">
            Regulations identify and mandate new safety-related activities for
            Victoria&apos;s residential properties.
          </p>

          <h3 className="mb-2 mt-4 text-lg">
            All rental providers must ensure the following:
          </h3>
          <ul className="mb-2 list-disc">
            <li className="h-18 mb-2 mr-2 flex items-center">
              <Icons8checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
              All smoke detectors must be installed correctly, be in the correct
              locations, be operational, and undergo annual testing according to
              the manufacturer&apos;s guidelines.
            </li>
            <li className="h-18 mb-2 mr-2 flex items-center">
              <Icons8checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
              Electricity and gas safety inspections must be performed every two
              years. However, if an electrical or gas safety check has not been
              completed within the last two years at the time the renter
              occupies the premises, the rental provider must schedule an
              electrical and gas safety inspection as soon as is practicable.
            </li>
          </ul>

          <p className="font-semibold">
            More details related to this topic can be found down below.
          </p>
        </div>
        <div className="px-4">
          <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
        </div>
        <strong>Sources:</strong>
        <Link
          href="https://www.legislation.vic.gov.au/in-force/statutory-rules/residential-tenancies-regulations-2021/001"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="cursor-pointer text-blue-500 hover:text-blue-400"
        >
          https://www.legislation.vic.gov.au/in-force/statutory-rules/residential-tenancies-regulations-2021/001
        </Link>
        <Link
          href="https://www.vba.vic.gov.au/consumers/residential-tenancies-regulations-2021"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mb-10 cursor-pointer text-blue-500 hover:text-blue-400"
        >
          https://www.vba.vic.gov.au/consumers/residential-tenancies-regulations-2021
        </Link>
      </MarginLayout>
    </>
  );
};

FaqPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="Legislation - Safety Inspection and Compliance"
        description="Stay informed with our comprehensive legislation information page. Our services comply with all laws and regulations."
      />
      {page}
    </MainLayout>
  );
};

export default FaqPage;
