import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useContext } from "react";
import { ViewportContext } from "~/providers/ViewportProvider";

export const switchboardText = {
  title: "Modernizacja rozdzielnicy elektrycznej",
  inclusions: [
    "Demontaż starych bezpieczników topikowych, wyłączników nadprądowych oraz starej obudowy rozdzielnicy (w tym także pojedynczych obudów na nowo instalowane obwody lub RCD chroniące obwody ze starymi bezpiecznikami).",
    "Montaż nowej obudowy rozdzielnicy z nowym wyłącznikiem głównym oraz wyłącznikami RCBO zapewniającymi ochronę obwodów.",
    "Zastosowanie rurki termokurczliwej na przewodach fazowych, neutralnych lub ochronnych w rozdzielnicy – tam, gdzie to wymagane.",
    "Przegląd rozdzielnicy oraz wystawienie protokołu odbioru prac przez uprawnionego elektryka.",
    "Wszystkie elementy rozdzielnicy pochodzą od renomowanych producentów spełniających nasze wysokie standardy jakości. Jeśli preferowana marka (np. Clipsal) jest niedostępna, użyjemy równoważnego rozwiązania o równie dobrej opinii.",
  ],
  exclusions: [
    {
      title: "MODERNIZACJA PRZYŁĄCZA LUB SKRZYNKI PRZYŁĄCZOWEJ:",
      items: [
        "Jeśli wymagane jest zwiększenie mocy przyłącza, zostaną poprowadzone nowe kable przyłączeniowe (np. 16 mm²) do nowej skrzynki przyłączeniowej z zabezpieczeniem 100A (przy zasilaniu napowietrznym).",
        "Jeżeli nowa obudowa rozdzielnicy nie mieści się w istniejącej szafce licznikowej z powodu zbyt dużego panelu licznikowego, konieczna będzie wymiana panelu lub całej szafki licznikowej. Jeśli kable przyłączeniowe nie spełniają wymagań, może to również wymagać modernizacji przyłącza i montażu nowej skrzynki przyłączeniowej.",
      ],
    },
    {
      title: "DODATKOWE OBWODY W ROZDZIELNICY:",
      items: [
        "Dodatkowe elementy rozdzielnicy, takie jak trójfazowe wyłączniki RCBO, styczniki, transformatory do dzwonków lub ograniczniki przepięć, będą w miarę możliwości wykorzystane ponownie podczas modernizacji. W przypadku konieczności zastosowania nowych elementów mogą obowiązywać dodatkowe koszty.",
      ],
    },
    {
      title: "DODATKOWE PRZERÓBKI LUB NAPRAWA OKABLOWANIA:",
      items: [
        "Jakiekolwiek dodatkowe prace związane z naprawą lub wymianą okablowania obwodów elektrycznych, które nie przejdą testów po modernizacji rozdzielnicy lub jeśli wystąpią usterki niemożliwe do usunięcia.",
        "Przewody elektryczne wykonane w nieprawidłowym przekroju zostaną wymienione zgodnie z obowiązującymi normami, co może obejmować konieczność całkowitego przeprowadzenia nowego okablowania dla danego obwodu.",
      ],
    },
    {
      title: "WYMIANA URZĄDZEŃ ELEKTRYCZNYCH LUB SPRZĘTÓW:",
      items: [
        "Po modernizacji rozdzielnicy niektóre urządzenia elektryczne, takie jak oświetlenie, gniazdka lub sprzęty AGD, mogą ujawnić wcześniej niewidoczne usterki – wynikające z braku wcześniejszej ochrony obwodów. RCBO wykrywa dodatkowe nieprawidłowości, co może prowadzić do konieczności wymiany takich urządzeń. Niektóre naprawy są proste (np. wymiana przepalonej żarówki lub transformatora), inne mogą jednak ujawnić poważniejsze wady w większych urządzeniach i wymagać bardziej zaawansowanej naprawy.",
      ],
    },
  ],
};

const SwitchboardInclusionsExclusions = () => {
  const { isMobile } = useContext(ViewportContext);
  return (
    <div className="xs:px-4 mb-10 mt-10 bg-sky-900 py-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="mb-6 flex items-center justify-center">
        <h3 className="text-2xl font-semibold text-white h2">
          {switchboardText.title}
        </h3>
      </div>

      <div className="gap-0 md:grid md:grid-cols-2">
        <div className="justify-top order-2 flex w-full flex-col items-start border-white bg-sky-900 p-4 md:order-1 md:w-auto md:border-r-2">
          <h4 className="mb-4 pl-16 text-xl font-semibold text-white h2">
            Włączenie
          </h4>
          <ul className="mb-4 space-y-4 pl-2 text-white h4 sm:pl-8 md:pl-12 lg:pl-16">
            {switchboardText.inclusions.map((inclusion, index) => (
              <li key={index} className="flex items-center space-x-3 text-sm">
                <CheckCircleIcon
                  className={clsx(
                    "flex-shrink-0 md:h-10 md:w-10 lg:h-10 lg:w-10",
                    isMobile ? "mr-2 h-6 w-6" : "h-10 w-10"
                  )}
                />
                <p>{inclusion}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 w-full bg-sky-900 p-4 md:order-2 md:w-auto">
          <h4 className="mb-4 pl-16 text-xl font-semibold text-white h2">
            Wyłączenie
          </h4>
          <ul className="mb-4 space-y-4 pl-2 text-white h4 sm:pl-8 md:pl-12 lg:pl-16">
            {switchboardText.exclusions.map((exclusion, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 text-sm text-white"
              >
                <XCircleIcon
                  className={clsx(
                    "flex-shrink-0",
                    isMobile ? "h-6 w-6" : "h-10 w-10"
                  )}
                />
                <div>
                  <p className="mb-4">{exclusion.title}</p>
                  <ul className="list-disc pl-4">
                    {exclusion.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SwitchboardInclusionsExclusions;
