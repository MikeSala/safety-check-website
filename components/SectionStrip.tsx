import clsx from "clsx";

type SectionStripProps = {
  title: string;
  bgClassName?: string;
  paddingClassName?: string;
  titleClassName?: string;
  className?: string;
};

const SectionStrip: React.FC<SectionStripProps> = ({
  title,
  bgClassName = "bg-gray-200",
  paddingClassName = "px-4 py-12 sm:py-16 lg:px-8",
  titleClassName = "font-semibold h2",
  className,
}) => {
  return (
    <article
      className={clsx(
        "flex h-[100px] flex-col items-center justify-center gap-4 text-center text-2xl h3",
        bgClassName ?? BG.light,
        paddingClassName,
        className
      )}
    >
      <h2 className={clsx(titleClassName)}>{title}</h2>
    </article>
  );
};

export default SectionStrip;
import { BG } from "~/components/theme/colors";
