import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import ComplianceSubscriptionMaterials from "~/components/ComplianceSubscriptionMaterials";
import InclusionsExclusions from "~/components/InclusionsExclusions";
import SwitchboardInclusionsExclusions from "~/components/SwitchboardInclusionsExclusions";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import {
  ServiceItem,
  serviceItems,
} from "~/pages/wlaczenia-wylaczenia/content.pl";

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
      <Banner title="Zakres usług - włączenia i wyłączenia" />{" "}
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
        title="Nasze usługi – włączenia i wyłączenia"
        description="Wszystkie nasze usługi zawierają elementy wliczone w cenę i wykluczone. Dowiedz się więcej i umów się na inspekcję już teraz."
      />
      {page}
    </MainLayout>
  );
};

export default InclusionsExclusionsPage;
