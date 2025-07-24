import { useContext } from "react";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { ViewportContext } from "~/providers/ViewportProvider";
import { Icons8checkmark } from "~/src/components/icons";

const complianceContent = {
  titles: {
    heading: "Subskrypcja Zgodności Nieruchomości – Zakres Usług",
    materialsHeading:
      "Subskrypcja Zgodności Nieruchomości – Materiały w Zakresie Usługi",
  },
  electrical: {
    title: "Zakres usług elektrycznych",
    items: [
      "Bezpłatne dojazdy w celu zbadania usterek elektrycznych związanych z pracami wykonanymi podczas przeglądu bezpieczeństwa elektrycznego.",
      "Bezpłatne wyceny prac elektrycznych wymaganych do zapewnienia zgodności (na życzenie).",
      "Jeśli w trakcie przeglądu wykryte zostaną niebezpieczne elementy, zostaną one zabezpieczone na miejscu, a właściciel otrzyma wycenę prac naprawczych.",
    ],
  },
  gas: {
    title: "Zakres usług gazowych",
    items: [
      "Bezpłatne dojazdy w celu zbadania problemu gazowego związanego z pracami wykonanymi podczas przeglądu bezpieczeństwa gazowego.",
      "Bezpłatne wyceny prac gazowych wymaganych do zapewnienia zgodności (na życzenie).",
      "Jeśli w trakcie inspekcji gazowej wykryte zostaną niebezpieczne elementy, zostaną one zabezpieczone na miejscu, a właściciel otrzyma wycenę prac naprawczych.",
    ],
  },
  smoke: {
    title: "Zakres usług alarmów dymowych",
    items: [
      "Bezpłatne dojazdy do wadliwych alarmów dymowych.",
      "Bezpłatna wymiana na zgodny model alarmu (jak za jak).",
      "Bezpłatne przeniesienie alarmów na baterie 9V w przypadku niezgodnej lokalizacji.",
      "Montaż czujników dymu 9V, jeśli tymczasowo wymagane w danym miejscu.",
      "Wymiana baterii 9V.",
    ],
  },
  materials: {
    electrical: {
      title: "Usługa Bezpieczeństwa i Zgodności Elektrycznej",
      switchStandardReplacementTitle: "Standardowa wymiana włączników",
      switchStandardReplacementItems: [
        "Wyłączniki światła (1–4 przyciski)",
        "Wyłączniki architrawowe (1–2 przyciski)",
        "Mechanizmy wyłączników 10A",
      ],
      socketStandardReplacementTitle: "Standardowa wymiana gniazdek",
      socketStandardReplacementItems: [
        "Pojedyncze gniazdko zasilające",
        "Podwójne gniazdko zasilające",
        "Podwójne gniazdko z przełącznikiem 10A do urządzeń",
      ],
      distributionBoardElementsTitle: "Standardowe elementy rozdzielnicy",
      distributionBoardElementsItems: [
        "Wyłączniki nadprądowe 10–40A",
        "Wyłączniki różnicowoprądowe RCD 40A",
        "RCBO 10–32A (wyłącznik różnicowoprądowy z zabezpieczeniem nadprądowym)",
      ],
    },
    gas: {
      title: "Usługa Bezpieczeństwa i Zgodności Gazowej",
      heatingAndWaterHeatersTitle: "Ogrzewanie i podgrzewacze wody",
      heatingAndWaterHeatersItems: [
        "Tymczasowe grzejniki (do czasu naprawy lub wymiany głównego źródła ciepła)",
        "Ponowne podłączenie poluzowanego przewodu wentylacyjnego, jeśli jest dostępny",
        "Drobne regulacje przewodów spalinowych",
        "Uszczelnianie silikonowe dekli",
        "Podłączenie poluzowanego przewodu wentylacyjnego",
        "Montaż termopar, jeśli wymagane",
        "Wymiana zaworu sterującego gazem, jeśli wymagane",
        "Przeróbka odpływu PTR",
      ],
      kitchensTitle: "Kuchnie",
      kitchensItems: [
        "Montaż zabezpieczenia dla wolnostojących kuchenek",
        "Drobne regulacje reduktora gazu",
        "Drobna regulacja nóżek w kuchenkach wolnostojących",
        "Izolacja odsłoniętego przewodu PEX UV-odporną otuliną do 1 metra",
      ],
    },
  },
};

