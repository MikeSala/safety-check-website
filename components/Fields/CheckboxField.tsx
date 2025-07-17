import clsx from "clsx";
import React, { LegacyRef, useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";
import { Label } from "~/components/Fields/Label";
import ErrorMessage from "../ErrorMessage";

type CheckboxFieldProps = {
  formProps: UseFormRegisterReturn;
  label?: string;
  description?: string;
  error?: string;
  className?: string;
};

const CheckboxField = React.forwardRef(
  (props: CheckboxFieldProps, ref: LegacyRef<HTMLInputElement>) => {
    const { formProps, label, description, error, className } = props;
    CheckboxField.displayName = "CheckboxField";
    const id = useId();

    return (
      <>
        <div
          className={clsx(
            "flex items-start rounded",
            error && "ring-1 ring-red-500",
            className
          )}
        >
          <div className="flex h-5 items-center">
            <input
              id={id}
              type="checkbox"
              className={`h-6 w-6 rounded text-indigo-600 focus:ring-indigo-500 `}
              {...formProps}
            />
          </div>
          <div className="ml-2">
            {label && <Label id={id} label={label} />}
            {description && (
              <p className="text-md text-gray-800">{description}</p>
            )}
          </div>
        </div>
        {error && <ErrorMessage id={id}>{error}</ErrorMessage>}
      </>
    );
  }
);

export default CheckboxField;
