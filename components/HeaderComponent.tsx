import { useContext, useRef } from "react";
import { ViewportContext } from "~/providers/ViewportProvider";

const HeaderComponent = () => {
  const { isMobile } = useContext(ViewportContext);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoPlay = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    void video.play();
  };

  const handleVideoPause = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.pause();
    video.currentTime = 0;
  };

  return (
    <div className={isMobile ? "flex flex-wrap" : "flex lg:flex-nowrap"}>
      <div
        className="order-1 w-full overflow-hidden lg:order-1 lg:h-auto lg:max-h-[560px]"
        onMouseEnter={handleVideoPlay}
        onMouseLeave={handleVideoPause}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/maintenance.mp4"
          preload="metadata"
          muted
          loop={false}
          playsInline
        />
      </div>

      <section
        className={`${
          isMobile
            ? "order-2 w-full bg-sky-800 py-12 px-4 text-center"
            : "order-2 bg-sky-800 md:w-3/4 md:py-20 md:px-14 lg:w-3/5 lg:py-28 lg:px-16"
        }`}
      >
        <h1 className="mb-4 text-white h2 md:h2 xl:h1">
          Profesjonalne Przeglądy Bezpieczeństwa
          <br />
        </h1>
        <p className="text-white h4 md:h3 xl:h2">
          Dla Twojego Domu i Firmy
          <br className="xl:hidden" />
        </p>
      </section>
    </div>
  );
};

export default HeaderComponent;
