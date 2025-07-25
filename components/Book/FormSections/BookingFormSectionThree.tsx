import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import {
  CONFIRM_CHECKBOX_OPTIONS,
  CheckboxOptions,
} from "~/components/Book/bookingFormVariables";
import CheckboxField from "~/components/Fields/CheckboxField";
import { HorizontalRule } from "~/components/HorizontalRule";
import InclusionsExclusionForBooking from "~/components/InclusionsExclusionForBooking";
import { ModalLayout } from "~/components/layouts/ModalLayout";
import StepLayout from "~/components/layouts/StepLayout";

type BookingFormSectionThreeProps = {
  stepId: string;
  title: string;
  register: UseFormRegister<FieldValues>;
  errors: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
};

const BookingFormSectionThree: React.FC<BookingFormSectionThreeProps> = ({
  stepId,
  title,
  errors,
  register,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const formStep = `step-${stepId}`;

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const renderCheckboxOptions = (checkboxOptions: CheckboxOptions) => {
    return (
      <div className="mb-1">
        <h5 className="font-bold h5">{checkboxOptions.title}</h5>
        {checkboxOptions.content && (
          <p className="text-sm text-gray-800">{checkboxOptions.content}</p>
        )}
        {checkboxOptions.list && (
          <ul className="list-disc pl-4 text-sm text-gray-800">
            {checkboxOptions.list.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <StepLayout id={formStep} title={title}>
      {CONFIRM_CHECKBOX_OPTIONS.map(renderCheckboxOptions)}

      <p className="text-sm text-gray-800">
        If you wish to know more about the inclusions/exclusions of our
        services, click{" "}
        <button
          className="mb-1 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
          type="button"
          onClick={handleOpenModal}
        >
          here
        </button>
        .
      </p>
      <p className="mb-2 text-sm font-medium text-gray-800">
        {" "}
        I confirm that I have provided my correct full legal name and accurate
        contact information.
      </p>
      <HorizontalRule className="mb-2" />
      <CheckboxField
        label="I have read and accepted all the terms and conditions."
        error={errors.confirm?.message}
        formProps={register("confirm", {
          validate: (v) =>
            v ? undefined : "Please confirm the terms and conditions",
        })}
      />
      <ModalLayout
        title="Inclusions and Exclusions"
        modalVisible={isModalVisible}
        onClose={handleCloseModal}
      >
        <InclusionsExclusionForBooking />
      </ModalLayout>
    </StepLayout>
  );
};

export default BookingFormSectionThree;
