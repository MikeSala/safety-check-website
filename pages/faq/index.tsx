import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import FaqComponent from "../../components/FAQ/FaqComponent";
import faqSectionsData from "../../components/FAQ/FaqData";

const selectedId = [
  1, 2, 3, 4, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  31, 32, 33, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
  57, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
];

const FaqPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title="Frequently Asked Questions" />
      <MarginLayout className="mx-auto flex-col sm:-mb-20">
        <h3 className="mb-4 text-center font-bold h2">Witamy w sekcji FAQ</h3>
        Przygotowaliśmy odpowiedzi na najczęściej zadawane pytania dotyczące
        umawiania wizyt, przeglądów bezpieczeństwa instalacji elektrycznych,
        gazowych i alarmów przeciwpożarowych, a także modernizacji tablic
        rozdzielczych. Naszym celem jest przekazanie jasnych i konkretnych
        informacji, aby ułatwić Ci zrozumienie tych usług i podjęcie świadomych
        decyzji zgodnie z obowiązującymi w Polsce przepisami prawa budowlanego i
        bezpieczeństwa.
      </MarginLayout>

      <MarginLayout className="flex-col gap-2 py-1">
        <FaqComponent sections={faqSectionsData} selectedIds={selectedId} />
      </MarginLayout>

      <MarginLayout className="-mb-15 mx-auto -mt-20 flex-col">
        <i>
          Powyższe odpowiedzi mają charakter ogólny i dotyczą kluczowych zasad
          bezpieczeństwa wynikających z polskiego prawa budowlanego, przepisów
          przeciwpożarowych oraz norm dotyczących instalacji elektrycznych i
          gazowych w budynkach mieszkalnych.
        </i>
      </MarginLayout>
    </>
  );
};

FaqPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="Frequently Asked Questions"
        description="Answers to the most common questions regarding our services: safety checks, plumbing and switchboard upgrades."
      />
      {page}
    </MainLayout>
  );
};

export default FaqPage;
