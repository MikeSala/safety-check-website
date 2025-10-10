import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { useContext, useState } from "react";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { ViewportContext } from "~/providers/ViewportProvider";
import { FaqContent } from "./FaqContent";

interface FaqComponentProps {
  sections: FaqContent[];
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
          className={`faq-section my-4 mb-10 text-left ${
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
                  className={`faq-question duration-400 flex items-center border-t border-gray-200 p-2 shadow-sm transition hover:text-sky-600 ${
                    activeSection === index && activeItem === itemIndex
                      ? "border-t-1  bg-sky-800 text-white"
                      : ""
                  } duration-400 transition group-hover:bg-sky-800 group-hover:text-white`}
                >
                  <div className="flex-grow">{item.question}</div>
                  <ChevronDownIcon
                    className={clsx(
                      "ml-auto h-7 w-7 flex-shrink-0 transform transition duration-200 ease-in-out group-hover:text-white",
                      activeSection === index &&
                        activeItem === itemIndex &&
                        "rotate-180 text-white"
                    )}
                  />
                </h3>

                {activeSection === index && activeItem === itemIndex && (
                  <div className="faq-answer mt-4 bg-white px-6 pb-6 pt-0 text-sm leading-relaxed shadow-sm md:text-base">
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
