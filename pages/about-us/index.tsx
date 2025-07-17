import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import Button, { ButtonColor } from "~/components/Button";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { MainLayout } from "~/components/layouts/MainLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { Icons8checkmark } from "~/src/components/icons";

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title="About Us" />
      <div className="flex flex-grow flex-wrap lg:flex-nowrap">
        <ResponsiveImage
          className="order-1 lg:order-1 lg:h-auto lg:w-1/2"
          src="/RCSC/cropped_tower.webp"
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="order-1 flex flex-col justify-center gap-4 px-4 py-8 sm:px-6 sm:py-12 lg:w-1/2 lg:px-16 lg:py-20">
          <h2 className="font-bold h2">
            Residential & Commercial Safety Checks in Melbourne
          </h2>
          <p>
            RCSC is a medium-sized safety compliance company based in Melbourne,
            offering extensive electrical and gas maintenance and safety
            services across all Victorian suburbs. With a wealth of experience
            in both residential and commercial sectors, RCSC is qualified to
            assist with a broad spectrum of safety and compliance issues,
            ensuring the safety of your property.
          </p>
          <Button
            href="/contact-us"
            color={ButtonColor.Primary}
            className="mb-10 mt-10 w-fit"
            size="xl"
            outline
          >
            Contact Us <ArrowLongRightIcon className="ml-2 h-7 w-7" />{" "}
          </Button>
          Our team is ready to conduct inspections that meet all legislative
          standards in these Melbourne areas:{" "}
          <ul className="mb-2 mt-2 list-disc">
            <li className="mb-2 flex h-8 items-center">
              <Icons8checkmark className="mr-2 h-7 w-7 flex-shrink-0" />
              Melbourne City/Inner suburbs
            </li>
            <li className="mb-2  flex h-8 items-center">
              <Icons8checkmark className="mr-2 h-7 w-7 flex-shrink-0" />
              Mornington Peninsula
            </li>
            <li className="mb-2  flex h-8 items-center">
              <Icons8checkmark className="mr-2 h-7 w-7 flex-shrink-0" />
              South East
            </li>
            <li className="mb-2  flex h-8 items-center">
              <Icons8checkmark className="mr-2 h-7 w-7 flex-shrink-0" />
              Bayside
            </li>
            <li className=" flex h-8 items-center">
              <Icons8checkmark className="mr-2 h-7 w-7 flex-shrink-0" />
              Westernport
            </li>
          </ul>{" "}
        </div>
      </div>
    </>
  );
};

AboutPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="About Us"
        description="RCSC operates Victoria-wide, providing comprehensive safety and compliance services with its highly-qualified, experienced team."
      />
      {page}
    </MainLayout>
  );
};

export default AboutPage;
