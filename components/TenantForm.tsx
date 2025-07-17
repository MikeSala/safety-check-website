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
          "There was an error submitting your form. Please try again. If the problem persists, please contact us directly at info@przegladinstalacji.pl"
        );
      }
      reset();
      successToast("Tenant information has been submitted successfully");
    } catch (e) {
      console.log(e);
      errorToast("There was an error submitting your form. Please try again.");
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
          label="Tenant's Full Name"
          error={errors.tenantFullName?.message}
          autoComplete="name"
          required
          formProps={register("tenantFullName", {
            validate: {
              message: (v) => (v ? undefined : "Please enter your name"),
            },
          })}
        />
        <InputField
          className="col-span-2 sm:col-span-1"
          label="Tenant's Phone Number"
          error={errors.tenantPhone?.message}
          type="tel"
          autoComplete="tel"
          required
          formProps={register("tenantPhone", {
            validate: {
              message: (v) =>
                v ? undefined : "Please enter your phone number",
            },
          })}
        />
        <InputField
          className="col-span-2 sm:col-span-1"
          label="Tenant's Email Address"
          error={errors.tenantEmail?.message}
          type="email"
          autoComplete="email"
          required
          formProps={register("tenantEmail", {
            validate: {
              message: (v) =>
                v ? undefined : "Please enter your email address",
            },
          })}
        />
        <InputField
          className="col-span-2 sm:col-span-1"
          label="Tenant's Secondary Phone Number"
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
          Submit
        </Button>
      </form>
    </MarginLayout>
  );
};
