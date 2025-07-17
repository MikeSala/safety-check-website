import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {
  IconElectrical,
  Icons8Fire,
  Icons8SmokeDetectorB,
} from "~/src/components/icons";

interface ServiceButtonProps {
  iconLeft: string | React.ElementType;
  iconRight: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  imageSrc: string;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  iconLeftClass?: string;
  iconRightClass?: string;
}

const services = [
  {
    label: "Electrical Safety Check",
    iconLeft: IconElectrical,
    iconRight: ArrowLongRightIcon,
    imageSrc: "/RCSC/elec_11.jpg",
    href: "/electrical-safety-check",
  },
  {
    label: "Gas Safety Check",
    iconLeft: Icons8Fire,
    iconRight: ArrowLongRightIcon,
    imageSrc: "/RCSC/gas_10.jpg",
    href: "/gas-safety-check",
  },
  {
    label: "Smoke Alarm Check",
    iconLeft: Icons8SmokeDetectorB,
    iconRight: ArrowLongRightIcon,
    imageSrc: "/RCSC/smoke_4.jpg",
    href: "/smoke-alarm-safety-check",
  },
];

const ServiceButton: React.FC<ServiceButtonProps> = ({
  iconLeft: IconLeftComponent,
  iconRight: IconRightComponent,
  label,
  href,
  imageSrc,
  className,
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        "hover:scale-10 group relative mt-10 flex transform items-center justify-center overflow-hidden rounded text-white transition-transform hover:scale-105 hover:shadow-md",
        className
      )}
    >
      <div className="relative z-10">
        <Image src={imageSrc} alt={label} width={720} height={640} />
      </div>
      <div className="h-31 absolute bottom-0 z-20 flex w-full flex-col items-center justify-center -space-y-1 bg-black bg-opacity-40">
        <div className="mt-4 flex items-center space-x-2">
          <IconLeftComponent className="mx-2 h-9 w-9 flex-shrink-0" />
          <span className="text-2xl h4">{label}</span>
        </div>

        <IconRightComponent className="bottom-2 h-9 w-9 flex-shrink-0 transition-transform duration-500 group-hover:translate-x-60" />
        <span className="duration-400 absolute bottom-2 whitespace-nowrap opacity-0 transition-opacity h4 group-hover:opacity-100">
          Learn more
        </span>
      </div>
    </Link>
  );
};

const ServiceSelector: React.FC = () => {
  return (
    <div className="xs:grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div key={index} className="min-w-0 flex-1 p-4">
          <ServiceButton
            className="shadow-sm"
            label={service.label}
            iconLeft={service.iconLeft}
            iconRight={service.iconRight}
            imageSrc={service.imageSrc}
            href={service.href}
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceSelector;
