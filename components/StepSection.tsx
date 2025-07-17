import { ApolloError } from "@apollo/client";
import { Typography } from "@mui/material";
import Button, { ButtonColor, ButtonProps } from "~/components/Button";
import { LoadingSpinner } from "./Loaders/LoadingSpinner";
import { StepProps, USED_FOR } from "./Stepper";
import WorkApplicationLastStepMessage from "./WorkWithUs/WorkApplicationLastStepMessage";

type StepSectionProps = {
  steps: StepProps[];
  activeStep: number;
  onBack: () => void;
  onNext: () => void;
  preFinalStepLabel?: string;
  loading: boolean;
  error?: ApolloError;
  showNext?: boolean;
  hasExtraStepOutside?: boolean;
  stepperUsedFor: "booking" | "workApplication";
};

export const StepSection = ({
  steps,
  activeStep,
  onBack,
  onNext,
  preFinalStepLabel,
  hasExtraStepOutside,
  stepperUsedFor,
  loading,
  error,
}: StepSectionProps) => {
  const finalStep = hasExtraStepOutside ? steps.length - 2 : steps.length - 1;

  function rightButtonProps(): ButtonProps {
    return activeStep === finalStep
      ? {
          type: "submit",
          color: ButtonColor.Primary,
        }
      : {
          onClick: onNext,
        };
  }

  return (
    <>
      {activeStep === steps.length ? (
        <>
          {stepperUsedFor === USED_FOR.WorkApplication ? (
            loading ? (
              <LoadingSpinner className="py-36 px-24" />
            ) : (
              <WorkApplicationLastStepMessage error={error} />
            )
          ) : (
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          )}
        </>
      ) : (
        <>
          {steps[activeStep]?.component()}
          {!steps[activeStep].buttonsDisabled && (
            <div className="mt-6 flex justify-between md:mt-8">
              <Button
                disabled={activeStep === 0}
                onClick={onBack}
                color={ButtonColor.Neutral}
                size="lg"
              >
                Back
              </Button>
              <Button {...rightButtonProps()} loading={loading} size="lg">
                {activeStep === finalStep ? preFinalStepLabel : "Next"}
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};
