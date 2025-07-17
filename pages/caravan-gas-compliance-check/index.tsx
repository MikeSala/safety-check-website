import clsx from "clsx";
import { NextSeo } from "next-seo";
import { ReactElement, useContext } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/FAQ/FaqComponent";
import FaqSectionsData from "~/components/FAQ/FaqData";
import FormComponent from "~/components/FormComponent";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { ViewportContext } from "~/providers/ViewportProvider";
import { Icons8ArrowRight, Icons8checkmark } from "~/src/components/icons";

const selectedId = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70];

const CaravanGasComplianceCheckPage: NextPageWithLayout = () => {
  const { isMobile } = useContext(ViewportContext);
  return (
    <>
      <Banner title="Caravan Gas Compliance Check" />
      <MarginLayout className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
            isMobile ? "gap-3 p-3" : "gap-8 p-8 "
          )}
        >
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/caravan_2.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              Caravan Gas Safety in Melbourne
            </h3>
            <p className="mb-4">
              Ensuring the safety of your caravan&apos;s gas system is crucial
              before hitting the road or preparing it for sale. Our Caravan Gas
              Compliance Check service offers thorough inspection and
              certification to ensure your mobile home is safe and compliant
              with the latest regulations.
            </p>
            <p className="mb-4">
              Our licensed technicians perform detailed checks on all gas
              appliances, connections, and ventilation systems in your caravan.
              We focus on identifying any potential risks- ensure everything
              operates efficiently and safely.
            </p>
            <p className="mb-4">
              A Caravan Gas Safety Check is a vital safety measure and, in many
              regions, a legal requirement. It&apos;s essential to ensure the
              safety of your family and to avoid potential legal issues.
            </p>
            <ul className="mb-2 mt-2 list-disc">
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-10 text-sm" : "h-10 text-base"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Comprehensive gas appliance checks
              </li>
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-10 text-sm" : "h-10 text-base"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Leak detection and repair
              </li>
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-10 text-sm" : "h-10 text-base"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Pressure Testing of pipework
              </li>
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-10 text-sm" : "h-10 text-base"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Ventilation adequacy assessment
              </li>
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-10 text-sm" : "h-10 text-base"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                All checks carried out in accordance with AS/NZS 5601
              </li>
            </ul>
            <p className="mb-2">
              Ensure your caravan meets all safety standards with our caravan
              gas compliance service in Victoria, keeping your adventures safe!
            </p>
          </div>
        </div>
      </MarginLayout>

      <FormComponent titleId="caravanSafety" />
      <MarginLayout className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "mx-auto flex max-w-7xl flex-col-reverse rounded  bg-white shadow-sm",
            isMobile ? "gap-3 p-3" : "gap-8 p-8 md:grid md:grid-cols-2"
          )}
        >
          <div className="flex flex-col text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">
              Caravan Gas Safety and Compliance Guidelines
            </h3>
            <p className="mb-4">
              Legally, you can carry up to 50 L of LPG in your caravan, the
              equivalent of two 9 kg cylinders. However, it&apos;s crucial to
              adhere to the storage regulations outlined in Australian Standard
              AS/NZS 5601.2:2013 Section 3.4. This includes:
            </p>
            <ul className="mb-4 list-disc">
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-20 text-sm" : "h-20 text-base"
                }`}
              >
                <Icons8ArrowRight
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Securing the cylinders and associated fittings in a compartment
                that excludes electrical equipment, batteries, or ignition
                sources.
              </li>
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-20 text-sm" : "h-20 text-base"
                }`}
              >
                <Icons8ArrowRight
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Ensuring the storage area is external to the caravan, sealed
                against gas vapour, and has proper drainage or ventilation.
              </li>
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-20 text-sm" : "h-20 text-base"
                }`}
              >
                <Icons8ArrowRight
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Making sure the storage compartment is water- and
                corrosion-resistant, displays a warning sign, and securely holds
                the gas bottles.
              </li>
            </ul>
          </div>
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/caravan_3.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </MarginLayout>
      <MarginLayout className="mx-auto -mt-20 max-w-7xl">
        <div className="flex flex-col gap-8 rounded bg-white p-8 shadow-sm md:grid md:grid-cols-2">
          <div className="relative top-0 flex flex-col md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/caravan_1.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="text-gray-700">
            <h3 className="mb-4 text-xl font-bold  h3">
              Preparing for a Caravan Gas Safety Check
            </h3>
            <p className="mb-2">
              Before we perform an inspection, please be aware of the following:
            </p>
            <ul className="list-disc">
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-12 text-sm" : "h-12 text-base"
                }`}
              >
                <Icons8ArrowRight
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Your caravan must be is on a flat, level surface.
              </li>
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-12 text-sm" : "h-12 text-base"
                }`}
              >
                <Icons8ArrowRight
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                The gas bottle must be filled.
              </li>
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-12 text-sm" : "h-12 text-base"
                }`}
              >
                <Icons8ArrowRight
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                All gas appliances should be in proper working order.
              </li>
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-12 text-sm" : "h-12 text-base"
                }`}
              >
                <Icons8ArrowRight
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                A 2-stage regulator with overpressure protection (OPP) is
                required.
              </li>
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-12 text-sm" : "h-12 text-base"
                }`}
              >
                <Icons8ArrowRight
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                The caravan must have a gas test point installed.
              </li>
              <li
                className={`mb-2 flex items-center ${
                  isMobile ? "h-12 text-sm" : "h-12 text-base"
                }`}
              >
                <Icons8ArrowRight
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Only Australian-certified appliances can be fitted.
              </li>
            </ul>
            Taking these steps to prepare your caravan for a Gas Safety Check
            not only facilitates a smoother inspection process but also helps in
            maintaining the long-term reliability and safety of your gas system.
            A well-prepared caravan will get you back on the road as quickly as
            possible!
          </div>
        </div>
      </MarginLayout>

      <SubscriptionServiceBanner />

      <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
    </>
  );
};

CaravanGasComplianceCheckPage.getLayout = function GetLayout(
  page: ReactElement
) {
  return (
    <MainLayout>
      <NextSeo
        title="Caravan Gas Compliance Check"
        description="Ensure your caravan is safe and compliant with our professional Caravan Gas Compliance Check service. Book now for peace of mind on your travels."
      />
      {page}
    </MainLayout>
  );
};

export default CaravanGasComplianceCheckPage;
