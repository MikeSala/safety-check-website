import type { NextSeoProps } from "next-seo";

const description =
  "Residential & Commercial Safety Checks Victoria. Smoke alarm, gas and electrical safety checks in Victoria. Book your safety check now!";
const defaultTitle = "RCSC - Residential & Commercial Safety Checks";

export const DEFAULT_SEO: NextSeoProps = {
  description: description,
  themeColor: "#fafafa",
  titleTemplate: "%s | RCSC",
  useAppDir: false,
  defaultTitle: defaultTitle,
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "safety check, safety checks, safety check victoria, safety checks victoria, electrical safety checks, smoke safety checks, gas safety checks, electrical safety check victoria, smoke safety check victoria, gas safety check victoria",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.przegladinstalacji.pl/",
    title: defaultTitle,
    description: description,
    siteName: "RCSC",
  },
};
