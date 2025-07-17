import clsx from "clsx";
import { forwardRef, useId } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import CalendarInput from "~/components/CalendarInput";
import ErrorMessage from "~/components/ErrorMessage";
import { Label } from "~/components/Fields/Label";

type DateFieldProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  label: string;
  error?: string;
  timeIntervals?: number;
  rules?: RegisterOptions<T>;
  dateFormat?: string;
  showTimeSelect?: boolean;
  showTimeSelectOnly?: boolean;
  required?: boolean;
  className?: string;
  disabled?: boolean;
};

export const DateField = <T extends FieldValues>({
  label,
  name,
  control,
  error,
  timeIntervals = 15,
  rules,
  dateFormat,
  showTimeSelect,
  showTimeSelectOnly,
  required,
  className,
  disabled,
}: DateFieldProps<T>) => {
  const id = useId();

  const CustomInput = forwardRef(function LocalCustomInput(props: any, ref) {
    return <CalendarInput {...props} id={id} ref={ref} />;
  });

  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      <Label id={id} label={label} required={required} />
      <div>
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { onChange, value } }) => (
            <ReactDatePicker
              dateFormat={dateFormat ?? "dd/MM/yyyy"}
              showTimeSelect={showTimeSelect}
              showTimeSelectOnly={showTimeSelectOnly}
              timeIntervals={timeIntervals}
              onChange={onChange}
              disabled={disabled}
              selected={value as Date}
              enableTabLoop={false}
              customInput={<CustomInput error={error} />}
            />
          )}
        />
      </div>
      {error && <ErrorMessage id={id}>{error}</ErrorMessage>}
    </div>
  );
};
