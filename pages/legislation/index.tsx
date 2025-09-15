import { NextSeo } from "next-seo";
import Link from "next/link";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/Faq/Faq";
import FaqSectionsData from "~/components/Faq/FaqContent";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { Icons8checkmark } from "~/src/components/icons";
import { legislationPageContent as content } from "./content.pl";

const selectedId = [151, 152, 153];

const FaqPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title={content.seo.title} />

      <MarginLayout className="flex-col sm:mt-20 sm:py-1">
        <div className="p-4">
          <h3 className="mb-4 text-center font-bold h2">{content.title}</h3>
          <p className="mb-2">{content.description}</p>

          <h3 className="mb-2 mt-4 text-lg">{content.subTitle}</h3>
          <ul className="mb-2 mt-6 list-disc">
            {content.paragraphs.map((p, i) => (
              <li key={i} className="h-18 mb-2 mr-2 flex items-center">
                <Icons8checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          <p className="mt-6 font-semibold">{content.note}</p>
        </div>
        <div className="px-4">
          <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
        </div>
        <div className="mb-10">
          <p>
            <strong>{content.source}</strong>
          </p>
          <p>
            <Link
              href="https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU19940830429/U/D19940429Lj.pdf"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cursor-pointer text-blue-500 hover:text-blue-400"
            >
              {content.linkAnkor1}
            </Link>
          </p>
          <Link
            href="https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20020750690"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="cursor-pointer text-blue-500 hover:text-blue-400"
          >
            {content.linkAnkor2}
          </Link>
        </div>
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
