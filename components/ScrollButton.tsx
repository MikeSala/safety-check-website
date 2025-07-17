import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
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

  const buttonStyle = isMobile ? "bottom-2 right-0" : "bottom-4 right-10";

  return (
    <>
      <div
        className={`z-9999 fixed ${buttonStyle} -translate-y-1/2 transform cursor-pointer rounded`}
        onClick={scrollToTop}
        onKeyDown={scrollToTop}
        role="button"
        tabIndex={0}
        style={{ display: visible ? "inline" : "none" }}
        title="Scroll to Top"
      >
        <div className="position-relative">
          <ArrowUpCircleIcon className="hover h-12 w-12 fill-white text-primary-600 hover:fill-primary-600 hover:text-white" />
        </div>
      </div>
    </>
  );
};

export default ScrollButton;
