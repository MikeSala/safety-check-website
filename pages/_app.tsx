import { ApolloProvider } from "@apollo/client/react";
import clsx from "clsx";
import { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SmoothScroll } from "~/components/animations/SmoothScroll";
import CookieBanner from "~/components/CookieBanner";
import ChatLauncherButton, {
  CHAT_LAUNCHER_POSITION_CLASSES,
} from "~/components/Faq/ChatLauncherButton";
import ScrollButton from "~/components/ScrollButton";
import apolloClient from "~/lib/apollo";
import { GTM_ID, pageview } from "~/lib/gtag";
import { DEFAULT_SEO } from "~/next-seo.config";
import { ViewportProvider } from "~/providers/ViewportProvider";
import "~/styles/globals.css";

const Chatbot = dynamic(() => import("~/components/Faq/ChatBot"), {
  ssr: false,
});

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isChatLoaded, setIsChatLoaded] = useState(false);

  // We reuse the same layout to avoid unnecessary re-renders.
  // This causes the scroll position to persist between pages. We need to manually scroll to top
  // Also send navigation event to GA
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
      ref.current?.scrollTo(0, 0);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const baseUrl =
    (process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.przegladinstalacji.com").replace(
      /\/+$/,
      ""
    );
  const cleanPath = router.asPath.split("#")[0].split("?")[0];
  const canonicalPath = cleanPath === "/" ? "/" : cleanPath;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  const openGraph = {
    ...DEFAULT_SEO.openGraph,
    url: canonicalUrl,
  };

  return (
    <ApolloProvider client={apolloClient}>
      <SmoothScroll>
      <ViewportProvider>
        <div
          id="app"
          className={clsx("flex h-full flex-col overflow-auto")}
          ref={ref}
        >
          {" "}
          <ScrollButton containerRef={ref} />
          <DefaultSeo {...DEFAULT_SEO} canonical={canonicalUrl} openGraph={openGraph} />
          <Head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                    {
                      "@type": "LocalBusiness",
                      "@id": "https://www.przegladinstalacji.com/#organization",
                      name: "Przegląd Instalacji",
                      alternateName: "Inspektor Instalacji",
                      url: "https://www.przegladinstalacji.com",
                      email: "info@przegladinstalacji.com",
                      description:
                        "Profesjonalne przeglądy bezpieczeństwa instalacji elektrycznych, gazowych i przeciwpożarowych w budynkach mieszkalnych i komercyjnych na terenie całej Polski.",
                      areaServed: [
                        { "@type": "City", name: "Kraków" },
                        { "@type": "City", name: "Warszawa" },
                        { "@type": "City", name: "Poznań" },
                        { "@type": "City", name: "Wrocław" },
                        { "@type": "City", name: "Gdańsk" },
                        { "@type": "City", name: "Katowice" },
                        { "@type": "City", name: "Szczecin" },
                      ],
                      knowsLanguage: "pl",
                      hasOfferCatalog: {
                        "@type": "OfferCatalog",
                        name: "Usługi przeglądów instalacji",
                        itemListElement: [
                          {
                            "@type": "Offer",
                            itemOffered: {
                              "@type": "Service",
                              name: "Przegląd instalacji elektrycznej",
                              description:
                                "Kontrola bezpieczeństwa elektrycznego zgodnie z normą PN-HD 60364, sprawdzenie zgodności instalacji z normą PN-IEC 60364.",
                              url: "https://www.przegladinstalacji.com/przeglad-instalacji-elektrycznej/",
                            },
                          },
                          {
                            "@type": "Offer",
                            itemOffered: {
                              "@type": "Service",
                              name: "Przegląd instalacji gazowej",
                              description:
                                "Kontrola bezpieczeństwa instalacji gazowych zgodna z normami PN-EN 437, PN-EN 15001 i PN-EN 1775, serwisowanie urządzeń gazowych.",
                              url: "https://www.przegladinstalacji.com/przeglad-instalacji-gazowej/",
                            },
                          },
                          {
                            "@type": "Offer",
                            itemOffered: {
                              "@type": "Service",
                              name: "Kontrola czujników dymu",
                              description:
                                "Testowanie alarmów dymowych, sprawdzenie rozmieszczenia, wymiana baterii i czujników.",
                              url: "https://www.przegladinstalacji.com/przeglad-czujnikow-dymu/",
                            },
                          },
                          {
                            "@type": "Offer",
                            itemOffered: {
                              "@type": "Service",
                              name: "Przegląd hydrauliczny",
                              url: "https://www.przegladinstalacji.com/przeglad-hydrauliczny/",
                            },
                          },
                          {
                            "@type": "Offer",
                            itemOffered: {
                              "@type": "Service",
                              name: "Modernizacja rozdzielnicy",
                              url: "https://www.przegladinstalacji.com/modernizacja-rozdzielnicy/",
                            },
                          },
                        ],
                      },
                    },
                    {
                      "@type": "WebSite",
                      "@id": "https://www.przegladinstalacji.com/#website",
                      url: "https://www.przegladinstalacji.com",
                      name: "Przegląd Instalacji",
                      publisher: {
                        "@id": "https://www.przegladinstalacji.com/#organization",
                      },
                      inLanguage: "pl-PL",
                    },
                  ],
                }),
              }}
            />
          </Head>
          {process.env.NODE_ENV === "production" && (
            <Script
              id="gtag-base"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', '${GTM_ID}');
              `,
              }}
            />
          )}
          {getLayout(<Component {...pageProps} />)}
          <ToastContainer autoClose={4000} hideProgressBar={true} />
          <div>
            {!isChatLoaded && (
              <div className={CHAT_LAUNCHER_POSITION_CLASSES}>
                <ChatLauncherButton onClick={() => setIsChatLoaded(true)} />
              </div>
            )}
            {isChatLoaded && <Chatbot startOpen />}
          </div>
          <CookieBanner />
        </div>
      </ViewportProvider>
      </SmoothScroll>
    </ApolloProvider>
  );
};

export default MyApp;
