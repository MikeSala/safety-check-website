import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useCallback, useContext, useEffect, useState } from "react";
import { ViewportContext } from "~/providers/ViewportProvider";

const ScrollButton = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const [visible, setVisible] = useState(false);
  const { isMobile } = useContext(ViewportContext);
  const toggleVisible = useCallback(() => {
    const scrolled = containerRef.current ? containerRef.current.scrollTop : 0;
    setVisible(scrolled > 300);
  }, [containerRef]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", toggleVisible);
      return () => {
        containerRef?.current?.removeEventListener("scroll", toggleVisible);
      };
    }
  }, [toggleVisible, containerRef]);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const buttonStyle = isMobile ? "bottom-11 right-4" : "bottom-11 right-8";

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`group fixed ${buttonStyle} z-[9999] inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-800 bg-white/95 text-sky-800 shadow-lg transition hover:bg-sky-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900`}
      style={{ display: visible ? "flex" : "none" }}
      title="Przewiń do góry"
      aria-label="Przewiń do góry"
    >
      <ArrowUpIcon className="h-6 w-6 transition-colors group-hover:text-white" />
    </button>
  );
};

export default ScrollButton;
