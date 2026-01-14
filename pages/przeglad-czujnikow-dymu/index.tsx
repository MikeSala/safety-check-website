import { createServicePage } from "~/components/services/servicePageFactory";
import { InspectionAreas } from "~/components/InspectionAreas";
import InclusionsExclusions from "~/components/InclusionsExclusions";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { ROUTES } from "~/content/Routes";
import { SmokeSafetyCheckContent as content } from "~/content/przeglad-czujnikow-dymu/content.pl";
import smokeAlarmInspectionImage from "~/src/assets/images/smoke_4.jpg";
import smokeAlarmDetailImage from "~/src/assets/images/smoke-alarm-check.webp";

const SmokeSafetyCheckPage = createServicePage({
  content,
  images: [
    {
      src: smokeAlarmInspectionImage,
      alt: "Technik kontrolujący czujnik dymu na suficie",
    },
    {
      src: smokeAlarmDetailImage,
      alt: "Zbliżenie na nowoczesny czujnik dymu",
    },
  ],
  faqSelectedIds: [11, 12, 13, 14, 15, 16, 17],
  section1Children: (
    <InspectionAreas
      ctaLabel="Zarezerwuj przegląd instalacji przeciwpożarowej"
      ctaHref={ROUTES.BOOK_NOW}
    />
  ),
  additionalBottomContent: (
    <>
      <InclusionsExclusions category="Smoke Alarm Safety Checks" />
      <SubscriptionServiceBanner />
      <ServiceBoxes />
    </>
  ),
});

export default SmokeSafetyCheckPage;
