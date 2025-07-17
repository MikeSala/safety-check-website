import clsx from "clsx";
import React, { LegacyRef, useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";
import { Label } from "~/components/Fields/Label";
import ErrorMessage from "../ErrorMessage";

type Option = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  options: Option[];
  formProps: UseFormRegisterReturn;
  autoComplete?: string;
  error?: string;
  required?: boolean;
  className?: string;
};

const SelectField = React.forwardRef(
  (
    {
      error,
      label,
      options,
      formProps,
      autoComplete,
      required,
      className,
    }: SelectFieldProps,
    ref: LegacyRef<HTMLSelectElement>
  ) => {
    SelectField.displayName = "SelectField";

    const id = useId();

    return (
      <div className={clsx("flex flex-col gap-1", className)}>
        <Label id={id} label={label} required={required} />
        <select
          id={id}
          autoComplete={autoComplete}
          className={`block w-full rounded-md border bg-white py-2 px-3 shadow-sm invalid:text-gray-400 sm:text-sm ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          required={required}
          {...formProps}
        >
          <option value="">Please Select</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <ErrorMessage id={id}>{error}</ErrorMessage>}
      </div>
    );
  }
);

export default SelectField;
