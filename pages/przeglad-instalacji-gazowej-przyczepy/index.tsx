import { createServicePage } from "~/components/services/servicePageFactory";
import FormComponent from "~/components/FormComponent";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { caravanGasContent as content } from "~/content/przeglad-instalacji-gazowej-przyczepy/content.pl";
import caravanIntroImage from "~/src/assets/images/hero-houses-aerial.jpg";
import caravanGuidelinesImage from "~/src/assets/images/family_1.webp";
import caravanPreparationImage from "~/src/assets/images/victoria_1.webp";

const CaravanGasComplianceCheckPage = createServicePage({
  content,
  images: [
    {
      src: caravanIntroImage,
      alt: "Przyczepy kempingowe ustawione na polu z lotu ptaka",
    },
    {
      src: caravanGuidelinesImage,
      alt: "Rodzina odpoczywająca w przyczepie kempingowej",
    },
    {
      src: caravanPreparationImage,
      alt: "Widok na samochód z przyczepą na tle krajobrazu",
    },
  ],
  faqSelectedIds: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  section1Children: <FormComponent titleId="caravanSafety" />,
  additionalBottomContent: <SubscriptionServiceBanner />,
});

export default CaravanGasComplianceCheckPage;
