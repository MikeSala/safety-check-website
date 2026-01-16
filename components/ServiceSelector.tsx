import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { StaggerContainer, StaggerItem } from "~/components/animations";
import { SERVICE_CARDS, type ServiceCard } from "~/content/services";
import electricalServiceImage from "~/src/assets/images/elec_11.jpg";
import gasServiceImage from "~/src/assets/images/gas_10.jpg";
import smokeServiceImage from "~/src/assets/images/smoke_4.jpg";
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
  imageSrc: StaticImageData;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  iconLeftClass?: string;
  iconRightClass?: string;
}

type SelectorIconType = Exclude<ServiceCard["iconType"], "package">;

const serviceAssets: Record<
  SelectorIconType,
  {
    iconLeft: React.ElementType;
    imageSrc: StaticImageData;
  }
> = {
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
};

const selectorServices = SERVICE_CARDS.filter(
  (service): service is ServiceCard & { iconType: SelectorIconType } =>
    service.iconType !== "package"
);

const ServiceButton: React.FC<ServiceButtonProps> = ({
  iconLeft: IconLeftComponent,
  iconRight: IconRightComponent,
  label,
  href,
  imageSrc,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Link
        href={href}
        className={clsx(
          "group relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl text-white shadow-lg ring-1 ring-black/10 transition-shadow duration-500 hover:shadow-2xl hover:ring-sky-500/50",
          className
        )}
      >
        {/* Obraz z efektem zoom na hover */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={label}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:from-sky-900/90 group-hover:via-sky-900/30" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center px-4 pb-6">
          {/* Ikona i tekst */}
          <div className="flex items-center gap-3">
            <motion.span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
              <IconLeftComponent className="h-7 w-7 flex-shrink-0" />
            </motion.span>
            <span className="text-xl font-semibold tracking-wide">{label}</span>
          </div>

          {/* Strzałka z animacją */}
          <div className="mt-3">
            <IconRightComponent className="h-8 w-8 transition-transform duration-500 group-hover:translate-x-12" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServiceSelector: React.FC = () => {
  return (
    <StaggerContainer
      staggerDelay={0.15}
      className="mb-10 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-0"
    >
      {selectorServices.map((service) => {
        const assets = serviceAssets[service.iconType];
        return (
          <StaggerItem key={service.value} direction="up">
            <ServiceButton
              label={service.label}
              iconLeft={assets.iconLeft}
              iconRight={ArrowLongRightIcon}
              imageSrc={assets.imageSrc}
              href={service.href}
            />
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
};

export default ServiceSelector;
