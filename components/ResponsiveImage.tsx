import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type ResponsiveImageProps = {
  className?: string;
  priority?: boolean; // set true for images "above the fold"
  src: StaticImageData | string;
  sizes?: React.ImgHTMLAttributes<HTMLImageElement>["sizes"];
};

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  className,
  priority,
  src,
  sizes = "100vw",
}) => {
  return (
    <div className={clsx("relative h-[300px] w-full sm:h-[400px]", className)}>
      <Image
        className="h-full w-full rounded-sm object-cover"
        src={src}
        sizes={sizes}
        alt=""
        priority={priority}
        fill
        draggable="false"
      />
    </div>
  );
};
