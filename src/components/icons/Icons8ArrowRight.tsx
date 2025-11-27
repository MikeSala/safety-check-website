import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const ArrowRight = ({ className, ...rest }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="50px"
    height="50px"
    {...rest}
  >
    <path d="M25,48c12.683,0,23-10.317,23-23S37.683,2,25,2S2,12.317,2,25S12.317,48,25,48z M12,24h18v-6l7,7l-7,7v-6H12V24z" />
  </svg>
);

export default ArrowRight;
