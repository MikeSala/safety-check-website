import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import Button, { ButtonColor } from "~/components/Button";
import InputField from "~/components/Fields/InputField";
import { TextareaField } from "~/components/Fields/TextareaField";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { ContactFormValues } from "~/types/forms";
import { errorToast, successToast } from "~/utils/toast";

const SEND_FORM_SERVICE = gql`
  mutation submitContactForm($input: SubmitContactFormInput!) {
    submitContactForm(input: $input) {
      clientMutationId
    }
  }
`;

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  const [submitContactForm, { data, loading, error }] =
    useMutation(SEND_FORM_SERVICE);

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const input = structuredClone(data);
      const response = await submitContactForm({
        variables: { input },
      });
      if (!response) {
        throw new Error(
          "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie. Jeśli problem będzie się powtarzał, skontaktuj się z nami bezpośrednio pod adresem info@przegladinstalacji.pl"
        );
      }
      reset();
      successToast("Formularz został pomyślnie wysłany");
    } catch (error) {
      errorToast(
        "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie. Jeśli problem będzie się powtarzał, skontaktuj się z nami bezpośrednio pod adresem info@przegladinstalacji.pl"
      );
    }
  };

  return (
    <MarginLayout>
      <div className="md:items-center md:justify-center">
        {" "}
        <h2 className="h4">Formularz kontaktowy</h2>
        <br></br>
        <form
          className="grid flex-grow grid-cols-2 gap-x-8 gap-y-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            className="col-span-2 sm:col-span-1"
            label="Imię i nazwisko"
            error={errors.name?.message}
            autoComplete="Imię"
            required
            formProps={register("name", {
              validate: {
                message: (v) =>
                  v ? undefined : "Proszę podać imię i nazwisko",
              },
            })}
          />
          <InputField
            className="col-span-2 sm:col-span-1"
            label="Telefon"
            error={errors.phone?.message}
            type="tel"
            autoComplete="tel"
            required
            formProps={register("phone", {
              validate: {
                message: (v) => (v ? undefined : "Proszę podać numer telefonu"),
              },
            })}
          />
          <InputField
            className="col-span-2 sm:col-span-1"
            label="Email"
            error={errors.email?.message}
            type="email"
            autoComplete="email"
            required
            formProps={register("email", {
              validate: {
                message: (v) =>
                  !!v && isEmail(v)
                    ? undefined
                    : "Proszę podać poprawny adres email",
              },
            })}
          />
          <InputField
            className="col-span-2 sm:col-span-1"
            label="Temat"
            error={errors.subject?.message}
            required
            formProps={register("subject", {
              validate: {
                message: (v) =>
                  v ? undefined : "Proszę podać temat zapytania",
              },
            })}
          />
          <TextareaField
            className="col-span-2"
            label="Wiadomość"
            error={errors.message?.message}
            required
            formProps={register("message", {
              validate: {
                message: (v) => (v ? undefined : "Proszę wpisać wiadomość"),
              },
            })}
          />
          <Button
            type="submit"
            loading={loading}
            className="col-span-2 justify-self-end"
            color={ButtonColor.Primary}
            size="lg"
          >
            Wyślij
          </Button>
        </form>
      </div>
    </MarginLayout>
  );
};
