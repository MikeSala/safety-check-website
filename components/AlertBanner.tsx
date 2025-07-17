// Master version is in cindirect-app
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import React from "react";

type AlertBannerProps = {
  className?: string;
  textClassName?: string;
  alertType: "info" | "warning" | "error" | "success";
  children?: React.ReactNode;
  actionButtons?: Array<{ label: string; onClick: () => void }>;
};

export const AlertBanner: React.FC<AlertBannerProps> = ({
  className,
  textClassName,
  alertType,
  children,
}) => {
  const alertBgColor = {
    info: "bg-blue-700",
    warning: "bg-yellow-700",
    error: "bg-red-700",
    success: "bg-green-700",
  }[alertType];

  const AlertIcon = {
    info: InformationCircleIcon,
    warning: ExclamationCircleIcon,
    error: ExclamationTriangleIcon,
    success: CheckCircleIcon,
  }[alertType];

  return (
    <div
      className={clsx(
        "relative flex items-center justify-between gap-2 p-3 shadow-md",
        `${alertBgColor}`,
        className
      )}
    >
      <div className="flex items-center gap-2">
        <AlertIcon className="inline-block h-5 w-5 min-w-[20px] text-white" />
        <p className={clsx("text-sm text-white", textClassName)}>{children}</p>
      </div>
    </div>
  );
};
