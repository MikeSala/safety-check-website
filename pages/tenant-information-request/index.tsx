import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { TenantForm } from "~/components/TenantForm";
import { NextPageWithLayout } from "~/pages/_app";

const TenantInformationRequestPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title="Tenant Information Request" />
      <TenantForm />
    </>
  );
};

TenantInformationRequestPage.getLayout = function GetLayout(
  page: ReactElement
) {
  return (
    <MainLayout>
      <NextSeo title="Tenant Information Request" noindex />
      {page}
    </MainLayout>
  );
};

export default TenantInformationRequestPage;
