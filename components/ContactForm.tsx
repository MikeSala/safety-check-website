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
          "There was an error submitting your form. Please try again. If the problem persists, please contact us directly at info@przegladinstalacji.pl"
        );
      }
      reset();
      successToast("Your form has been submitted successfully");
    } catch (error) {
      errorToast(
        "There was an error submitting your form. Please try again. If the problem persists, please contact us directly at info@przegladinstalacji.pl"
      );
    }
  };

  return (
    <MarginLayout>
      <div className="md:-mt-20 md:items-center md:justify-center">
        {" "}
        <h2 className="h4">Contact Form</h2>
        <br></br>
        <form
          className="grid flex-grow grid-cols-2 gap-x-8 gap-y-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            className="col-span-2 sm:col-span-1"
            label="Name"
            error={errors.name?.message}
            autoComplete="name"
            required
            formProps={register("name", {
              validate: {
                message: (v) => (v ? undefined : "Please enter your name"),
              },
            })}
          />
          <InputField
            className="col-span-2 sm:col-span-1"
            label="Phone"
            error={errors.phone?.message}
            type="tel"
            autoComplete="tel"
            required
            formProps={register("phone", {
              validate: {
                message: (v) =>
                  v ? undefined : "Please enter your phone number",
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
                    : "Please enter a valid email address",
              },
            })}
          />
          <InputField
            className="col-span-2 sm:col-span-1"
            label="Subject"
            error={errors.subject?.message}
            required
            formProps={register("subject", {
              validate: {
                message: (v) =>
                  v ? undefined : "Please enter the subject of your inquiry",
              },
            })}
          />
          <TextareaField
            className="col-span-2"
            label="Message"
            error={errors.message?.message}
            required
            formProps={register("message", {
              validate: {
                message: (v) => (v ? undefined : "Please enter your message"),
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
            Send
          </Button>
        </form>
      </div>
    </MarginLayout>
  );
};
