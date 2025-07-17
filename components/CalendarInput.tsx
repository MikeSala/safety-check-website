import { forwardRef } from "react";

interface CalendarInputProps {
  className: string;
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
  error?: string;
  disabled?: boolean;
  id: string;
}

const CalendarInput: React.FC<CalendarInputProps> = (
  { className, value, onClick, onChange, error, disabled, id },
  ref
) => {
  return (
    <input
      className={`block w-full rounded-md border py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${className} ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      id={id}
      type="text"
      value={value}
      ref={ref}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      onClick={onClick}
      onKeyDown={(e) => e.preventDefault()}
    />
  );
};

export default forwardRef(
  CalendarInput as React.ForwardRefRenderFunction<
    HTMLInputElement,
    CalendarInputProps
  >
);
