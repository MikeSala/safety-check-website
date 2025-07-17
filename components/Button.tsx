import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";
import { RequireOnlyOne } from "~/types/optional";
import { LoadingSpinner } from "./Loaders/LoadingSpinner";

type Props = {
  color?: ButtonColor;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  outline?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
  title?: string;
};

// requires one of the following:
// * `onClick` for same page interactivity
// * `href` for a button styled internal Link
// * `type` for form submit / reset
export type ButtonProps = RequireOnlyOne<Props, "onClick" | "href" | "type">;

export enum ButtonColor {
  Primary,
  Secondary,
  Danger,
  Error,
  Success,
  Neutral,
}

const solidColor: Record<ButtonColor, string> = {
  [ButtonColor.Primary]:
    "bg-primary-800 hover:bg-primary-700 transition duration-300 transition text-white",
  [ButtonColor.Secondary]:
    "bg-primary-200 hover:bg-primary-300 transition duration-300 text-primary-800",
  [ButtonColor.Danger]:
    "bg-red-800 hover:bg-red-700 transition duration-300 transition text-white",
  [ButtonColor.Error]:
    "bg-red-600 hover:bg-red-700 transition duration-300 text-white",
  [ButtonColor.Success]:
    "bg-green-600 hover:bg-green-700 transition duration-300 text-white",
  [ButtonColor.Neutral]:
    "bg-neutral-200 hover:bg-neutral-300 transition duration-300 text-gray-700",
};

const outlineColor: Record<ButtonColor, string> = {
  [ButtonColor.Primary]:
    "border-primary-600 text-primary-700 hover:bg-primary-600 transition duration-300 focus:bg-primary-600 hover:text-white focus:text-white",
  [ButtonColor.Secondary]:
    "border-2 transition duration-300 border-primary-100 text-primary-700",
  [ButtonColor.Danger]:
    "border-red-600 text-red-700 hover:bg-red-600 transition duration-300 focus:bg-red-600 hover:text-white focus:text-white",
  [ButtonColor.Error]:
    "border-2 transition duration-300 border-red-600 text-red-600",
  [ButtonColor.Success]:
    "border-2 transition duration-300 border-green-600 text-green-600",
  [ButtonColor.Neutral]:
    "border-2 border-neutral-200 transition duration-300 text-gray-700 hover:bg-gray-200 ",
};

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

const buttonSize: Record<ButtonSize, string> = {
  xs: "px-2.5 py-1.5 text-xs",
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-4 py-2",
  xl: "px-6 py-3",
};

const Button: React.FC<ButtonProps> = ({
  color = ButtonColor.Secondary,
  size = "md",
  type = "button",
  outline,
  onClick,
  href,
  disabled,
  loading,
  className,
  children,
  title,
}) => {
  const classes = clsx(
    "flex gap-2 items-center justify-center rounded-md font-medium shadow-sm focus-visible:ring-offset-2",
    outline
      ? "border-2 transition-colors duration-200 " + outlineColor[color]
      : solidColor[color],
    buttonSize[size],
    disabled && "opacity-60 pointer-events-none",
    className
  );

  return href ? (
    <Link className={classes} href={href} title={title}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      title={title}
    >
      {loading ? <LoadingSpinner svgClassName={"!h-4 !w-6"} /> : children}
    </button>
  );
};

export default Button;
