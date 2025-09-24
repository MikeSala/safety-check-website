import clsx from "clsx";
import type { StaticImageData } from "next/image";
import { ResponsiveImage } from "~/components/ResponsiveImage";

export type ServiceBannerProps = {
  imageFirst?: boolean;
  imageUrl: StaticImageData | string;
  serviceOfferings: string[];
  title: string;
  priority?: boolean;
};

export const ServiceBanner: React.FC<ServiceBannerProps> = ({
  imageFirst,
  imageUrl,
  serviceOfferings,
  title,
  priority,
}) => {
  return (
    <div className="flex flex-wrap bg-neutral-100 lg:flex-nowrap">
      <div
        className={clsx(
          "flex flex-col justify-center gap-4 px-4 py-8 sm:px-6 sm:py-12 lg:min-h-[20rem] lg:w-1/2 lg:px-16",
          imageFirst ? "order-2" : "lg:order-1"
        )}
      >
        <h3 className="h3">{title}</h3>
        <ul className="list-disc pl-6">
          {serviceOfferings.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
      <ResponsiveImage
        className={clsx(
          "lg:h-auto lg:w-1/2",
          imageFirst ? "order-2 lg:order-1" : "order-1"
        )}
        src={imageUrl}
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
};
