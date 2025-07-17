import { useContext } from "react";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { ViewportContext } from "~/providers/ViewportProvider";

const HeaderComponent = () => {
  const { isMobile } = useContext(ViewportContext);

  const mobileImageSrc = "/RCSC/Mobile/smoke_2.webp";
  const desktopImageSrc = "/RCSC/Desktop/smoke_2_better_resolution.webp";

  return (
    <div className={isMobile ? "flex flex-wrap" : "flex lg:flex-nowrap"}>
      {isMobile ? (
        <ResponsiveImage
          className="order-1 object-cover lg:order-1 lg:h-auto lg:w-2/4"
          src={mobileImageSrc}
          priority
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      ) : (
        <ResponsiveImage
          className="order-1 object-cover lg:order-1 lg:h-auto lg:w-2/4"
          src={desktopImageSrc}
          sizes="(min-width: 1024px) 100vw, 40vw,"
        />
      )}

      <section
        className={`${
          isMobile
            ? "order-2 w-full bg-black py-12 px-4 text-center"
            : "order-2 bg-black md:w-3/4 md:py-20 md:px-14 lg:w-3/5 lg:py-28 lg:px-16"
        }`}
      >
        <h1 className="mb-4 text-white h2 md:h2 xl:h1">
          Residential & Commercial
          <br />
          Safety Checks
        </h1>
        <p className="text-white h4 md:h3 xl:h2">
          Quick and comprehensive. <br className="xl:hidden" />
          Friendly and professional.
        </p>
      </section>
    </div>
  );
};

export default HeaderComponent;
