import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Banner } from "~/components/Banner";
import { ContactForm } from "~/components/ContactForm";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";

const BookPage: NextPageWithLayout = () => {
  return (
    <div>
      <Banner title="Zarezerwuj Przegląd" />

      <MarginLayout className="max-w-prose flex-col gap-2">
        <ContactForm />
      </MarginLayout>

      <ServiceBoxes />
    </div>
  );
};

BookPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="Zarezerwuj Przegląd"
        description="Nasz zespół jest gotowy pomóc Ci zadbać o bezpieczeństwo Twojej firmy lub mienia. Zarezerwuj już teraz, aby skorzystać z niezawodnej usługi."
      />
      {page}
    </MainLayout>
  );
};

export default BookPage;
