import { useContext } from "react";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { ViewportContext } from "~/providers/ViewportProvider";
import { Icons8checkmark } from "~/src/components/icons";

const ComplianceSubscriptionMaterials = () => {
  const { isMobile } = useContext(ViewportContext);
  return (
    <>
      <MarginLayout>
        <h3 className="mb-8 text-center text-xl font-bold text-gray-700 h3">
          Subskrypcja Zgodności Nieruchomości – Zakres Usług
        </h3>

        {/* Zakres usług elektrycznych */}
        <div className="mb-8">
          <h4 className="mb-4 text-lg font-bold text-gray-800 h4">
            Zakres usług elektrycznych
          </h4>
          <ul
            className={`list-inside list-disc text-gray-700 ${
              isMobile ? "text-sm" : "text-base"
            }`}
          >
            <li className="mb-2 flex h-16 items-center md:h-12">
              <Icons8checkmark
                className={`flex-shrink-0 ${
                  isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                }`}
              />
              Bezpłatne dojazdy w celu zbadania usterek elektrycznych związanych
              z pracami wykonanymi podczas przeglądu bezpieczeństwa
              elektrycznego.
            </li>
            <li className="mb-2 flex h-16 items-center md:h-12">
              <Icons8checkmark
                className={`flex-shrink-0 ${
                  isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                }`}
              />
              Bezpłatne wyceny prac elektrycznych wymaganych do zapewnienia
              zgodności (na życzenie).
            </li>
            <li className="mb-2 flex h-16 items-center md:h-12">
              <Icons8checkmark
                className={`flex-shrink-0 ${
                  isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                }`}
              />
              Jeśli w trakcie przeglądu wykryte zostaną niebezpieczne elementy,
              zostaną one zabezpieczone na miejscu, a właściciel otrzyma wycenę
              prac naprawczych.
            </li>
          </ul>
        </div>

        {/* Zakres usług gazowych */}
        <div className="mb-8">
          <h4 className="mb-4 text-lg font-bold text-gray-800 h4">
            Zakres usług gazowych
          </h4>
          <ul
            className={`list-inside list-disc text-gray-700 ${
              isMobile ? "text-sm" : "text-base"
            }`}
          >
            <li className="mb-2 flex h-16 items-center md:h-12">
              <Icons8checkmark
                className={`flex-shrink-0 ${
                  isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                }`}
              />
              Bezpłatne dojazdy w celu zbadania problemu gazowego związanego z
              pracami wykonanymi podczas przeglądu bezpieczeństwa gazowego.
            </li>
            <li className="mb-2 flex h-16 items-center md:h-12">
              <Icons8checkmark
                className={`flex-shrink-0 ${
                  isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                }`}
              />
              Bezpłatne wyceny prac gazowych wymaganych do zapewnienia zgodności
              (na życzenie).
            </li>
            <li className="mb-2 flex h-16 items-center md:h-12">
              <Icons8checkmark
                className={`flex-shrink-0 ${
                  isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                }`}
              />
              Jeśli w trakcie inspekcji gazowej wykryte zostaną niebezpieczne
              elementy, zostaną one zabezpieczone na miejscu, a właściciel
              otrzyma wycenę prac naprawczych.
            </li>
          </ul>
        </div>

        {/* Zakres usług alarmów dymowych */}
        <div className="mb-8">
          <h4 className="mb-4 text-lg font-bold text-gray-800 h4">
            Zakres usług alarmów dymowych
          </h4>
          <ul
            className={`list-inside list-disc text-gray-700 ${
              isMobile ? "text-sm" : "text-base"
            }`}
          >
            <li className="mb-2 flex h-16 items-center md:h-12">
              <Icons8checkmark
                className={`flex-shrink-0 ${
                  isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                }`}
              />
              Bezpłatne dojazdy do wadliwych alarmów dymowych.
            </li>
            <li className="mb-2 flex h-16 items-center md:h-12">
              <Icons8checkmark
                className={`flex-shrink-0 ${
                  isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                }`}
              />
              Bezpłatna wymiana na zgodny model alarmu (jak za jak).
            </li>
            <li className="mb-2 flex h-16 items-center md:h-12">
              <Icons8checkmark
                className={`flex-shrink-0 ${
                  isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                }`}
              />
              Bezpłatne przeniesienie alarmów na baterie 9V w przypadku
              niezgodnej lokalizacji.
            </li>
            <li className="mb-2 flex h-16 items-center md:h-12">
              <Icons8checkmark
                className={`flex-shrink-0 ${
                  isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                }`}
              />
              Montaż czujników dymu 9V, jeśli tymczasowo wymagane w danym
              miejscu.
            </li>
            <li className="mb-2 flex h-16 items-center md:h-12">
              <Icons8checkmark
                className={`flex-shrink-0 ${
                  isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                }`}
              />
              Wymiana baterii 9V.
            </li>
          </ul>
        </div>

        <h3 className="mb-8 text-center text-xl font-bold text-gray-700 h3">
          Subskrypcja Zgodności Nieruchomości – Materiały w Zakresie Usługi
        </h3>

        <div className="flex flex-col gap-8 text-gray-700 md:flex-row">
          <div className="flex flex-col md:w-1/2">
            <h4 className="mb-4 text-lg font-bold text-gray-800 h4">
              Usługa Bezpieczeństwa i Zgodności Elektrycznej
            </h4>

            <h5 className="mb-2">Standardowa wymiana włączników</h5>
            <ul className="mb-4 list-inside list-disc">
              <li>Wyłączniki światła (1–4 przyciski)</li>
              <li>Wyłączniki architrawowe (1–2 przyciski)</li>
              <li>Mechanizmy wyłączników 10A</li>
            </ul>

            <h5 className="mb-2">Standardowa wymiana gniazdek</h5>
            <ul className="mb-4 list-inside list-disc">
              <li>Pojedyncze gniazdko zasilające</li>
              <li>Podwójne gniazdko zasilające</li>
              <li>Podwójne gniazdko z przełącznikiem 10A do urządzeń</li>
            </ul>

            <h5 className="mb-2">Standardowe elementy rozdzielnicy</h5>
            <ul className="mb-4 list-inside list-disc">
              <li>Wyłączniki nadprądowe 10–40A</li>
              <li>Wyłączniki różnicowoprądowe RCD 40A</li>
              <li>
                RCBO 10–32A (wyłącznik różnicowoprądowy z zabezpieczeniem
                nadprądowym)
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:w-1/2">
            <h4 className="mb-4 text-lg font-bold text-gray-800 h4">
              Usługa Bezpieczeństwa i Zgodności Gazowej
            </h4>

            <h5 className="mb-2">Ogrzewanie i podgrzewacze wody</h5>
            <ul className="mb-4 list-inside list-disc">
              <li>
                Tymczasowe grzejniki (do czasu naprawy lub wymiany głównego
                źródła ciepła)
              </li>
              <li>
                Ponowne podłączenie poluzowanego przewodu wentylacyjnego, jeśli
                jest dostępny
              </li>
              <li>Drobne regulacje przewodów spalinowych</li>
              <li>Uszczelnianie silikonowe dekli</li>
              <li>Podłączenie poluzowanego przewodu wentylacyjnego</li>
              <li>Montaż termopar, jeśli wymagane</li>
              <li>Wymiana zaworu sterującego gazem, jeśli wymagane</li>
              <li>Przeróbka odpływu PTR</li>
            </ul>

            <h5 className="mb-2">Kuchnie</h5>
            <ul className="mb-4 list-inside list-disc">
              <li>Montaż zabezpieczenia dla wolnostojących kuchenek</li>
              <li>Drobne regulacje reduktora gazu</li>
              <li>Drobna regulacja nóżek w kuchenkach wolnostojących</li>
              <li>
                Izolacja odsłoniętego przewodu PEX UV-odporną otuliną do 1 metra
              </li>
            </ul>
          </div>
        </div>
      </MarginLayout>
    </>
  );
};

export default ComplianceSubscriptionMaterials;
