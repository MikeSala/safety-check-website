import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { useContext } from "react";
import { serviceItems } from "~/content/wlaczenia-wylaczenia/content.pl";
import { ViewportContext } from "~/providers/ViewportProvider";

interface Props {
  category: string;
}

const InclusionsExclusions: React.FC<Props> = ({ category }) => {
  const serviceItem = serviceItems.find((item) => item.category === category);
  const { isMobile } = useContext(ViewportContext);

  if (!serviceItem) {
    return null;
  }

  const { inclusions, exclusions } = serviceItem;

  return (
    <div className="xs:px-4 mb-10 mt-10 bg-black py-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="mb-6 flex items-center justify-center">
        <h3 className="text-2xl font-semibold text-white h2">{category}</h3>
      </div>

      <div className="gap-0 md:grid md:grid-cols-2 ">
        <div className="justify-top order-2 flex w-full flex-col items-start border-white bg-black p-4 md:order-1 md:w-auto md:border-r-2 ">
          <h4 className="mb-4 pl-16 text-xl font-semibold text-white h2">
            Włączenie
          </h4>
          <ul
            className={`mb-4 space-y-4 pl-2 text-sm text-white h4 sm:pl-8 md:pl-12 lg:pl-16 ${
              isMobile ? " " : ""
            }`}
          >
            {inclusions.map((item, index) => (
              <li
                key={index}
                className={clsx(
                  "flex items-center space-x-3 ",
                  isMobile ? "space-x-1 text-sm" : "space-x-3 text-sm"
                )}
              >
                <CheckCircleIcon
                  className={clsx(
                    "flex-shrink-0 md:h-10 md:w-10 lg:h-10 lg:w-10",
                    isMobile ? "mr-2 h-6 w-6" : "h-10 w-10"
                  )}
                />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 w-full bg-black p-4 md:order-2 md:w-auto">
          <h4 className="mb-4 pl-16 text-base text-white h2">Wykluczenie</h4>
          <ul
            className={`mb-4 space-y-4 pl-2  text-white h4 sm:pl-8 md:pl-12 lg:pl-16 ${
              isMobile ? "" : ""
            }`}
          >
            {exclusions.map((item, index) => (
              <li
                key={index}
                className={clsx(
                  "flex items-center space-x-3 text-sm ",
                  isMobile ? "space-x-1 " : "space-x-3"
                )}
              >
                <XCircleIcon
                  className={clsx(
                    "flex-shrink-0 md:h-10 md:w-10 lg:h-10 lg:w-10",
                    isMobile ? "mr-2 h-6 w-6" : "h-10 w-10"
                  )}
                />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InclusionsExclusions;
