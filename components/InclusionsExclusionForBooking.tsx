import React from "react";
import { switchboardText } from "~/components/SwitchboardInclusionsExclusions";
import { ServiceItem, serviceItems } from "~/pages/inclusions-exclusions/index";

const InclusionsExclusionForBooking: React.FC = () => {
  return (
    <div className="rounded bg-white p-6 text-black shadow-md">
      {serviceItems.map((item: ServiceItem, idx: number) => (
        <div key={idx} className="mb-6">
          <h2 className="mb-3 text-xl font-bold">{item.category}</h2>

          <h3 className="mb-2 text-lg font-semibold">Inclusions:</h3>
          <ul className="mb-4 pl-6">
            {item.inclusions.map((inclusion, i) => (
              <li key={i} className="mb-1 list-disc">
                {inclusion}
              </li>
            ))}
          </ul>

          <h3 className="mb-2 text-lg font-semibold">Exclusions:</h3>
          <ul className="pl-6">
            {item.exclusions.map((exclusion, i) => (
              <li key={i} className="mb-1 list-disc">
                {exclusion}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p className="mb-3 text-xl font-bold">Switchboard Upgrade</p>

      <div>
        <p className="mb-2 text-lg font-semibold">Inclusions:</p>
        <ul className="mb-4 list-disc space-y-2 pl-6">
          {switchboardText.inclusions.map((inclusion, index) => (
            <li key={index}>
              <p>{inclusion}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-4 text-lg font-semibold">Exclusions:</p>
        <ul className="space-y-2">
          {switchboardText.exclusions.map((exclusion, index) => (
            <li key={index}>
              <p className="mb-2 font-semibold">{exclusion.title}</p>
              <ul className="list-disc space-y-2 pl-6">
                {exclusion.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InclusionsExclusionForBooking;
