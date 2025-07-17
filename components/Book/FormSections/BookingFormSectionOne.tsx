import { useMemo } from "react";
import {
  Control,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { DateField } from "~/components/Fields/DateField";
import InputField from "~/components/Fields/InputField";
import InputFieldWithAutocomplete from "~/components/Fields/InputFieldWithAutocomplete";
import StepLayout from "~/components/layouts/StepLayout";
import { usePlaces } from "~/hooks/usePlaces";
import isEmail from "validator/lib/isEmail";

type BookingFormSectionOneProps = {
  stepId: string;
  title: string;
  control: Control<FieldValues, any>;
  errors: {
    [x: string]: any;
  };
  watch: UseFormWatch<FieldValues>;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

const BookingFormSectionOne: React.FC<BookingFormSectionOneProps> = ({
  title,
  stepId,
  errors,
  control,
  watch,
  register,
  setValue,
}) => {
  const formStep = `step-${stepId}`;
  const billingAddress = watch("billingAddress");
  const [places] = usePlaces(billingAddress);
  const placeStrings = useMemo(
    () => places?.map((place) => place.description),
    [places]
  );

  return (
    <StepLayout title={title} id={formStep}>
      <div className="grid grid-cols-6 gap-6">
        {/* Owner's Full Name Field */}
        <InputField
          className="col-span-6 md:col-span-4"
          label="Owner's Full Name"
          error={errors.ownerFullName?.message}
          autoComplete="name"
          required
          formProps={register("ownerFullName", {
            validate: {
              message: (v) =>
                v ? undefined : "Please enter the owner's full name",
            },
          })}
        />

        {/* Date Field */}
        <DateField
          className="col-span-6 md:col-span-2"
          label="Date"
          name="date"
          control={control}
          error={errors.date?.message}
          required
          disabled
          rules={{
            validate: {
              message: (v) => (v ? undefined : "Please select a date"),
            },
            required: true,
          }}
        />

        {/* Owner's Phone Number Field */}
        <InputField
          className="col-span-6 md:col-span-3"
          label="Owner's Phone"
          error={errors.ownerPhone?.message}
          type="tel"
          autoComplete="tel"
          required
          formProps={register("ownerPhone", {
            validate: {
              message: (v) =>
                v ? undefined : "Please enter the owner's phone number",
            },
          })}
        />

        {/* Owner's Mobile Number Field */}
        <InputField
          className="col-span-6 md:col-span-3"
          label="Owner's Mobile"
          error={errors.ownerMobile?.message}
          type="tel"
          formProps={register("ownerMobile")}
        />

        {/* Billing Address Field */}
        <div className="col-span-6">
          <InputFieldWithAutocomplete
            label="Billing Address"
            error={errors.billingAddress?.message}
            defaultValue={billingAddress}
            setValue={setValue}
            autoCompleteItems={placeStrings}
            required
            formProps={register("billingAddress", {
              validate: {
                message: (v) =>
                  v ? undefined : "Please enter the billing address",
              },
            })}
          />
        </div>

        {/* Owner's Email Field */}
        <InputField
          className="col-span-6"
          label="Owner's Email Address"
          type="email"
          autoComplete="email"
          required
          formProps={register("ownerEmail", {
            validate: {
              message: (v) =>
                !!v && isEmail(v)
                  ? undefined
                  : "Please enter a valid email address",
            },
          })}
          error={errors.ownerEmail?.message}
        />
      </div>
    </StepLayout>
  );
};

export default BookingFormSectionOne;
