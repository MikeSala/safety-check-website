import { NextSeo } from "next-seo";
import Link from "next/link";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { privacyPolicyContent as content } from "./content.pl";

const PrivacyPolicy: NextPageWithLayout = () => {
  return (
    <>
      <Banner title={content.seo.title} />

      <MarginLayout className="flex-col sm:mt-20 sm:py-1">
        {content.sections.map((section, idx) => (
          <div key={idx} className="p-4">
            <h3
              className={`mb-10 ${
                idx === 0
                  ? "mb-4 text-center font-bold h1"
                  : "mt-20 text-center font-bold h2"
              }`}
            >
              {section.title}
            </h3>
            {Array.isArray(section.description) ? (
              section.description.map((desc, i) => (
                <p className="mb-2" key={i}>
                  {desc}
                </p>
              ))
            ) : (
              <p className="mb-2">{section.description}</p>
            )}
            {section.list && (
              <ul className="mb-2 list-disc pl-5">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <p className="mb-2">{content.address}</p>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-400"
          href={`tel:${content.phone}`}
        >
          {content.phone}
        </Link>
        <Link
          className="mb-20 cursor-pointer text-blue-500 hover:text-blue-400"
          href={`mailto:${content.email}`}
          target="_blank"
          rel="noreferrer"
        >
          {content.email}
        </Link>
      </MarginLayout>
    </>
  );
};

PrivacyPolicy.getLayout = function GetLayout(page: ReactElement) {
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

export default PrivacyPolicy;
