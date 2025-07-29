import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { useContext, useState } from "react";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { ViewportContext } from "~/providers/ViewportProvider";
import { FaqSectionConent } from "./faqContent";

interface FaqComponentProps {
  sections: FaqSectionConent[];
  selectedIds: number[];
}

const FaqComponent: React.FC<FaqComponentProps> = ({
  sections,
  selectedIds,
}) => {
  const { isMobile } = useContext(ViewportContext);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleSetActiveItem = (sectionIndex: number, itemIndex: number) => {
    if (activeItem === itemIndex && activeSection === sectionIndex) {
      setActiveItem(null);
      setActiveSection(null);
    } else {
      setActiveItem(itemIndex);
      setActiveSection(sectionIndex);
    }
  };

  const filteredSections = sections
    .map((section) => ({
      ...section,
      items: section.items
        .filter((item) => selectedIds.includes(item.id))
        .sort((a, b) => selectedIds.indexOf(a.id) - selectedIds.indexOf(b.id)),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <MarginLayout className="max-w-7xl flex-col gap-4 sm:py-2">
      {filteredSections.map((section, index) => (
        <div
          key={index}
          className={`faq-section my-4 text-left ${
            isMobile ? "text-md" : "mb-20 text-lg"
          }`}
        >
          <h2
            className={`mb-4 font-semibold ${
              isMobile ? "text-lg" : "text-2xl"
            }`}
          >
            {section.title}
          </h2>
          <div className="faq-list">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`faq-item group ${
                  activeSection === index && activeItem === itemIndex
                    ? "active"
                    : ""
                }`}
                role="button"
                tabIndex={0}
                onClick={() => handleSetActiveItem(index, itemIndex)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleSetActiveItem(index, itemIndex);
                  }
                }}
                aria-expanded={
                  activeSection === index && activeItem === itemIndex
                }
              >
                <h3
                  className={`faq-question duration-400 flex items-center border-t border-gray-200 bg-white p-2 shadow-sm transition hover:text-red-500 ${
                    activeSection === index && activeItem === itemIndex
                      ? "border-t-1 text-blue-500"
                      : ""
                  } duration-400 transition group-hover:text-blue-500`}
                >
                  <div className=" flex-grow">{item.question}</div>
                  <ChevronDownIcon
                    className={clsx(
                      "duration-400 ml-auto h-7 w-7 flex-shrink-0 transform text-neutral-700 transition duration-200 ease-in-out group-hover:text-red-500",
                      {
                        "text-blue-500":
                          activeSection === index && activeItem === itemIndex,
                        "rotate-180":
                          activeSection === index && activeItem === itemIndex,
                      }
                    )}
                    aria-hidden="true"
                  />
                </h3>

                {activeSection === index && activeItem === itemIndex && (
                  <div className="faq-answer bg-white px-6 pb-6 pt-0 text-sm leading-relaxed shadow-sm md:text-base">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </MarginLayout>
  );
};

export default FaqComponent;
