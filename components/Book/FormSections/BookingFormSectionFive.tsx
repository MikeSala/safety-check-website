import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useMemo } from "react";
import { LoadingSpinner } from "../../Loaders/LoadingSpinner";
import StripeSetupForm from "../../StripeSetupForm";
import StepLayout from "../../layouts/StepLayout";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

type BookingFormSectionFiveProps = {
  title: string;
  stepId: string;
  stripeClientSecret: string;
};

const BookingFormSectionFive = (props: BookingFormSectionFiveProps) => {
  const { title, stepId, stripeClientSecret } = props;
  const formStep = `step-${stepId}`;
  const options = useMemo(
    () => ({
      clientSecret: stripeClientSecret,
      appearance: {
        theme: "flat" as const,
      },
      loader: "always" as const,
    }),
    [stripeClientSecret]
  );

  return (
    <StepLayout id={formStep} title={title}>
      <div className="flex flex-shrink justify-center">
        <Card
          className={"rounded-none border border-gray-400"}
          sx={{ boxShadow: 0 }}
        >
          <CardContent>
            {stripeClientSecret ? (
              <Elements stripe={stripePromise} options={options}>
                <StripeSetupForm clientSecret={stripeClientSecret} />
              </Elements>
            ) : (
              <LoadingSpinner className="py-36 px-24" />
            )}
          </CardContent>
        </Card>
      </div>
      <div className="mt-6 flex flex-col justify-center">
        <p className="mt-3 whitespace-pre-line text-base font-medium text-black">
          <strong>Secure Processing on Stripe.</strong> <br /> We use your
          credit card details exclusively for transactions via Stripe, a secure
          payment platform, for the package or services you select.
        </p>
        <p className="mt-3 whitespace-pre-line text-base font-medium text-black">
          <strong>No Credit Card Data Stored.</strong> <br />
          In line with our privacy and security commitments, RCSC does not keep
          your credit card information on file.
        </p>
        <p className="mt-3 whitespace-pre-line text-base font-medium text-black">
          <strong>No Hidden Fees.</strong> <br />
          You will incur charges strictly for the services or packages you have
          selected, with no unexpected additional charges.
        </p>
        <p className="mt-3 whitespace-pre-line text-base font-medium text-black">
          <strong>Charged Only After Review and Approval.</strong>
          <br /> Your credit card will only be charged when your work order has
          been reviewed and accepted by RCSC, ensuring any charges align with
          confirmed services.
        </p>
      </div>
    </StepLayout>
  );
};

export default BookingFormSectionFive;
