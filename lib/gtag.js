// todo - switch to .env
export const GTM_ID = "GTM-PJBDLC2";

export const pageview = (url) => {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
