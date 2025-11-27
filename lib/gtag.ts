type PageviewEvent = {
  event: "pageview";
  page: string;
};

type DataLayer = {
  push: (event: PageviewEvent) => number;
};

declare global {
  interface Window {
    dataLayer?: DataLayer;
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-PJBDLC2";

export const pageview = (url: string) => {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  if (typeof window === "undefined" || !window.dataLayer) {
    return;
  }

  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
