import { StaticImageData } from "next/image";
import { ResponsiveImage } from "~/components/ResponsiveImage";

type StickyImageWrapperProps = {
  src: StaticImageData | string;
  alt: string;
  topOffset?: string;
  height?: string;
};

export const StickyImageWrapper = ({
  src,
  alt,
  topOffset = "100px",
  height = "400px",
}: StickyImageWrapperProps) => {
  return (
    <div
      className="relative top-0 flex flex-col md:sticky"
      style={{
        top: topOffset,
        height: height,
      }}
    >
      <ResponsiveImage src={src} alt={alt} />
    </div>
  );
};
