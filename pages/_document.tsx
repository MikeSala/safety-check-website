import Document, { Head, Html, Main, NextScript } from "next/document";
import { GTM_ID } from "~/lib/gtag";
class WebDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {process.env.NODE_ENV === "production" && (
            <noscript>
              <iframe
                title="tag-manager"
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default WebDocument;
