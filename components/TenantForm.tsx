import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button, { ButtonColor } from "~/components/Button";
import InputField from "~/components/Fields/InputField";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { errorToast, successToast } from "~/utils/toast";

type TenantFormValues = {
  tenantFullName: string;
  tenantPhone: string;
  tenantEmail: string;
  tenantSecondaryPhone: string;
};

const TENANT_REQUEST = gql`
  mutation submitTenantRequestForm($input: SubmitTenantRequestFormInput!) {
    submitTenantRequestForm(input: $input) {
      clientMutationId
    }
  }
`;

export const TenantForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TenantFormValues>();

  const { query } = useRouter();

  const [submitTenantRequestForm, { data, loading, error }] =
    useMutation<TenantFormValues>(TENANT_REQUEST);

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const res = await submitTenantRequestForm({
        variables: {
          input: {
            ...formData,
            request: query.request,
          },
        },
      });
      if (!res) {
        throw new Error(
          "Pojawił się błąd podczas wysyłania formularza. Spróbuj ponownie. Jeśli problem będzie się powtarzał, skontaktuj się z nami bezpośrednio poprzez email info@przegladinstalacji.com"
        );
      }
      reset();
      successToast("Informacje o lokatorze zostały wysłane");
    } catch (e) {
      console.log(e);
      errorToast(
        "Pojawił się błąd podczas wysyłania formularza. Spróbuj ponownie."
      );
    }
  });

  return (
    <MarginLayout>
      <form
        className="grid flex-grow grid-cols-2 gap-x-8 gap-y-4"
        onSubmit={onSubmit}
      >
        <InputField
          className="col-span-2 sm:col-span-1"
          label="Pełne imię lokatora"
          error={errors.tenantFullName?.message}
          autoComplete="name"
          required
          formProps={register("tenantFullName", {
            validate: {
              message: (v) => (v ? undefined : "Podaj swoje imię"),
            },
          })}
        />
        <InputField
          className="col-span-2 sm:col-span-1"
          label="Numer telefonu lokatora"
          error={errors.tenantPhone?.message}
          type="tel"
          autoComplete="tel"
          required
          formProps={register("tenantPhone", {
            validate: {
              message: (v) => (v ? undefined : "Podaj swój numer telefonu"),
            },
          })}
        />
        <InputField
          className="col-span-2 sm:col-span-1"
          label="Adres email lokatora"
          error={errors.tenantEmail?.message}
          type="email"
          autoComplete="email"
          required
          formProps={register("tenantEmail", {
            validate: {
              message: (v) => (v ? undefined : "Podaj adres email"),
            },
          })}
        />
        <InputField
          className="col-span-2 sm:col-span-1"
          label="Dodatkowy numer telefonu lokatora"
          error={errors.tenantSecondaryPhone?.message}
          formProps={register("tenantSecondaryPhone")}
        />
        <Button
          type="submit"
          className="col-span-2 justify-self-end"
          color={ButtonColor.Primary}
          size="lg"
          loading={loading}
        >
          Wyślij
        </Button>
      </form>
    </MarginLayout>
  );
};
