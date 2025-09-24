import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Button, { ButtonColor } from "~/components/Button";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import familySubscriptionImage from "~/src/assets/images/family_1.webp";

const content = {
  item: [
    "Usługa kompleksowa",
    "Bezproblemowe zarządzanie",
    "Stała, przystępna cena",
    "Subskrypcja Bezpieczeństwa Nieruchomości",
    "Zyskaj stałą ochronę z rabatami w pakiecie. Niedroga roczna subskrypcja na usługi elektryczne, gazowe i związane z czujnikami dymu.",
    "Już od 300 zł na rok",
    "Dowiedz się więcej",
    "Subskrypcja Bezpieczeństwa Nieruchomości dotyczy wyłącznie nieruchomości wynajmowanych",
  ],
};

const SubscriptionServiceBanner: React.FC = () => {
  return (
    <article className="mb-4 mt-10 flex flex-col gap-4 bg-sky-900 px-4 py-6 sm:mb-8 sm:px-8 lg:mb-20 lg:px-12">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        <div className="w-full md:w-1/3">
          <ResponsiveImage
            src={familySubscriptionImage}
            className="h-full object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div className="w-full px-4 text-white sm:px-8 md:w-1/2 md:px-12">
          <h3 className="mb-4 text-center h2">{content.item[3]}</h3>
          <p className="mb-4 h4">{content.item[4]}</p>
          <ul className="mb-2 space-y-2 h4 sm:space-y-4">
            {content.item.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-center space-x-1">
                <CheckCircleIcon className="h-7 w-7" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col flex-wrap items-center justify-between md:flex-row">
            <h4 className="mt-4 text-3xl font-bold">
              {content.item[5].split(" ")[0]}{" "}
              <span className="text-xl">{content.item[5].split(" ")[1]}</span>
            </h4>
            <Button
              className="mt-4 shrink-0 rounded bg-white hover:bg-primary-600 hover:text-white"
              href="/abonament-na-zgodnosc"
              color={ButtonColor.Primary}
              size="lg"
              title={`Learn more about ${content.item[3]}`}
              outline
            >
              {content.item[6]}
              <ArrowLongRightIcon className="ml-2 h-7 w-7" />
            </Button>
            <h4 className="font-md font-md mt-4">
              <i className="text-white">{content.item[7]}</i>
            </h4>
          </div>
        </div>
      </div>
    </article>
  );
};
export default SubscriptionServiceBanner;
