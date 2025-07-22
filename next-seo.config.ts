import type { NextSeoProps } from "next-seo";

const description =
  "Przeglądy bezpieczeństwa instalacji elektrycznych, gazowych i czujników dymu w budynkach mieszkalnych i komercyjnych. Zadbaj o zgodność z przepisami – zamów przegląd już dziś!";
const defaultTitle = "Inspektor Instalacji - Przeglądy Bezpieczeństwa";

export const DEFAULT_SEO: NextSeoProps = {
  description: description,
  themeColor: "#fafafa",
  titleTemplate: "%s | Przegląd Instalacji",
  defaultTitle: defaultTitle,
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "przegląd instalacji, przegląd instalacji elektrycznej, przegląd instalacji gazowej, przegląd czujników dymu, kontrola bezpieczeństwa, instalacje budowlane, obowiązkowe przeglądy, bezpieczeństwo budynków",
    },
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://www.przegladinstalacji.pl/",
    title: defaultTitle,
    description: description,
    siteName: "Inspektor Instalacji",
  },
};
