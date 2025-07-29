import { ContactForm } from "~/components/ContactForm";
import { MarginLayout } from "~/components/layouts/MarginLayout";

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
  titleId: TitleId;
}

const FormComponent: React.FC<FormComponentProps> = ({ titleId }) => {
  const title = titles[titleId];

  return (
    <>
      <article className="flex h-[100px] flex-col items-center justify-center gap-4 bg-gray-200 px-4 py-12 text-center text-2xl h3 sm:py-24 lg:px-8">
        <h2 className="font-semibold h3">{title}</h2>
      </article>
      <MarginLayout className="mt-10 items-center justify-center">
        <div className="gap-12 md:grid md:grid-cols-2">
          <iframe
            className="h-full w-full"
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.9527097571467!2d145.13328191579782!3d-38.11803457969842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad674ab7d057495%3A0xc8c874fe20a0df6f!2s82%20Bardia%20Ave%2C%20Seaford%20VIC%203198%2C%20Australia!5e0!3m2!1sen!2sus!4v1673845456634!5m2!1sen!2sus"
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
