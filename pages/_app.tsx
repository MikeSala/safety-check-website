import { ApolloProvider } from "@apollo/client/react";
import clsx from "clsx";
import { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Script from "next/script";
import dynamic from "next/dynamic";
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CookieBanner from "~/components/CookieBanner";
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

// body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
  const canonicalUrl = `${baseUrl}${cleanPath === "/" ? "" : cleanPath}`;

  return (
    <ApolloProvider client={apolloClient}>
      <ViewportProvider>
        <div
          id="app"
          className={clsx("flex h-full flex-col overflow-auto", inter.variable)}
          ref={ref}
        >
          {" "}
          <ScrollButton containerRef={ref} />
          <DefaultSeo {...DEFAULT_SEO} canonical={canonicalUrl} />
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
              <button
                type="button"
                onClick={() => setIsChatLoaded(true)}
                className="fixed bottom-11 right-20 z-40 flex items-center gap-2 rounded-full border border-sky-800 bg-white px-5 py-2 text-sm font-medium text-sky-800 shadow-lg transition hover:bg-sky-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:right-[7.5rem] lg:right-[5.5rem]"
              >
                <span aria-hidden className="text-lg">
                  💬
                </span>
                <span className="flex items-center gap-2 text-sm font-medium">
                  Kliknij tutaj
                  <span
                    aria-hidden
                    className="h-3 w-3 animate-pulse rounded-full bg-red-400 shadow-[0_0_0_2px_rgba(16,185,129,0.35)]"
                  />
                </span>
              </button>
            )}
            {isChatLoaded && <Chatbot startOpen />}
          </div>
          <CookieBanner />
        </div>
      </ViewportProvider>
    </ApolloProvider>
  );
};

export default MyApp;