const ComplianceSubscriptionMaterials = () => {
  const { isMobile } = useContext(ViewportContext);
  return (
    <>
      <MarginLayout>
        <h3 className="mb-8 text-center text-xl font-bold text-gray-700 h3">
          {complianceContent.titles.heading}
        </h3>

        {/* Zakres usług elektrycznych */}
        <div className="mb-8">
          <h4 className="mb-4 text-lg font-bold text-gray-800 h4">
            {complianceContent.electrical.title}
          </h4>
          <ul
            className={`list-inside list-disc text-gray-700 ${
              isMobile ? "text-sm" : "text-base"
            }`}
          >
            {complianceContent.electrical.items.map((item, index) => (
              <li key={index} className="mb-2 flex h-16 items-center md:h-12">
                <Icons8checkmark
                  className={`flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Zakres usług gazowych */}
        <div className="mb-8">
          <h4 className="mb-4 text-lg font-bold text-gray-800 h4">
            {complianceContent.gas.title}
          </h4>
          <ul
            className={`list-inside list-disc text-gray-700 ${
              isMobile ? "text-sm" : "text-base"
            }`}
          >
            {complianceContent.gas.items.map((item, index) => (
              <li key={index} className="mb-2 flex h-16 items-center md:h-12">
                <Icons8checkmark
                  className={`flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Zakres usług alarmów dymowych */}
        <div className="mb-8">
          <h4 className="mb-4 text-lg font-bold text-gray-800 h4">
            {complianceContent.smoke.title}
          </h4>
          <ul
            className={`list-inside list-disc text-gray-700 ${
              isMobile ? "text-sm" : "text-base"
            }`}
          >
            {complianceContent.smoke.items.map((item, index) => (
              <li key={index} className="mb-2 flex h-16 items-center md:h-12">
                <Icons8checkmark
                  className={`flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mb-8 text-center text-xl font-bold text-gray-700 h3">
          {complianceContent.titles.materialsHeading}
        </h3>

        <div className="flex flex-col gap-8 text-gray-700 md:flex-row">
          <div className="flex flex-col md:w-1/2">
            <h4 className="mb-4 text-lg font-bold text-gray-800 h4">
              {complianceContent.materials.electrical.title}
            </h4>

            <h5 className="mb-2">
              {
                complianceContent.materials.electrical
                  .switchStandardReplacementTitle
              }
            </h5>
            <ul className="mb-4 list-inside list-disc">
              {complianceContent.materials.electrical.switchStandardReplacementItems.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h5 className="mb-2">
              {
                complianceContent.materials.electrical
                  .socketStandardReplacementTitle
              }
            </h5>
            <ul className="mb-4 list-inside list-disc">
              {complianceContent.materials.electrical.socketStandardReplacementItems.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h5 className="mb-2">
              {
                complianceContent.materials.electrical
                  .distributionBoardElementsTitle
              }
            </h5>
            <ul className="mb-4 list-inside list-disc">
              {complianceContent.materials.electrical.distributionBoardElementsItems.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>

          <div className="flex flex-col md:w-1/2">
            <h4 className="mb-4 text-lg font-bold text-gray-800 h4">
              {complianceContent.materials.gas.title}
            </h4>

            <h5 className="mb-2">
              {complianceContent.materials.gas.heatingAndWaterHeatersTitle}
            </h5>
            <ul className="mb-4 list-inside list-disc">
              {complianceContent.materials.gas.heatingAndWaterHeatersItems.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h5 className="mb-2">
              {complianceContent.materials.gas.kitchensTitle}
            </h5>
            <ul className="mb-4 list-inside list-disc">
              {complianceContent.materials.gas.kitchensItems.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </MarginLayout>
    </>
  );
};

export default ComplianceSubscriptionMaterials;
