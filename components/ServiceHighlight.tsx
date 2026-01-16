import clsx from "clsx";
import { StaticImageData } from "next/image";
import { useContext } from "react";
import { FadeIn } from "~/components/animations";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { ViewportContext } from "~/providers/ViewportProvider";
import { Icons8checkmark } from "~/src/components/icons";

type ServiceHighlightProps = {
  title: string;
  description: string | string[];
  subTitle?: string;
  bullets: string[];
  note?: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  imageSizes?: string;
  reverseOnMobile?: boolean;
  stickyTop?: number;
};

const ServiceHighlight: React.FC<ServiceHighlightProps> = ({
  title,
  description,
  subTitle,
  bullets,
  note,
  imageSrc,
  imageAlt,
  imageSizes,
  reverseOnMobile = false,
  stickyTop = 100,
}) => {
  const { isMobile } = useContext(ViewportContext);
  const descriptionArray = Array.isArray(description) ? description : [description];

  return (
    <FadeIn direction="up" duration={0.7}>
      <div
        className={clsx(
          "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
          isMobile ? "gap-3 p-3" : "gap-8 p-8",
          reverseOnMobile && isMobile && "flex-col-reverse"
        )}
      >
        <FadeIn direction="left" delay={0.2} duration={0.6}>
          <div className="relative top-0 md:sticky" style={{ top: isMobile ? undefined : `${stickyTop}px` }}>
            <ResponsiveImage src={imageSrc} sizes={imageSizes} alt={imageAlt} />
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.3} duration={0.6}>
          <div className="min-w-0 flex-1 text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">{title}</h3>
            {descriptionArray.map((paragraph, i) => (
              <p key={i} className="mb-4">
                {paragraph}
              </p>
            ))}

            {subTitle && <p className="mb-2 text-gray-800">{subTitle}</p>}
            <ul className="mb-4 mt-2 list-disc">
              {bullets.map((check, i) => (
                <li
                  key={i}
                  className={clsx(
                    "flex items-center",
                    isMobile ? "mb-4 text-sm" : "h-20",
                    isMobile && "min-h-[32px]"
                  )}
                >
                  <Icons8checkmark
                    className={clsx("-ml-1 flex-shrink-0", isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7")}
                  />
                  {check}
                </li>
              ))}
            </ul>
            {note && <p className="mb-2">{note}</p>}
          </div>
        </FadeIn>
      </div>
    </FadeIn>
  );
};

export default ServiceHighlight;
