import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Button, { ButtonColor } from "~/components/Button";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { ROUTES } from "~/content/Routes";
import { SubscriptionServiceBannerContent as content } from "~/content/subscriptionServiceBanner";
import familySubscriptionImage from "~/src/assets/images/family_1.webp";

const SubscriptionServiceBanner: React.FC = () => {
  return (
    <article className="mb-4 mt-10 flex flex-col gap-4 bg-sky-900 px-4 py-6 sm:mb-8 sm:px-8 lg:mb-20 lg:px-12">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        <div className="w-full md:w-1/3">
          <ResponsiveImage
            src={familySubscriptionImage}
            className="h-full object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt={content.imageAlt}
          />
        </div>

        <div className="w-full px-4 text-white sm:px-8 md:w-1/2 md:px-12">
          <h3 className="mb-4 text-center h2">{content.title}</h3>
          <p className="mb-4 h4">{content.description}</p>
          <ul className="mb-2 space-y-2 h4 sm:space-y-4">
            {content.features.map((item) => (
              <li key={item} className="flex items-center space-x-1">
                <CheckCircleIcon className="h-7 w-7" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col flex-wrap items-center justify-between md:flex-row">
            <h4 className="mt-4 text-3xl font-bold">
              <span className="text-xl font-normal">
                {content.price.prefix}
              </span>{" "}
              {content.price.value}{" "}
              <span className="text-xl">{content.price.unit}</span>{" "}
              <span className="text-xl font-normal">
                {content.price.suffix}
              </span>
            </h4>
            <Button
              className="mt-4 shrink-0 rounded bg-white hover:bg-primary-600 hover:text-white"
              href={ROUTES.COMPLIANCE_SUBSCRIPTION}
              color={ButtonColor.Primary}
              size="lg"
              title={content.ctaTitle}
              outline
            >
              {content.ctaLabel}
              <ArrowLongRightIcon className="ml-2 h-7 w-7" />
            </Button>
            <h4 className="font-md font-md mt-4">
              <i className="text-white">{content.note}</i>
            </h4>
          </div>
        </div>
      </div>
    </article>
  );
};
export default SubscriptionServiceBanner;
