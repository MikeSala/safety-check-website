import { createServicePage } from "~/components/services/servicePageFactory";
import FormComponent from "~/components/FormComponent";
import { GeneralPlumbingContent as content } from "~/content/przeglad-hydrauliczny/content.pl";
import plumbingImageOne from "~/src/assets/images/plumbing_1.webp";
import plumbingImageTwo from "~/src/assets/images/plumbing_2.webp";
import plumbingImageFour from "~/src/assets/images/plumbing_4.webp";

const GeneralPlumbing = createServicePage({
  content,
  images: [
    {
      src: plumbingImageTwo,
      alt: "Instalator hydrauliczny naprawiający rury pod zlewem",
    },
    {
      src: plumbingImageFour,
      alt: "Wnętrze łazienki podczas serwisu hydraulicznego",
    },
    {
      src: plumbingImageOne,
      alt: "Specjalista sprawdzający instalację wodną w pomieszczeniu technicznym",
    },
  ],
  faqSelectedIds: [],
  section1Children: <FormComponent titleId="plumbingService" />,
});

export default GeneralPlumbing;
