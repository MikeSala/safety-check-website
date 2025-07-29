import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { Icons8ArrowRight, Icons8checkmark } from "~/src/components/icons";

interface InspectionAreasProps {
  className?: string;
  title?: string;
  areas?: string[];
  note?: string;
  discountText?: string;
  ctaLabel: string;
  ctaHref: string;
}

export const InspectionAreas: FC<InspectionAreasProps> = ({
  className,
  title = "Nasz zespół czeka na zlecenia w",
  areas = ["Kraków", "Warszawa", "Poznań", "Wrocław"],
  note,
  discountText = "taniej w wypadku większej liczby nieruchomości",
  ctaLabel,
  ctaHref,
}) => {
  return (
    <div className={clsx("text-gray-700", className)}>
      <p className="mb-2">{title}</p>
      <ul className="mb-2 mt-2 list-disc">
        {areas.map((area, i) => (
          <li key={i} className="mb-2 flex h-8 items-center">
            <Icons8checkmark className="mr-2 h-7 w-7 flex-shrink-0" />
            {area}
          </li>
        ))}
      </ul>

      <p className="mt-2">{note}</p>

      <ul className="mb-4 mt-4 list-disc">
        <li className="mb-2 flex h-10 items-center">
          <Icons8ArrowRight className="mr-2 h-7 w-7 flex-shrink-0" />
          {discountText}
        </li>
      </ul>

      <Link
        href={ctaHref}
        className="mb-4 inline-block cursor-pointer rounded-none border-b-2 border-blue-500 font-bold text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
      >
        {ctaLabel}
      </Link>
    </div>
  );
};
