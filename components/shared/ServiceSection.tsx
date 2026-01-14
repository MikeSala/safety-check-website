import clsx from "clsx";
import { StaticImageData } from "next/image";
import { useContext } from "react";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { ViewportContext } from "~/providers/ViewportProvider";
import { StickyImageWrapper } from "./StickyImageWrapper";

type ServiceSectionProps = {
  title: string;
  paragraphs: string[];
  image: {
    src: StaticImageData | string;
    alt: string;
  };
  imagePosition?: "left" | "right";
  children?: React.ReactNode;
  className?: string;
  marginTop?: string;
};

export const ServiceSection = ({
  title,
  paragraphs,
  image,
  imagePosition = "left",
  children,
  className,
  marginTop,
}: ServiceSectionProps) => {
  const { isMobile } = useContext(ViewportContext);

  const imageElement = (
    <StickyImageWrapper src={image.src} alt={image.alt} />
  );

  const textElement = (
    <div className="text-gray-700">
      <h3 className="mb-4 text-xl font-bold h3">{title}</h3>
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-2">
          {p}
        </p>
      ))}
      {children}
    </div>
  );

  const isReversed = imagePosition === "right";

  return (
    <MarginLayout className={clsx("mx-auto max-w-7xl", marginTop, className)}>
      <div
        className={clsx(
          "flex flex-col rounded bg-white shadow-sm",
          isMobile ? "gap-3 p-3" : "gap-8 p-8 md:grid md:grid-cols-2",
          isReversed && "md:flex-col-reverse"
        )}
      >
        {isReversed ? (
          <>
            {textElement}
            {imageElement}
          </>
        ) : (
          <>
            {imageElement}
            {textElement}
          </>
        )}
      </div>
    </MarginLayout>
  );
};
