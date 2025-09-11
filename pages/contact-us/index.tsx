import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import FormComponent from "~/components/FormComponent";
import { MainLayout } from "~/components/layouts/MainLayout";
import { NextPageWithLayout } from "~/pages/_app";

const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title="Kontakt" />
      <FormComponent />
    </>
  );
};

ContactPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo title="Kontakt" description="Kontaktuj" />
      {page}
    </MainLayout>
  );
};

export default ContactPage;
