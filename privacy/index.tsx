import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";

const PrivacyPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title="Privacy" />
      <MarginLayout className="flex-col gap-2">test</MarginLayout>
    </>
  );
};

PrivacyPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="Privacy"
        description="Our Privacy Policy is meant to help you understand what information we collect and why we collect it."
      />
      {page}
    </MainLayout>
  );
};

export default PrivacyPage;
