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
          <strong>Bezpieczne przetwarzanie w Stripe.</strong> <br /> Dane Twojej
          karty wykorzystujemy wyłącznie do transakcji realizowanych za
          pośrednictwem Stripe, zaufanej platformy płatniczej, dla wybranego
          pakietu lub usługi.
        </p>
        <p className="mt-3 whitespace-pre-line text-base font-medium text-black">
          <strong>Bez przechowywania danych karty.</strong> <br />
          Zgodnie z naszymi standardami prywatności i bezpieczeństwa nie
          przechowujemy danych Twojej karty kredytowej.
        </p>
        <p className="mt-3 whitespace-pre-line text-base font-medium text-black">
          <strong>Brak ukrytych opłat.</strong> <br />
          Płacisz wyłącznie za wybrane pakiety lub usługi, bez nieoczekiwanych
          kosztów dodatkowych.
        </p>
        <p className="mt-3 whitespace-pre-line text-base font-medium text-black">
          <strong>Obciążenie dopiero po zatwierdzeniu.</strong>
          <br /> Karta zostanie obciążona dopiero po weryfikacji i akceptacji
          zlecenia przez nasz zespół, dzięki czemu płatność dotyczy jedynie
          potwierdzonych usług.
        </p>
      </div>
    </StepLayout>
  );
};

export default BookingFormSectionFive;
