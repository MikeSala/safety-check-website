import { FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  label?: string;
  className?: string;
};

export const HorizontalRule: FC<Props> = (props) => {
  return (
    <div
      className={twMerge("relative flex items-center", props.className)}
      role="separator"
    >
      <div className="border-secondary-50 flex-grow border-t" />
      {props.label && (
        <>
          <span className="text-dark mx-4 flex-shrink">{props.label}</span>
          <div className="border-secondary-50 flex-grow border-t" />
        </>
      )}
    </div>
  );
};
