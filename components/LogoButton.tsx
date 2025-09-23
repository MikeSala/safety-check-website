import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
  isWhiteLogo?: boolean;
  height: number;
  width: number;
};

export const LogoButton: React.FC<Props> = ({
  className,
  height,
  width,
  isWhiteLogo,
}: Props) => {
  return (
    <Link
      className={clsx("flex-shrink-0 rounded", className)}
      href="/"
      title="Home"
    >
      <Image
        src="/logo-przegladinstalacji.com.webp"
        height={height}
        width={width}
        draggable={false}
        alt=""
        className={isWhiteLogo ? "invert filter" : ""}
      />
      <span className="sr-only">Przejdź na stronę główną</span>
    </Link>
  );
};
