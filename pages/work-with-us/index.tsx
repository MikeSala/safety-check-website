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
      label: "Your details",
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
          title="Please provide your details and attach your resume"
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
      label: "Review",
      fields: [],
      component: () => (
        <WorkApplicationSectionTwo
          title="Check if your details are correct"
          stepId="2"
          getValues={getValues}
        />
      ),
    },
  ];

  return (
    <>
      <>
        <Banner title="Work With Us" />
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
                preFinalStepLabel="Submit"
                stepperUsedFor="workApplication"
                loading={loading}
                error={error}
              />
            </form>
            {errors.confirm?.message && (
              <p className="mt-2 text-sm text-red-500">
                Please fill in the highlighted fields
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
        title="Work With Us"
        description="At RCSC, we're committed to investing in our people. Work with us and discover new opportunities for growth and development."
      />
      {page}
    </MainLayout>
  );
};

export default WorkWithUsPage;
