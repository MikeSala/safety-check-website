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
        {/* Pole: imię i nazwisko właściciela */}
        <InputField
          className="col-span-6 md:col-span-4"
          label="Imię i nazwisko właściciela"
          error={errors.ownerFullName?.message}
          autoComplete="name"
          required
          formProps={register("ownerFullName", {
            validate: {
              message: (v) =>
                v ? undefined : "Podaj imię i nazwisko właściciela",
            },
          })}
        />

        {/* Date Field */}
        <DateField
          className="col-span-6 md:col-span-2"
          label="Data"
          name="date"
          control={control}
          error={errors.date?.message}
          required
          disabled
          rules={{
            validate: {
              message: (v) => (v ? undefined : "Wybierz datę"),
            },
            required: true,
          }}
        />

        {/* Pole: numer telefonu właściciela */}
        <InputField
          className="col-span-6 md:col-span-3"
          label="Telefon właściciela"
          error={errors.ownerPhone?.message}
          type="tel"
          autoComplete="tel"
          required
          formProps={register("ownerPhone", {
            validate: {
              message: (v) =>
                v ? undefined : "Podaj numer telefonu właściciela",
            },
          })}
        />

        {/* Pole: numer komórkowy właściciela */}
        <InputField
          className="col-span-6 md:col-span-3"
          label="Telefon komórkowy właściciela"
          error={errors.ownerMobile?.message}
          type="tel"
          formProps={register("ownerMobile")}
        />

        {/* Billing Address Field */}
        <div className="col-span-6">
          <InputFieldWithAutocomplete
            label="Adres rozliczeniowy"
            error={errors.billingAddress?.message}
            defaultValue={billingAddress}
            setValue={setValue}
            autoCompleteItems={placeStrings}
            required
            formProps={register("billingAddress", {
              validate: {
                message: (v) =>
                  v ? undefined : "Podaj adres rozliczeniowy",
              },
            })}
          />
        </div>

        {/* Pole: adres e-mail właściciela */}
        <InputField
          className="col-span-6"
          label="Adres e-mail właściciela"
          type="email"
          autoComplete="email"
          required
          formProps={register("ownerEmail", {
            validate: {
              message: (v) =>
                !!v && isEmail(v)
                  ? undefined
                  : "Podaj poprawny adres e-mail",
            },
          })}
          error={errors.ownerEmail?.message}
        />
      </div>
    </StepLayout>
  );
};

export default BookingFormSectionOne;
