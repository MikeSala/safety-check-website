import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import ComplianceSubscriptionMaterials from "~/components/ComplianceSubscriptionMaterials";
import InclusionsExclusions from "~/components/InclusionsExclusions";
import SwitchboardInclusionsExclusions from "~/components/SwitchboardInclusionsExclusions";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";

export type ServiceItem = {
  category:
    | "Przeglądy Bezpieczeństwa Elektrycznego"
    | "Przeglądy Bezpieczeństwa Instalacji Gazowej"
    | "Przeglądy Bezpieczeństwa Alarmów Dymowych";
  inclusions: string[];
  exclusions: string[];
};

export const serviceItems: ServiceItem[] = [
  {
    category: "Przeglądy Bezpieczeństwa Elektrycznego",
    inclusions: [
      "Bezpłatne dojazdy w celu zbadania usterek elektrycznych związanych z pracami wykonanymi podczas przeglądu bezpieczeństwa elektrycznego.",
      "Bezpłatne wyceny prac elektrycznych wymaganych do uzyskania zgodności.",
      "Jeśli w trakcie przeglądu zostaną wykryte niebezpieczne elementy instalacji, zostaną one zabezpieczone na miejscu, a właściciel otrzyma wycenę prac naprawczych.",
    ],
    exclusions: [
      "Awarie urządzeń.",
      "Serwisowanie/naprawy klimatyzatorów.",
      "Serwisowanie trudno dostępnych gniazdek, włączników światła, opraw itp.",
      "Prace naprawcze/dojazdy w przypadku odmowy właściciela na zalecane naprawy/porady dotyczące jego nieruchomości.",
      "Szpachlowanie/malowanie uszkodzonych miejsc po wykonanych pracach elektrycznych.",
    ],
  },

  {
    category: "Przeglądy Bezpieczeństwa Instalacji Gazowej",
    inclusions: [
      "Bezpłatne dojazdy w celu zbadania problemu gazowego związanego z pracami wykonanymi podczas przeglądu bezpieczeństwa gazowego.",
      "Bezpłatne wyceny prac gazowych wymaganych do uzyskania zgodności (na życzenie).",
      "Jeśli podczas inspekcji gazowej wykryte zostaną niebezpieczne elementy, zostaną one zabezpieczone na miejscu, a właściciel otrzyma wycenę prac naprawczych.",
    ],
    exclusions: [
      "Awarie urządzeń.",
      "Serwisowanie trudno dostępnych urządzeń gazowych.",
      "Prace naprawcze/dojazdy w przypadku odmowy właściciela na zalecane naprawy/porady dotyczące jego nieruchomości.",
      "Szpachlowanie/malowanie uszkodzonych miejsc po zakończonych pracach gazowych.",
    ],
  },
  {
    category: "Przeglądy Bezpieczeństwa Alarmów Dymowych",
    inclusions: [
      "Bezpłatne dojazdy do wadliwych alarmów dymowych.",
      "Bezpłatna wymiana na zgodny model alarmu (jak za jak).",
      "Bezpłatne przeniesienie alarmów na baterie 9V w przypadku niezgodnej lokalizacji.",
      "Montaż czujników dymu 9V, jeśli tymczasowo wymagane w danym miejscu (dostępne wyłącznie w ramach Subskrypcji Zgodności Nieruchomości).",
      "Wymiana baterii 9V (dostępna wyłącznie w ramach Subskrypcji Zgodności Nieruchomości).",
    ],
    exclusions: [
      "Przeniesienie/montaż alarmów dymowych 240V w przypadku niezgodnej lokalizacji.",
      "Wymiana nadmiernej liczby alarmów.",
      "Szpachlowanie/malowanie uszkodzonych miejsc po zdemontowanych alarmach.",
      "Indywidualnie zamawiane alarmy wymagane do utrzymania połączenia międzyalarmowego określonych marek.",
      "Wymiana alarmów, które zostały celowo usunięte lub uszkodzone przez najemców/właścicieli.",
    ],
  },
];

type ColumnProps = {
  listItems: string[];
  heading: string;
};

const Column: React.FC<ColumnProps> = ({ listItems, heading }) => {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h3 className="h3">{heading}</h3>
      <ul className="list-disc pl-4">
        {listItems.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

const Section: React.FC<ServiceItem & { isLast: boolean }> = ({
  category,
  inclusions,
  exclusions,
  isLast,
}) => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-8">
        <h2 className="h2">{category}</h2>
        <div className="flex flex-col flex-wrap gap-6 md:flex-row">
          <Column listItems={inclusions} heading="Inclusions" />
          <Column listItems={exclusions} heading="Exclusions" />
        </div>
      </section>
      {!isLast && <hr />}
    </>
  );
};

export const InclusionsExclusionsPageComponent: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
      {serviceItems.map((service, i) => {
        return (
          <Section
            key={service.category}
            {...service}
            isLast={i === serviceItems.length - 1}
          />
        );
      })}
    </div>
  );
};

const InclusionsExclusionsPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title="Inclusions & Exclusions" />{" "}
      <article className="-mb-20 flex h-[200px] flex-col items-center justify-center gap-4 bg-gray-200 px-4 py-12 text-center text-2xl h3 sm:py-24 lg:px-8">
        <h2 className="font-semibold h2">Usługi - Włączenia i Wyłączenia</h2>
      </article>
      {/* <MarginLayout>
        <InclusionsExclusionsPageComponent />
      </MarginLayout> */}
      <InclusionsExclusions category="" />
      <InclusionsExclusions category="" />
      <InclusionsExclusions category="Bezpieczeństwo pożarowe" />
      <SwitchboardInclusionsExclusions />
      <article className="-mt-10 flex h-[200px] flex-col items-center justify-center gap-4 bg-gray-200 px-4 py-12 text-center text-2xl h3 sm:py-24 lg:px-8">
        <h2 className="font-semibold h2">
          Subskrypcja - Włączenia i Wyłączenia
        </h2>
      </article>
      <MarginLayout className="flex w-full flex-col">
        <ComplianceSubscriptionMaterials />
      </MarginLayout>
    </>
  );
};

InclusionsExclusionsPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="RCSC Services - Inclusions & Exclusions"
        description="All our services have inclusions & exclusions. Get more details on them and book your inspection now."
      />
      {page}
    </MainLayout>
  );
};

export default InclusionsExclusionsPage;
