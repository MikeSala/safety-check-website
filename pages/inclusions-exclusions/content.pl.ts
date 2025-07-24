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
