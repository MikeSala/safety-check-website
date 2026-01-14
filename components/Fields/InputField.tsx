import clsx from "clsx";
import React, { HTMLInputTypeAttribute, LegacyRef, useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";
import ErrorMessage from "~/components/ErrorMessage";
import { Label } from "~/components/Fields/Label";

type InputProps = {
  label: string;
  formProps: UseFormRegisterReturn;
  error?: string;
  value?: string;
  className?: string;
  autoFocus?: boolean;
  autoComplete?: string; // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

const InputFieldComponent = React.forwardRef(
  (
    {
      label,
      formProps,
      error,
      value,
      className,
      autoFocus,
      autoComplete,
      type = "text",
      placeholder,
      required,
      disabled,
    }: InputProps,
    _ref: LegacyRef<HTMLInputElement>
  ) => {
    const id = useId();

    return (
      <div className={clsx("flex flex-col gap-1", className)}>
        <Label id={id} label={label} required={required} />
        <input
          id={id}
          className={clsx(
            "bg-secondary-800 block w-full rounded-md border py-2 px-3 placeholder-gray-400 shadow-sm sm:text-sm",
            error ? "border-red-500" : "border-gray-300"
          )}
          defaultValue={value}
          aria-invalid={Boolean(error)}
          aria-errormessage={`${id}-error`}
          autoFocus={autoFocus}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          {...formProps}
        />
        {error && <ErrorMessage id={id}>{error}</ErrorMessage>}
      </div>
    );
  }
);

InputFieldComponent.displayName = "InputField";

const InputField = InputFieldComponent;

export default InputField;
