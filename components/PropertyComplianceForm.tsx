import { gql, useMutation } from "@apollo/client";

import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useFieldArray, useForm } from "react-hook-form";
import { useUpdateEffect } from "react-use";
import BookingFormSectionFive from "~/components/Book/FormSections/BookingFormSectionFive";
import BookingFormSectionFour from "~/components/Book/FormSections/BookingFormSectionFour";
import BookingFormSectionOne from "~/components/Book/FormSections/BookingFormSectionOne";
import BookingFormSectionThree from "~/components/Book/FormSections/BookingFormSectionThree";
import BookingFormSectionTwo from "~/components/Book/FormSections/BookingFormSectionTwo";
import { PROPERTY_FORM_FIELDS } from "~/components/Book/bookingFormVariables";

import { Stepper } from "~/components/Stepper";
// import { setBookFormInitVals } from "~/components/helpers/setBookFormInitVals";

import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { ViewportContext } from "~/providers/ViewportProvider";
import { preventEnterSubmit } from "~/utils/form";
import { errorToast } from "~/utils/toast";

const PAYMENT_STEP_LABEL = "Payment Details";

const BOOK_SERVICE = gql`
  mutation submitCustomBookingFormForSetupIntent(
    $input: SubmitCustomBookingFormForSetupIntentInput!
  ) {
    submitCustomBookingFormForSetupIntent(input: $input) {
      clientSecret
    }
  }
`;

const PropertyComplianceForm: NextPageWithLayout = () => {
  return null; // Bring back to original state once connected in Cindirect in #72

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    setValue,
    trigger,
    watch,
  } = useForm();

  const propertiesFieldArray = useFieldArray({
    control,
    name: "properties",
  });

  const [submitCustomBookingFormForSetupIntent, { data, loading, error }] =
    useMutation(BOOK_SERVICE);

  const [stripeClientSecret, setStripeClientSecret] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const { isMobile } = useContext(ViewportContext);

  useEffect(() => {
    // Set initial values
    setValue("date", new Date());
    if (propertiesFieldArray.fields.length === 0) {
      addProperty();
    }
    // TODO: Add env to use it only locally
    // setBookFormInitVals(setValue);
  }, []);

  const stepperContainerRef = useRef<HTMLDivElement>(null);
  useUpdateEffect(() => {
    if (isMobile) {
      stepperContainerRef?.current?.scrollIntoView();
    }
  }, [activeStep]);

  const addProperty = () => {
    const newFormField: { [field: string]: string } = {};
    PROPERTY_FORM_FIELDS.map((field) => {
      newFormField[field] = "";
    });
    propertiesFieldArray.append(newFormField);
  };

  const onSubmit = async (data: any) => {
    const mutationInput = parseBookFormValues(data);
    await submitCustomBookingFormForSetupIntent({
      variables: {
        input: {
          ...mutationInput,
          properties: JSON.stringify(mutationInput.properties),
        },
      },
    })
      .then((res) => {
        const clientSecret =
          res.data?.submitCustomBookingFormForSetupIntent.clientSecret;
        if (clientSecret) {
          setStripeClientSecret(clientSecret);
          setActiveStep(activeStep + 1);
        }
        if (!clientSecret) throw new Error("Stripe client secret not found");
      })
      .catch((e) => {
        console.log(e);
        errorToast(
          "There was an error submitting your form. Please try again."
        );
      });
  };

  const parseBookFormValues = (data: any) => {
    const formValues = structuredClone(data);
    delete formValues.confirm;
    return formValues;
  };

  const getPropertyFields = (): string[] => {
    const fields: string[] = [];
    for (let i = 0; i < propertiesFieldArray.fields.length; i++) {
      fields.push(
        ...PROPERTY_FORM_FIELDS.map((field) => `properties.${i}.${field}`)
      );
    }
    return fields;
  };

  const steps = [
    {
      label: "Owner Details",
      fields: [
        "ownerFullName",
        "date",
        "ownerPhone",
        "ownerMobile",
        "billingAddress",
        "ownerEmail",
      ],
      component: () => (
        <BookingFormSectionOne
          title="Owner Details"
          stepId="1"
          control={control}
          errors={errors}
          watch={watch}
          register={register}
          setValue={setValue}
        />
      ),
    },
    {
      label: "Property Details",
      fields: getPropertyFields(),
      component: () => (
        <BookingFormSectionTwo
          title="Property Details"
          stepId="2"
          description="A 10% discount applies for landlords with multiple properties listed in one name or one company name."
          propertiesFieldArray={propertiesFieldArray}
          errors={errors}
          setValue={setValue}
          watch={watch}
          register={register}
          control={control}
        />
      ),
    },
    {
      label: "Terms and Conditions",
      fields: ["confirm"],
      component: () => (
        <BookingFormSectionThree
          title="Terms and Conditions"
          stepId="3"
          register={register}
          errors={errors}
        />
      ),
    },
    {
      label: "Review",
      fields: [],
      component: () => (
        <BookingFormSectionFour
          title="Review"
          stepId="4"
          getValues={getValues}
        />
      ),
    },
    {
      label: PAYMENT_STEP_LABEL,
      fields: [],
      component: () => <React.Fragment />,
      buttonsDisabled: true,
    },
  ];

  return (
    <div>
      <MarginLayout
        className="-mt-10 lg:-mt-20"
        verticalPadding="md"
        horizontalPadding="lg"
      >
        <div className="text-md">
          This form is for rental property compliance bookings only. For all
          other bookings and inquiries, please get in touch with RCSC through
          the{" "}
          <Link
            href="/kontakt/"
            title="Contact Us"
            className="cursor-pointer rounded-none border-b-2 border-blue-500 font-bold text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
          >
            contact form.
          </Link>
        </div>
      </MarginLayout>
      {/* Form */}
      <MarginLayout className="-mt-20 -mb-20 flex-col">
        <div className="lg:full order-1 flex flex-col justify-center gap-4 px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-20">
          <div className="md:-mt-20" ref={stepperContainerRef}>
            {/*eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <form
              action="#"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
              onKeyDown={preventEnterSubmit}
            >
              <Stepper
                className=""
                steps={steps}
                errors={errors}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                triggerForm={trigger}
                preFinalStepLabel={"Next"}
                hasExtraStepOutside={true}
                stepperUsedFor={"booking"}
                error={error}
                loading={loading}
              />
            </form>
            {steps[activeStep].label === PAYMENT_STEP_LABEL && (
              // Uses own form and must be outside main stepper form
              <BookingFormSectionFive
                title={PAYMENT_STEP_LABEL}
                stepId="5"
                stripeClientSecret={stripeClientSecret}
              />
            )}
            <div className="flex justify-between px-4 py-3 text-right sm:px-6">
              <div>
                {errors.confirm?.message && (
                  <p className="mt-2 text-sm text-red-500">
                    Please fill in the highlighted fields
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </MarginLayout>
      <MarginLayout verticalPadding="sm" horizontalPadding="md">
        <i>
          The Residential Tenancies Act 2021 states that electrical and gas
          safety checks are mandatory once every two years, and smoke alarm
          services are required once a year in all residential rental
          properties.
        </i>
      </MarginLayout>
    </div>
  );
};

export default PropertyComplianceForm;
