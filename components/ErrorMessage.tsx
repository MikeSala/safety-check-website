import React from "react";

type ErrorMessageProps = {
  children: React.ReactNode;
  id?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, id }) => {
  return (
    <div id={id && `${id}-error`} className="text-md text-red-600">
      {children}
    </div>
  );
};

export default ErrorMessage;
