import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import logoPng from "~/src/assets/images/logo.webp";

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
}: Props) => {
  return (
    <Link
      className={clsx("flex-shrink-0 rounded", className)}
      href="/"
      title="Przejdź na stronę główną"
    >
      <Image
        src={logoPng}
        height={height}
        width={width}
        draggable={false}
        alt="logo"
      />
    </Link>
  );
};
