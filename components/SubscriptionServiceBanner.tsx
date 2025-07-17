import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Button, { ButtonColor } from "~/components/Button";
import { ResponsiveImage } from "~/components/ResponsiveImage";

const benefits = {
  item: [
    "All-in-one service",
    "Hassle-free management",
    "Steady, affordable pricing",
  ],
};

const SubscriptionServiceBanner: React.FC = () => {
  return (
    <article className="mb-4 flex flex-col gap-4 bg-black px-4 py-6 sm:mb-8 sm:px-8 lg:mb-20 lg:px-12">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        <div className="w-full md:w-1/3">
          <ResponsiveImage
            src="/RCSC/family_1.webp"
            className="h-full rounded-md object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div className="w-full px-4 text-white sm:px-8 md:w-1/2 md:px-12">
          <h3 className="mb-4 text-center h2">
            Property Compliance Subscription
          </h3>
          <p className="mb-4 h4">
            Enjoy ongoing protection with bundled discounts. An affordable
            annual subscription for electrical, gas and smoke alarm services.
          </p>
          <ul className="mb-2 space-y-2 h4 sm:space-y-4">
            {benefits.item.map((item, index) => (
              <li key={index} className="flex items-center space-x-1">
                <CheckCircleIcon className="h-7 w-7" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col flex-wrap items-center justify-between md:flex-row">
            <h4 className="mt-4 text-3xl font-bold">
              Starting at $300/<span className="text-xl">year</span>
            </h4>
            <Button
              className="mt-4 shrink-0 rounded bg-white hover:bg-primary-600 hover:text-white"
              href="/property-compliance-subscription"
              color={ButtonColor.Primary}
              size="lg"
              title="Learn more about Property Compliance Subscription"
              outline
            >
              Learn more
              <ArrowLongRightIcon className="ml-2 h-7 w-7" />
            </Button>
            <h4 className="font-md font-md mt-4">
              <i className="text-white">
                Property Compliance Subscription is available only for rental
                properties
              </i>
            </h4>
          </div>
        </div>
      </div>
    </article>
  );
};
export default SubscriptionServiceBanner;
