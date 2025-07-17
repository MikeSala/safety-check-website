import clsx from "clsx";
import { useContext } from "react";
import { ViewportContext } from "~/providers/ViewportProvider";

type Size = "sm" | "md" | "lg";

interface Props {
  children: React.ReactNode;
  className?: string;
  verticalPadding?: Size;
  horizontalPadding?: Size;
}

const paddingMap: Record<Size, { vertical: string; horizontal: string }> = {
  sm: { vertical: "py-4", horizontal: "px-1 sm:px-4" },
  md: { vertical: "py-8 sm:py-24", horizontal: "px-4 sm:px-6 lg:px-8" },
  lg: {
    vertical: "py-12 sm:py-32",
    horizontal: "px-6 sm:px-8 lg:px-12 xl:px-16",
  },
};

export const MarginLayout: React.FC<Props> = ({
  children,
  className,
  verticalPadding = "md",
  horizontalPadding = "md",
}) => {
  const { isMobile } = useContext(ViewportContext);

  const effectiveVerticalPadding = isMobile ? "lg" : verticalPadding;
  const effectiveHorizontalPadding = isMobile ? "sm" : horizontalPadding;

  const resolvedVerticalPadding = paddingMap[effectiveVerticalPadding].vertical;
  const resolvedHorizontalPadding =
    paddingMap[effectiveHorizontalPadding].horizontal;

  return (
    <div
      className={clsx(
        "mx-auto max-w-7xl flex-grow",
        resolvedVerticalPadding,
        resolvedHorizontalPadding,
        className
      )}
    >
      {children}
    </div>
  );
};
