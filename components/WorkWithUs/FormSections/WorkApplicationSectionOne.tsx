import {
  Control,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import InputField from "~/components/Fields/InputField";
import StepLayout from "~/components/layouts/StepLayout";
import { StyledDropzone } from "~/components/StyledDropzone";

type WorkFormSectionOneProps = {
  title: string;
  stepId: string;
  control: Control<FieldValues, any>;
  errors: {
    [x: string]: any;
  };
  watch: UseFormWatch<FieldValues>;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

// TODO: Use more robust regex
// TODO: Move to utils
const VALID_EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const reqMessage = (field: string) => `Proszę podaj swoje ${field}`;

const WorkApplicationSectionOne = (props: WorkFormSectionOneProps) => {
  const { title, stepId, errors, control, watch, register, setValue } = props;
  const formStep = `step-${stepId}`;

  return (
    <StepLayout id={formStep} title={title}>
      <div className="grid grid-cols-2 gap-6">
        {/* First Name Field */}
        <InputField
          className="col-span-2 md:col-span-1"
          label="Imię"
          error={errors.firstName?.message}
          autoComplete="given-name"
          required
          formProps={register("firstName", {
            validate: {
              message: (v) => (v ? undefined : reqMessage("first name")),
            },
          })}
        />
        {/* Last Name Field */}
        <InputField
          className="col-span-2 md:col-span-1"
          label="Nazwisko"
          error={errors.lastName?.message}
          autoComplete="family-name"
          required
          formProps={register("lastName", {
            validate: {
              message: (v) => (v ? undefined : reqMessage("last name")),
            },
          })}
        />

        {/* Phone Number Field */}
        <InputField
          className="col-span-2 md:col-span-1"
          label="Telefon"
          error={errors.phoneNumber?.message}
          autoComplete="tel"
          type="tel"
          required
          formProps={register("phoneNumber", {
            validate: {
              message: (v) => (v ? undefined : reqMessage("phone number")),
            },
          })}
        />

        {/* Email Address Field */}
        <InputField
          className="col-span-2 md:col-span-1"
          label="Email"
          error={errors.emailAddress?.message}
          autoComplete="email"
          type="email"
          required
          formProps={register("emailAddress", {
            validate: {
              message: (v) =>
                !!v && VALID_EMAIL_REGEX.test(v)
                  ? undefined
                  : reqMessage("Podaj istniejący adres email"),
            },
          })}
        />

        <StyledDropzone
          className="col-span-2"
          control={control}
          setValue={setValue}
          formProps={register("fileName", {
            validate: {
              message: (v) => (v ? undefined : "Proszę dołącz plik"),
            },
          })}
          error={errors?.fileName?.message}
          watch={watch}
        />
      </div>
    </StepLayout>
  );
};

export default WorkApplicationSectionOne;
