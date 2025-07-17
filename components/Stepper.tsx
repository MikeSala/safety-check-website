import { ApolloError } from "@apollo/client";
import { StepButton, StepContent, StepLabel } from "@mui/material";
import Step from "@mui/material/Step";
import MUIStepper, { StepperProps } from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import { FieldErrorsImpl, FieldValues, UseFormTrigger } from "react-hook-form";
import { ViewportContext } from "../providers/ViewportProvider";
import { StepSection } from "./StepSection";

export enum USED_FOR {
  Booking = "booking",
  WorkApplication = "workApplication",
}

type LabelProps = {
  optional?: any;
};

export type StepProps = {
  label: string;
  fields: string[];
  component: () => JSX.Element;
  buttonsDisabled?: boolean;
};

// todo replace custom definitions with default StepperProps defs. write better typesafe code. ex 'activeStep'
type CustomStepperProps = {
  steps: StepProps[];
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  activeStep: number;
  loading: boolean;
  error?: ApolloError;
  preFinalStepLabel?: string;
  hasExtraStepOutside?: boolean;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  triggerForm: UseFormTrigger<FieldValues>;
  stepperUsedFor: "booking" | "workApplication";
} & StepperProps;

export const Stepper = ({
  steps,
  activeStep,
  setActiveStep,
  triggerForm,
  preFinalStepLabel,
  hasExtraStepOutside,
  stepperUsedFor,
  loading,
  error,
  errors,
  nonLinear,
}: CustomStepperProps) => {
  const { isMobile } = useContext(ViewportContext);
  const [verifyingNext, setVerifyingNext] = useState(false);
  const isStepOptional = (step: number) => {
    return false;
  };

  const handleNext = async () => {
    if (steps[activeStep]?.fields) {
      await triggerForm(steps[activeStep].fields);
      if (Object.keys(errors).length) {
        return;
      }
    }
    setVerifyingNext(true);
  };

  // Verify next step and continue if no errors
  useEffect(() => {
    if (!verifyingNext) return;
    if (!Object.keys(errors).length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    setVerifyingNext(false);
  }, [verifyingNext]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <MUIStepper
        activeStep={activeStep}
        orientation={isMobile ? "vertical" : "horizontal"}
        nonLinear={nonLinear}
      >
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: LabelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          return (
            <Step
              key={step.label}
              sx={{
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "black", // circle color (COMPLETED)
                },
                "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                  {
                    color: "grey.500", // Just text label (COMPLETED)
                  },
                "& .MuiStepLabel-root .Mui-active": {
                  color: "black", // circle color (ACTIVE)
                },
                "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                  {
                    color: "common.white", // Just text label (ACTIVE)
                  },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  fill: "common.white", // circle's number (ACTIVE)
                },
              }}
              {...stepProps}
            >
              {index >= activeStep ? (
                <StepLabel {...labelProps}>{step.label}</StepLabel>
              ) : (
                <StepButton
                  {...labelProps}
                  onClick={() => setActiveStep(index)}
                >
                  {step.label}
                </StepButton>
              )}

              {isMobile && (
                <StepContent>
                  <StepSection
                    steps={steps}
                    activeStep={activeStep}
                    onBack={handleBack}
                    onNext={handleNext}
                    preFinalStepLabel={preFinalStepLabel}
                    hasExtraStepOutside={hasExtraStepOutside}
                    stepperUsedFor={stepperUsedFor}
                    loading={loading}
                    error={error}
                  />
                </StepContent>
              )}
            </Step>
          );
        })}
      </MUIStepper>

      {!isMobile && (
        <StepSection
          steps={steps}
          activeStep={activeStep}
          onBack={handleBack}
          onNext={handleNext}
          preFinalStepLabel={preFinalStepLabel}
          hasExtraStepOutside={hasExtraStepOutside}
          stepperUsedFor={stepperUsedFor}
          loading={loading}
          error={error}
        />
      )}
    </>
  );
};
