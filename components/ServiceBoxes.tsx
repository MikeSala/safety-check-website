import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { useContext } from "react";
import { SERVICES, SERVICE_KEYS } from "~/components/Book/bookingFormVariables";
import Button, { ButtonColor } from "~/components/Button";
import { ViewportContext } from "~/providers/ViewportProvider";

const recommendedServices: SERVICE_KEYS[] = [SERVICE_KEYS.FullServicePackage];
const displayedServices = SERVICES.filter((service) => service.description);

export const ServiceBoxes: React.FC = () => {
  const { isMobile } = useContext(ViewportContext);

  return (
    <article className="mt-20 rounded border bg-gray-200 px-8 sm:px-16 lg:px-20">
      <h3 className="mb-20 mt-20 px-2 text-center font-semibold h2 sm:px-4 lg:px-0">
        Our Safety Check Services
      </h3>
      <div className="flex flex-col gap-2 px-2 pb-6">
        <div
          className={`grid place-items-center gap-6 ${
            isMobile ? "grid-cols-1" : "md:grid-cols-2 xl:grid-cols-4"
          }`}
        >
          {displayedServices.map(
            (service) =>
              service.address && (
                <Link href={service.address} key={service.label}>
                  <article
                    className={clsx(
                      "group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-lg bg-white px-2 py-4 transition-transform duration-300 hover:scale-105 hover:border-primary-600 hover:shadow-md",
                      isMobile
                        ? "h-52 w-80"
                        : "md:h-64 md:w-72 2xl:h-72 2xl:w-80",
                      recommendedServices.includes(service.value)
                        ? "border border-red-600 shadow-sm"
                        : "shadow-sm"
                    )}
                  >
                    <h3
                      className={`${
                        isMobile ? "text-md" : "text-lg"
                      } px-2 text-center sm:px-4 lg:px-0`}
                    >
                      {service.label}
                    </h3>
                    <h4
                      className={`${
                        isMobile ? "text-md" : "text-2xl"
                      } flex items-center justify-center font-bold`}
                    >
                      ${service.price / 100}
                      <span className="text-md ml-1 font-medium">/ex gst</span>
                    </h4>

                    {service.label === "Full Service Package" && (
                      <>
                        <div className="absolute right-4 top-4 w-full origin-top translate-x-1/2 rotate-45 gap-1 bg-red-600 py-2 text-center text-sm font-semibold text-white transition duration-300 group-hover:bg-primary-600">
                          Save $140
                        </div>

                        <div className="text-center text-sm">
                          <ul className="inline-block list-disc text-left">
                            {displayedServices.map(
                              (service) =>
                                service.label !== "Full Service Package" && (
                                  <li key={service.label}>{service.label}</li>
                                )
                            )}
                          </ul>
                        </div>
                      </>
                    )}

                    <Button
                      className="font-base ml-8 mr-8 inline-flex items-center rounded bg-white px-6 group-hover:bg-primary-600 group-hover:text-white sm:mt-4"
                      color={ButtonColor.Primary}
                      size={isMobile ? "sm" : "lg"}
                      title={`Learn more about ${service.label}`}
                      outline
                      type="button"
                    >
                      Learn more{" "}
                      <ArrowLongRightIcon
                        className={`${isMobile ? "h-6 w-6" : "h-8 w-8"}`}
                      />
                    </Button>
                  </article>
                </Link>
              )
          )}
        </div>
        <div className="mb-4 mt-4 flex flex-col items-center justify-center gap-4 rounded border p-4 sm:px-14">
          <small className="text-md text-center font-semibold h5">
            * Please note a 10% discount applies for landlords with multiple
            properties listed in one name or one company name.
          </small>
          <small className="text-md text-center font-semibold h5">
            ** A one-time only maintenance fee of $250 ex GST per rental
            property you subscribe with.
          </small>
        </div>
      </div>
    </article>
  );
};
