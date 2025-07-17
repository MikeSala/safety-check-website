import { useMemo } from "react";
import { FieldValues, UseFormGetValues } from "react-hook-form";
import StepLayout from "~/components/layouts/StepLayout";
import { WorkFormValues } from "~/types/forms";

type WorkFormSectionTwoProps = {
  title: string;
  stepId: string;
  getValues: UseFormGetValues<FieldValues>;
};

const items: { title: string; key: keyof WorkFormValues }[] = [
  {
    title: "First name",
    key: "firstName",
  },
  {
    title: "Last name",
    key: "lastName",
  },
  {
    title: "Phone number",
    key: "phoneNumber",
  },
  {
    title: "Email address",
    key: "emailAddress",
  },
  {
    title: "Uploaded CV",
    key: "fileName",
  },
];

const WorkApplicationSectionTwo: React.FC<WorkFormSectionTwoProps> = ({
  title,
  stepId,
  getValues,
}) => {
  const formStep = `step-${stepId}`;
  const values = useMemo(() => getValues(), [getValues]) as WorkFormValues;

  return (
    <StepLayout id={formStep} title={title}>
      <dl className="grid gap-6 text-sm sm:grid-cols-2">
        {items.map((item) => {
          return (
            <div key={item.title} className="flex flex-col gap-1">
              <dt className="font-medium text-gray-900">{item.title}</dt>
              <dd className="text-gray-700">{values[item.key]}</dd>
            </div>
          );
        })}
      </dl>
    </StepLayout>
  );
};

export default WorkApplicationSectionTwo;
