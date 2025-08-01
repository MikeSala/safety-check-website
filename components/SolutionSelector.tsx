import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import React, { useContext } from "react";
import { ViewportContext } from "~/providers/ViewportProvider";
import {
  Icons8Apartment,
  Icons8Building,
  Icons8CityBlock,
  Icons8CountryHouse,
  Icons8Residence,
} from "~/src/components/icons";

interface SquareButtonProps {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  className?: string;
}

const buttonsData = [
  {
    icon: Icons8Apartment,
    label: "Property Managers",
    href: "/solutions-for-property-managers",
  },
  {
    icon: Icons8Residence,
    label: "Landlords",
    href: "/solutions-for-landlords",
  },
  {
    icon: Icons8Building,
    label: "Building Managers",
    href: "/solutions-for-building-managers",
  },
  {
    icon: Icons8CountryHouse,
    label: "Homeowners",
    href: "/solutions-for-homeowners",
  },
  {
    icon: Icons8CityBlock,
    label: "Real Estate",
    href: "/solutions-for-real-estate",
  },
];

const SquareButton: React.FC<SquareButtonProps> = ({
  icon: IconComponent,
  label,
  href,
  className,
}) => {
  const { isMobile } = useContext(ViewportContext);
  return (
    <Link
      href={href}
      className={clsx(
        "group relative flex items-center justify-center overflow-hidden rounded bg-white text-primary-900 shadow-sm transition-transform hover:scale-105 hover:border-primary-600 hover:shadow-md",
        isMobile ? "h-36 w-44" : "h-48 w-56",
        className
      )}
    >
      <IconComponent
        className={clsx(
          "absolute top-4 left-1/2  -translate-x-1/2 transform items-center justify-center",
          isMobile ? "h-10 w-10" : "h-12 w-12",
          className
        )}
      />
      <div className="absolute mt-6 flex flex-col items-center justify-center">
        <span className={isMobile ? "text-sm" : "text-md"}>{label}</span>
      </div>
      <div className="absolute bottom-4 left-1/4 flex -translate-x-1/2 transform items-center space-x-2 pb-2 sm:pb-4">
        <span
          className={clsx(
            "absolute whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            isMobile ? "text-sm" : "text-md",
            className
          )}
        >
          Learn more
        </span>
        <ArrowLongRightIcon
          className={clsx(
            "absolute left-8 justify-center transition-transform duration-500",
            isMobile
              ? "h-5 w-5 group-hover:translate-x-14"
              : "h-6 w-6 group-hover:translate-x-20",
            className
          )}
        />
      </div>
    </Link>
  );
};

const SolutionSelector: React.FC = () => {
  return (
    <div className="md:justify-content-center grid w-full grid-cols-2 justify-items-center gap-8 text-center xl:grid-cols-5">
      {buttonsData.map((button) => (
        <SquareButton
          key={button.href}
          icon={button.icon}
          label={button.label}
          href={button.href}
        />
      ))}
    </div>
  );
};

export default SolutionSelector;
