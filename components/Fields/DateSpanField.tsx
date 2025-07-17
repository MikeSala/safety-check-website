import React from "react";
import { Control, RegisterOptions } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import { DateField } from "./DateField";

type DateSpanFieldProps = {
  label: string;
  name: string;
  control: Control;
  className?: string;
  rulesFrom?: RegisterOptions;
  rulesTo?: RegisterOptions;
  dateFormat?: string;
  error?: string;
  showTimeSelect?: boolean;
  showTimeSelectOnly?: boolean;
};

export const DateSpanField: React.FC<DateSpanFieldProps> = (props) => {
  const {
    className,
    label,
    name,
    control,
    rulesFrom,
    rulesTo,
    dateFormat,
    error,
    showTimeSelect,
    showTimeSelectOnly,
  } = props;
  return (
    <div className={`${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex flex-col items-center sm:flex-row">
        <DateField
          name={`${name}From`}
          label={label}
          control={control}
          rules={rulesFrom}
          dateFormat={dateFormat}
          showTimeSelect={showTimeSelect}
          showTimeSelectOnly={showTimeSelectOnly}
        />
        <div className="px-2">-</div>
        <DateField
          name={`${name}To`}
          label={label}
          control={control}
          rules={rulesTo}
          dateFormat={dateFormat}
          showTimeSelect={showTimeSelect}
          showTimeSelectOnly={showTimeSelectOnly}
        />
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};
