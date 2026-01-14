import { useContext } from "react";
import { ViewportContext } from "~/providers/ViewportProvider";

type IconListItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: {
    container: "h-8 text-xs",
    icon: "mr-1 h-5 w-5",
  },
  md: {
    container: "h-10 text-sm md:h-20 md:text-base",
    icon: "mr-2 h-6 w-6 md:h-7 md:w-7",
  },
  lg: {
    container: "h-12 text-base md:h-24 md:text-lg",
    icon: "mr-2 h-7 w-7 md:h-8 md:w-8",
  },
};

export const IconListItem = ({
  icon: Icon,
  children,
  size = "md",
}: IconListItemProps) => {
  const { isMobile } = useContext(ViewportContext);
  const classes = sizeClasses[size];

  return (
    <li className={`mb-2 flex items-center ${classes.container}`}>
      <Icon className={`-ml-1 flex-shrink-0 ${classes.icon}`} />
      {children}
    </li>
  );
};
