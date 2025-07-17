import clsx from "clsx";
import React, { useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Label } from "~/components/Fields/Label";
import ErrorMessage from "../ErrorMessage";

type TextareaFieldProps = {
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes
  autoComplete?: "on" | "off";
  autoFocus?: boolean;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  spellCheck?: boolean;
  // non attribute props
  error?: string;
  formProps: UseFormRegisterReturn;
  label: string;
  value?: string;
  className?: string;
};

export const TextareaField: React.FC<TextareaFieldProps> = ({
  autoComplete,
  autoFocus,
  disabled,
  maxLength,
  minLength,
  placeholder,
  required,
  rows = 6,
  spellCheck,
  error,
  formProps,
  label,
  value,
  className,
}) => {
  const id = useId();

  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      <Label id={id} label={label} required={required} />
      <textarea
        id={id}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        rows={rows}
        spellCheck={spellCheck}
        defaultValue={value}
        className={clsx(
          "bg-secondary-800 block w-full rounded-md border py-2 px-3 placeholder-gray-400 shadow-sm sm:text-sm",
          error ? "border-red-500" : "border-gray-300"
        )}
        {...formProps}
      />
      {error && <ErrorMessage id={id}>{error}</ErrorMessage>}
    </div>
  );
};
