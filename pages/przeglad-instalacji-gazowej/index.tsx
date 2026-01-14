import { createServicePage } from "~/components/services/servicePageFactory";
import { InspectionAreas } from "~/components/InspectionAreas";
import InclusionsExclusions from "~/components/InclusionsExclusions";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { ROUTES } from "~/content/Routes";
import { GasSafetyCheckContent as content } from "~/content/przeglad-instalacji-gazowej/content.pl";
import gasSafetyIntroImage from "~/src/assets/images/gas_10.jpg";
import gasSafetyMaintenanceImage from "~/src/assets/images/hero-power-box.webp";
import gasSafetyChecklistImage from "~/src/assets/images/energy-safe.png";

const GasSafetyCheckPage = createServicePage({
  content,
  images: [
    {
      src: gasSafetyIntroImage,
      alt: "Serwisant sprawdzający piec gazowy",
    },
    {
      src: gasSafetyMaintenanceImage,
      alt: "Konserwacja instalacji gazowej w budynku",
    },
    {
      src: gasSafetyChecklistImage,
      alt: "Kontrolna lista zadań dla serwisu gazowego",
    },
  ],
  faqSelectedIds: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
  section1Children: (
    <InspectionAreas ctaLabel="Skontaktuj się z nami" ctaHref={ROUTES.BOOK_NOW} />
  ),
  additionalBottomContent: (
    <>
      <InclusionsExclusions category="Przeglądy Bezpieczeństwa Elektrycznego" />
      <ServiceBoxes />
      <SubscriptionServiceBanner />
    </>
  ),
});

export default GasSafetyCheckPage;
