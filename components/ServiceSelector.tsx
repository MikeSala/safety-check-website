import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import electricalServiceImage from "~/src/assets/images/elec_11.jpg";
import gasServiceImage from "~/src/assets/images/gas_10.jpg";
import smokeServiceImage from "~/src/assets/images/smoke_4.jpg";
import {
  IconElectrical,
  Icons8Fire,
  Icons8SmokeDetectorB,
} from "~/src/components/icons";
import { SERVICE_CARDS } from "~/content/services";

interface ServiceButtonProps {
  iconLeft: string | React.ElementType;
  iconRight: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  imageSrc: StaticImageData;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  iconLeftClass?: string;
  iconRightClass?: string;
}

const serviceAssets = {
  electrical: {
    iconLeft: IconElectrical,
    imageSrc: electricalServiceImage,
  },
  gas: {
    iconLeft: Icons8Fire,
    imageSrc: gasServiceImage,
  },
  smoke: {
    iconLeft: Icons8SmokeDetectorB,
    imageSrc: smokeServiceImage,
  },
} as const;

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
        "group relative inset-0 flex transform items-center justify-center overflow-hidden rounded border-2 border-gray-400  text-white transition-transform hover:scale-105 hover:border-sky-800 hover:shadow-md",
        className
      )}
    >
      <div className="relative z-10">
        <Image src={imageSrc} alt={label} width={720} height={640} />
      </div>
      <div className="duration-600 absolute bottom-0 z-20 flex h-32 w-full flex-col items-center justify-center bg-gradient-to-t from-black/100 to-transparent transition-all group-hover:from-sky-800/100 group-hover:to-transparent">
        <div className="mt-4 flex items-center space-x-2">
          <IconLeftComponent className="mx-2 h-9 w-9 flex-shrink-0" />
          <span className="text-xl h5">{label}</span>
        </div>

        <IconRightComponent className="bottom-2 h-9 w-9 flex-shrink-0 transition-transform duration-500 group-hover:translate-x-20" />
        <span className="duration-400 absolute bottom-2 whitespace-nowrap opacity-0 transition-opacity h5 group-hover:opacity-100"></span>
      </div>
    </Link>
  );
};

const ServiceSelector: React.FC = () => {
  return (
    <div className="xs:grid-cols-1 mb-10 grid md:grid-cols-2 lg:grid-cols-3">
      {SERVICE_CARDS.filter((service) => serviceAssets[service.iconType]).map(
        (service, index) => {
          const assets = serviceAssets[service.iconType];
          return (
        <div key={index} className="min-w-0 flex-1 p-4">
          <ServiceButton
            className="shadow-sm"
            label={service.label}
            iconLeft={assets.iconLeft}
            iconRight={ArrowLongRightIcon}
            imageSrc={assets.imageSrc}
            href={service.href}
          />
        </div>
          );
        }
      )}
    </div>
  );
};

export default ServiceSelector;
