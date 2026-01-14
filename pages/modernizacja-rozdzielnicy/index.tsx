import { createServicePage } from "~/components/services/servicePageFactory";
import FormComponent from "~/components/FormComponent";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import SwitchboardInclusionsExclusions from "~/components/SwitchboardInclusionsExclusions";
import { SwitchboardUpgradeContent as content } from "~/content/modernizacja-rozdzielnicy/content.pl";
import switchboardBeforeImage from "~/src/assets/images/elec_11.jpg";
import switchboardAfterImage from "~/src/assets/images/hero-power-box.webp";
import switchboardDetailImage from "~/src/assets/images/energy-safe.png";

const SwitchboardUpgradePage = createServicePage({
  content,
  images: [
    {
      src: switchboardBeforeImage,
      alt: "Stara rozdzielnica elektryczna przed modernizacją",
    },
    {
      src: switchboardAfterImage,
      alt: "Nowoczesna rozdzielnica po modernizacji",
    },
    {
      src: switchboardDetailImage,
      alt: "Zbliżenie na szczegóły instalacji elektrycznej",
    },
  ],
  faqSelectedIds: [71, 72, 73, 74, 75, 76],
  additionalBottomContent: (
    <>
      <FormComponent titleId="switchboardUpgrade" />
      <SwitchboardInclusionsExclusions />
      <ServiceBoxes />
      <SubscriptionServiceBanner />
    </>
  ),
});

export default SwitchboardUpgradePage;
