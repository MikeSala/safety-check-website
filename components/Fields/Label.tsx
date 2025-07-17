import React from "react";

type LabelProps = {
  id: string;
  label: string;
  required?: boolean;
};

export const Label: React.FC<LabelProps> = ({ id, label, required }) => {
  return (
    <label htmlFor={id} className="text-md block font-medium text-gray-800">
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
  );
};
