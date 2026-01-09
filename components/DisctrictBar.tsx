import { TruckIcon } from "@heroicons/react/20/solid";
import React from "react";
import { BG, TEXT } from "~/components/theme/colors";

const locations = [
  "Kraków",
  "Warszawa",
  "Poznań",
  "Wrocław",
  "Zamość",
  "Gdańsk",
  "Sopot",
  "Gdynia",
  "Katowice",
  "Szczecin",
];

interface BarComponentProps {
  backgroundColor?: string;
  textColor?: string;
}

const DistrictBar: React.FC<BarComponentProps> = ({
  backgroundColor = BG.primary,
  textColor = TEXT.onPrimary,
}) => {
  const estimatedMinWidth = locations.length * 146;

  return (
    <>
      <h4 className="mb-2 mt-2 flex items-center justify-center">
        Firma operuje
      </h4>
      <div
        className={`${backgroundColor} overflow-hidden overflow-x-auto py-2`}
      >
        {" "}
        <div
          className="flex items-center justify-center gap-6 overflow-x-auto"
          style={{ minWidth: `${estimatedMinWidth}px` }}
        >
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap"
            >
              <TruckIcon className="h-5 w-5 text-white" />
              <span className={textColor}>{location}</span>{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DistrictBar;
