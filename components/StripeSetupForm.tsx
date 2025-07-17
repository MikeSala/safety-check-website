import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { SyntheticEvent, useState } from "react";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

type StripeSetupFormProps = {
  clientSecret: string;
};

export default function StripeSetupForm(props: StripeSetupFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}checkout-result`,
      },
    });

    if (error.message) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className="mt-6 flex justify-center">
        <Button
          loading={loading}
          disabled={!stripe}
          className="w-full"
          type="submit"
        >
          Submit
        </Button>
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </form>
  );
}
