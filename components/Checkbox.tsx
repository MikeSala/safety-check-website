import clsx from "clsx";
import React from "react";

type CheckboxProps = {
  id: string;
  name: string;
  value: string;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
  className?: string;
};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { id, name, value, handleCheck, isChecked, className } = props;
  return (
    <input
      id={id}
      name={name}
      value={value}
      type="checkbox"
      onChange={handleCheck}
      checked={isChecked}
      className={clsx(
        "border-gray-300 bg-black text-black accent-black hover:cursor-pointer hover:accent-gray-500 focus:ring-black",
        className
      )}
    />
  );
};

export default Checkbox;
