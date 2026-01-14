import { createServicePage } from "~/components/services/servicePageFactory";
import { InspectionAreas } from "~/components/InspectionAreas";
import InclusionsExclusions from "~/components/InclusionsExclusions";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { ROUTES } from "~/content/Routes";
import { ElectricalSafetyCheckContent as content } from "~/content/przeglad-instalacji-elektrycznej/content.pl";
import electricalAssessmentImage from "~/src/assets/images/hero-power-box.webp";
import electricalMaintenanceImage from "~/src/assets/images/elec_11.jpg";
import electricalChecklistImage from "~/src/assets/images/energy-safe.png";

const ElectricalSafetyCheckPage = createServicePage({
  content,
  images: [
    {
      src: electricalAssessmentImage,
      alt: "Elektryk oceniający tablicę rozdzielczą",
    },
    {
      src: electricalMaintenanceImage,
      alt: "Specjalista wykonuje serwis instalacji elektrycznej",
    },
    {
      src: electricalChecklistImage,
      alt: "Lista kontrolna bezpieczeństwa energetycznego",
    },
  ],
  faqSelectedIds: [21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33],
  section1Children: (
    <InspectionAreas ctaLabel="Skontaktuj się z nami" ctaHref={ROUTES.BOOK_NOW} />
  ),
  additionalBottomContent: (
    <>
      <InclusionsExclusions category="Electrical Safety Checks" />
      <ServiceBoxes />
      <SubscriptionServiceBanner />
    </>
  ),
});

export default ElectricalSafetyCheckPage;
