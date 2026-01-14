import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useContext } from "react";
import { ViewportContext } from "~/providers/ViewportProvider";

type ExclusionItem = {
  title: string;
  items: string[];
};

type InclusionsExclusionsProps = {
  category: string;
  inclusions: string[];
  exclusions: string[] | ExclusionItem[];
  variant?: "standard" | "switchboard";
  title?: string;
};

const isNestedExclusions = (
  exclusions: string[] | ExclusionItem[]
): exclusions is ExclusionItem[] => {
  return (
    exclusions.length > 0 &&
    typeof exclusions[0] === "object" &&
    "title" in exclusions[0]
  );
};

export const InclusionsExclusions = ({
  category,
  inclusions,
  exclusions,
  variant = "standard",
  title,
}: InclusionsExclusionsProps) => {
  const { isMobile } = useContext(ViewportContext);

  const bgColor = variant === "standard" ? "bg-black" : "bg-sky-900";
  const displayTitle = title || category;

  return (
    <div
      className={clsx(
        "xs:px-4 mb-10 mt-10 py-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24",
        bgColor
      )}
    >
      <div className="mb-6 flex items-center justify-center">
        <h3 className="text-2xl font-semibold text-white h2">{displayTitle}</h3>
      </div>

      <div className="gap-0 md:grid md:grid-cols-2">
        {/* Inclusions Section */}
        <div className="justify-top order-2 flex w-full flex-col items-start border-white p-4 md:order-1 md:w-auto md:border-r-2">
          <h4 className="mb-4 pl-16 text-xl font-semibold text-white h2">
            Włączenie
          </h4>
          <ul
            className={clsx(
              "mb-4 space-y-4 pl-2 text-sm text-white h4 sm:pl-8 md:pl-12 lg:pl-16"
            )}
          >
            {inclusions.map((item, index) => (
              <li
                key={index}
                className={clsx(
                  "flex items-start",
                  isMobile ? "text-xs" : "text-sm"
                )}
              >
                <CheckCircleIcon
                  className={clsx(
                    "mr-2 flex-shrink-0 text-green-400",
                    isMobile ? "mt-0.5 h-5 w-5" : "mt-0.5 h-6 w-6"
                  )}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions Section */}
        <div className="justify-top order-1 flex w-full flex-col items-start p-4 md:order-2 md:w-auto">
          <h4 className="mb-4 pl-16 text-xl font-semibold text-white h2">
            Wyłączenie
          </h4>
          <ul
            className={clsx(
              "mb-4 space-y-4 pl-2 text-sm text-white h4 sm:pl-8 md:pl-12 lg:pl-16"
            )}
          >
            {isNestedExclusions(exclusions) ? (
              // Nested exclusions (Switchboard style)
              exclusions.map((exclusionGroup, index) => (
                <li key={index} className="mb-6">
                  <div
                    className={clsx(
                      "mb-2 font-semibold",
                      isMobile ? "text-xs" : "text-sm"
                    )}
                  >
                    {exclusionGroup.title}
                  </div>
                  <ul className="space-y-3">
                    {exclusionGroup.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={clsx(
                          "flex items-start",
                          isMobile ? "text-xs" : "text-sm"
                        )}
                      >
                        <XCircleIcon
                          className={clsx(
                            "mr-2 flex-shrink-0 text-red-400",
                            isMobile ? "mt-0.5 h-5 w-5" : "mt-0.5 h-6 w-6"
                          )}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            ) : (
              // Flat exclusions (Standard style)
              (exclusions as string[]).map((item, index) => (
                <li
                  key={index}
                  className={clsx(
                    "flex items-start",
                    isMobile ? "text-xs" : "text-sm"
                  )}
                >
                  <XCircleIcon
                    className={clsx(
                      "mr-2 flex-shrink-0 text-red-400",
                      isMobile ? "mt-0.5 h-5 w-5" : "mt-0.5 h-6 w-6"
                    )}
                  />
                  <span>{item}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
