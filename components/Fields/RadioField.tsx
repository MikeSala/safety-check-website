import clsx from "clsx";
import { FC } from "react";
import { useWatch } from "react-hook-form";
import {
  Control,
  UseFormRegisterReturn,
} from "react-hook-form/dist/types/form";
import ErrorMessage from "../ErrorMessage";

export type RadioOption = {
  id: string;
  label: string;
  details: string;
  value: string | number;
  subOptions?: RadioOption[];
};

type RadioFieldProps = {
  title: string;
  subtitle?: string;
  options: RadioOption[];
  formProps: UseFormRegisterReturn;
  description?: string;
  control: Control;
  error?: string;
  required?: boolean;
  className?: string;
};

type FieldProps = {
  option: RadioOption;
  formProps: UseFormRegisterReturn;
  type?: "option" | "subOption";
  disabled?: boolean;
};

const Field: FC<FieldProps> = ({
  option,
  formProps,
  type = "option",
  disabled,
}) => {
  const inputClasses = clsx(
    type === "option" ? "h-4 w-4" : "h-3 w-3",
    "border-gray-300 text-indigo-600 focus:ring-indigo-500"
  );

  const titleClasses = clsx(
    type === "option" ? "text-sm" : "text-xs",
    disabled ? "text-gray-400" : "text-gray-700",
    "font-medium"
  );

  const detailsClasses = clsx(
    type === "option" ? "text-sm" : "text-xs",
    disabled ? "text-gray-400" : "text-gray-500",
    "ml-2 whitespace-pre-line"
  );

  return (
    <>
      <div key={`${formProps.name}_${option.id}`} className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            id={`${formProps.name}_${option.id}`}
            type="radio"
            value={option.value}
            className={inputClasses}
            disabled={disabled}
            {...formProps}
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor={`${formProps.name}_${option.id}`}
            className={titleClasses}
          >
            {option.label}
          </label>
          <label
            htmlFor={`${formProps.name}_${option.id}`}
            className={detailsClasses}
          >
            {option.details}
          </label>
        </div>
      </div>
    </>
  );
};

const RadioField: FC<RadioFieldProps> = ({
  title,
  subtitle,
  description,
  options,
  formProps,
  control,
  error,
  required,
  className,
}: RadioFieldProps) => {
  const selectedValue = useWatch({
    control,
    name: formProps.name,
  });

  return (
    <fieldset className={className}>
      <div className="flex flex-col gap-1">
        <legend className="block text-sm font-medium text-gray-700">
          {title}
          {required && <span className="text-red-500"> *</span>}
        </legend>
        {description && <p className="text-sm text-gray-500">{description}</p>}
        <div
          className={clsx(
            "flex flex-col gap-4 rounded",
            error && "ring-1 ring-red-500"
          )}
        >
          {options.map((option) => (
            <div key={`${formProps.name}_${option.id}`}>
              <Field option={option} formProps={formProps} />

              {option.subOptions && (
                <div className="ml-10 mb-2 mt-2 flex flex-col gap-1">
                  {option.subOptions.map((subOption) => (
                    <Field
                      key={`${formProps.name}_${subOption.id}`}
                      option={subOption}
                      formProps={formProps}
                      type="subOption"
                      disabled={
                        selectedValue !== option.value &&
                        !option.subOptions?.some(
                          (subOption) => subOption.value === selectedValue
                        )
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    </fieldset>
  );
};

RadioField.displayName = "RadioField";

export default RadioField;
