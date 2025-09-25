import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Fragment, useMemo } from "react";
import {
  Control,
  FieldValues,
  UseFieldArrayReturn,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import {
  ADDITIONAL_SERVICES_OPTIONS,
  PROPERTY_FORM_FIELDS,
  SERVICES,
} from "~/components/Book/bookingFormVariables";
import InputField from "~/components/Fields/InputField";
import InputFieldWithAutocomplete from "~/components/Fields/InputFieldWithAutocomplete";
import RadioField from "~/components/Fields/RadioField";
import SelectField from "~/components/Fields/SelectField";
import StepLayout from "~/components/layouts/StepLayout";
import { usePlaces } from "~/hooks/usePlaces";

type BookingFormSectionTwoProps = {
  title: string;
  stepId: string;
  description: string;
  propertiesFieldArray: UseFieldArrayReturn<FieldValues, "properties", "id">;
  errors: {
    [x: string]: any;
  };
  setValue: UseFormSetValue<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  register: UseFormRegister<FieldValues>;
  control: Control;
};

// TODO: Use more robust regex
const VALID_EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const BookingFormSectionTwo = (props: BookingFormSectionTwoProps) => {
  const {
    title,
    stepId,
    description,
    errors,
    setValue,
    watch,
    register,
    control,
  } = props;
  const { fields: properties, append, remove } = props.propertiesFieldArray;
  const formStep = `step-${stepId}`;
  const handleAddProperty = () => {
    const newFormField: { [field: string]: string } = {};
    PROPERTY_FORM_FIELDS.map((field) => {
      newFormField[field] = "";
    });
    append(newFormField);
  };

  return (
    <StepLayout title={title} id={formStep} description={description}>
      {/* TODO: implement animation */}
      {properties.map((property, index) => (
        <Fragment key={property.id}>
          <OrderCard
            index={index}
            property={property}
            properties={properties}
            removeProperty={remove}
            errors={errors}
            setValue={setValue}
            watch={watch}
            register={register}
            control={control}
          />
          {properties.length > 1 && index !== properties.length - 1 && (
            <hr className="my-8 sm:my-12" />
          )}
        </Fragment>
      ))}
      <div className="flex justify-center">
        <button
          type="button"
          className="text-sm font-bold text-blue-500"
          onClick={handleAddProperty}
        >
          + Dodaj nieruchomość
        </button>
      </div>
    </StepLayout>
  );
};

type OrderCardProps = {
  index: number;
  property: Record<"id", string>;
  properties: Record<"id", string>[];
  errors: {
    [x: string]: any;
  };
  removeProperty: (index: number) => void;
  setValue: UseFormSetValue<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  register: UseFormRegister<FieldValues>;
  className?: string;
  control: Control;
};

const OrderCard = ({
  index,
  properties,
  errors,
  removeProperty,
  setValue,
  watch,
  register,
  className,
  control,
}: OrderCardProps) => {
  const address = watch(`properties.${index}.address`) || "";
  const [places] = usePlaces(address);
  const placeStrings = useMemo(
    () => places?.map((place) => place.description),
    [places]
  );

  return (
    <div className={clsx("relative w-full", className)}>
      {/* Przycisk usuwania */}
      {properties.length > 1 && (
        <button
          className="absolute top-0 right-0 h-8 w-8 border-2 border-gray-300 text-red-600"
          onClick={() => removeProperty(index)}
        >
          <XMarkIcon />
          <div className="sr-only">Usuń nieruchomość {index + 1}.</div>
        </button>
      )}

      <h4 className="mb-2 h4">Nieruchomość {index + 1}</h4>

      {/* Property Fields */}
      <div className="grid grid-cols-6 gap-6">
        {/* Pole: adres wynajmowanej nieruchomości */}
        <div className="col-span-6">
          <InputFieldWithAutocomplete
            label="Adres wynajmowanej nieruchomości"
            error={errors.properties?.[index]?.address?.message}
            defaultValue={address}
            setValue={setValue}
            required
            formProps={register(`properties.${index}.address`, {
              validate: {
                message: (v) =>
                  v
                    ? undefined
                    : "Podaj adres wynajmowanej nieruchomości",
              },
            })}
            autoCompleteItems={placeStrings}
          />
        </div>

        {/* Service Field */}
        <SelectField
          className="col-span-6"
          label="Wybierz usługę z poniższej listy"
          options={SERVICES}
          error={errors.properties?.[index]?.service?.message}
          required
          formProps={register(`properties.${index}.service`, {
            validate: {
              message: (v) =>
                v ? undefined : "Wybierz usługę z powyższej listy",
            },
          })}
        />
        {/* Compliance Subscription Field */}
        <RadioField
          className="col-span-6"
          title="Dodaj nieruchomość do subskrypcji zapewniającej zgodność."
          description={
            "Stałym klientom, których nieruchomości zostały doprowadzone do zgodności przez nasz zespół, nie naliczamy tej opłaty.\n(Zniżka 10% dla wielu właścicieli nie obejmuje jednorazowej opłaty serwisowej)."
          }
          options={ADDITIONAL_SERVICES_OPTIONS}
          error={errors.properties?.[index]?.complianceSubscription?.message}
          required
          control={control}
          formProps={register(`properties.${index}.complianceSubscription`, {
            validate: {
              message: (v: string) => {
                if (!v) {
                  return "Wybierz jedną z opcji.";
                }
              },
            },
          })}
        />

        {/* Property Manager's Full Name Field */}
        <InputField
          className="col-span-6 lg:col-span-2"
          label="Imię i nazwisko zarządcy"
          autoComplete="name"
          error={errors.properties?.[index]?.propertyManagerFullName?.message}
          required
          formProps={register(`properties.${index}.propertyManagerFullName`, {
            validate: {
              message: (v) =>
                v
                  ? undefined
                  : "Podaj imię i nazwisko zarządcy nieruchomości",
            },
          })}
        />

        {/* Property Manager's Phone Number Field */}
        <InputField
          className="col-span-6 lg:col-span-2"
          label="Telefon zarządcy"
          autoComplete="tel"
          error={errors.properties?.[index]?.propertyManagerPhone?.message}
          required
          formProps={register(`properties.${index}.propertyManagerPhone`, {
            validate: {
              message: (v) =>
                v
                  ? undefined
                  : "Podaj numer telefonu zarządcy",
            },
          })}
        />

        {/* Property Manager's Email Address Field */}
        <InputField
          className="col-span-6 lg:col-span-2"
          label="Adres e-mail zarządcy"
          autoComplete="email"
          error={errors.properties?.[index]?.propertyManagerEmail?.message}
          required
          formProps={register(`properties.${index}.propertyManagerEmail`, {
            validate: {
              message: (v) =>
                !!v && VALID_EMAIL_REGEX.test(v)
                  ? undefined
                  : "Podaj poprawny adres e-mail",
            },
          })}
        />
      </div>
    </div>
  );
};

export default BookingFormSectionTwo;
