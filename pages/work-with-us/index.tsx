import { gql, useMutation } from "@apollo/client";
import { cloneDeep } from "lodash-es";
import { NextSeo } from "next-seo";
import { ReactElement, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Banner } from "~/components/Banner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { Stepper } from "~/components/Stepper";
import WorkApplicationSectionOne from "~/components/WorkWithUs/FormSections/WorkApplicationSectionOne";
import WorkApplicationSectionTwo from "~/components/WorkWithUs/FormSections/WorkApplicationSectionTwo";
import { NextPageWithLayout } from "~/pages/_app";
import { preventEnterSubmit } from "~/utils/form";
import { errorToast, successToast } from "~/utils/toast";

const content = {
  bannerTitle: "Pracuj z Nami",
  step1Title: "Proszę podaj swoje dane i załącz CV",
  step2Title: "Sprawdź, czy dane są poprawne",
  step1Label: "Twoje dane",
  step2Label: "Podsumowanie",
  stepperSubmitButton: "Wyślij",
  errorMessage: "Wypełnij proszę wskazane pola",
  seo: {
    title: "Dołącz do nas",
    description:
      "Inwestujemy w ludzi. Dołącz do nas i odkryj nowe możliwości rozwoju i pracy.",
  },
};

const SEND_FORM_SERVICE = gql`
  mutation submitWorkApplication($input: SubmitWorkApplicationInput!) {
    submitWorkApplication(input: $input) {
      clientMutationId
    }
  }
`;

const WorkWithUsPage: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    setValue,
    trigger,
    watch,
    reset,
  } = useForm();

  const [submitWorkApplication, { data, loading, error }] =
    useMutation(SEND_FORM_SERVICE);
  const [activeStep, setActiveStep] = useState(0);

  const onSubmit = async (data: FieldValues) => {
    try {
      const input = cloneDeep(data);
      const response = await submitWorkApplication({
        variables: { input },
      });
      if (!response) {
        throw new Error(
          "There was an error submitting your form. Please try again. If the problem persists, please contact us directly at info@przegladinstalacji.pl"
        );
      }
      reset();
      setActiveStep(0);
      successToast("Your application has been submitted successfully");
    } catch (e) {
      errorToast(
        "There was an error submitting your form. Please try again. If the problem persists, please contact us directly at info@przegladinstalacji.pl"
      );
    }
  };

  const steps = [
    {
      label: content.step1Label,
      fields: [
        "firstName",
        "lastName",
        "phoneNumber",
        "emailAddress",
        "fileName",
        "fileContent",
      ],
      component: () => (
        <WorkApplicationSectionOne
          title={content.step1Title}
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
      label: content.step2Label,
      fields: [],
      component: () => (
        <WorkApplicationSectionTwo
          title={content.step2Title}
          stepId="2"
          getValues={getValues}
        />
      ),
    },
  ];

  return (
    <>
      <>
        <Banner title={content.bannerTitle} />
        <div className="flex flex-wrap lg:flex-nowrap">
          <ResponsiveImage
            className="order-1 lg:order-1 lg:h-auto lg:w-1/2"
            src="/RCSC/gas_9_work_with_us_b.webp"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
          <div className="order-1 flex w-full flex-col justify-center gap-4 px-4 py-8 sm:px-6 sm:py-12 lg:order-2 lg:w-1/2 lg:px-16 lg:py-20">
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              onKeyDown={preventEnterSubmit}
            >
              <Stepper
                steps={steps}
                errors={errors}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                triggerForm={trigger}
                preFinalStepLabel={content.stepperSubmitButton}
                stepperUsedFor="workApplication"
                loading={loading}
                error={error}
              />
            </form>
            {errors.confirm?.message && (
              <p className="mt-2 text-sm text-red-500">
                {content.errorMessage}
              </p>
            )}
          </div>
        </div>
      </>
    </>
  );
};

WorkWithUsPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title={content.seo.title}
        description={content.seo.description}
      />
      {page}
    </MainLayout>
  );
};

export default WorkWithUsPage;
