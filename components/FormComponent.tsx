import { ContactForm } from "~/components/ContactForm";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import SectionStrip from "~/components/SectionStrip";

type TitleId =
  | "caravanSafety"
  | "electricalSafety"
  | "gasSafety"
  | "plumbingService"
  | "smokeSafety"
  | "switchboardUpgrade"
  | "ourServices";

const titles: Record<TitleId, string> = {
  caravanSafety: "Umów się na przegląd bezpieczeństwa przyczepy kempingowej",
  electricalSafety:
    "Umów się na przegląd bezpieczeństwa instalacji elektrycznej",
  gasSafety: "Umów się na przegląd bezpieczeństwa instalacji gazowej",
  plumbingService: "Umów się na przegląd instalacji hydraulicznej",
  switchboardUpgrade: "Umów się na modernizację rozdzielnicy elektrycznej",
  smokeSafety: "Umów się na przegląd czujników dymu",
  ourServices: "Zamów nasze usługi",
};

interface FormComponentProps {
  titleId?: TitleId;
}

const FormComponent: React.FC<FormComponentProps> = ({ titleId }) => {
  const title = titleId ? titles[titleId] : "";

  return (
    <>
      {titleId && (
        <SectionStrip
          title={title}
          paddingClassName="px-4 py-12 sm:py-24 lg:px-8"
          titleClassName="font-semibold h3"
        />
      )}
      <MarginLayout className="mt-10 mb-10 items-center justify-center">
        <div className="gap-12 md:grid md:grid-cols-2">
          <iframe
            className="h-full w-full"
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.942865752377!2d19.898584876970316!3d50.06027477151416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b095a9606a3%3A0x87206338a9a2951c!2sLudwika%20Rydla%2C%2030-001%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1722325256744!5m2!1spl!2spl"
            allowFullScreen
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="order-1">
            <ContactForm />
          </div>
        </div>
      </MarginLayout>
    </>
  );
};

export default FormComponent;
