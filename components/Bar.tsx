import {
  BuildingOffice2Icon,
  ClockIcon,
  Cog8ToothIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const elements = [
  { Icon: ClockIcon, text: "Profesjonalizm" },
  { Icon: WrenchScrewdriverIcon, text: "Sprawdzone Procedury" },
  { Icon: ShieldCheckIcon, text: "Firma Średniej Wielkości" },
  { Icon: Cog8ToothIcon, text: "Szybka Realizacja" },
  { Icon: BuildingOffice2Icon, text: "Portal dla Agencji Nieruchomości" },
];

const Bar = ({
  backgroundColor = "bg-gray-200",
  textColor = "text-black",
  iconColor = "text-black",
}) => {
  const estimatedMinWidth = elements.length * 260;

  return (
    <div
      className={`${backgroundColor} overflow-hidden overflow-x-auto border-t-2 p-2`}
    >
      <div
        className="flex items-center justify-center gap-9 overflow-x-auto "
        style={{ minWidth: `${estimatedMinWidth}px` }}
      >
        {elements.map(({ Icon, text }, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center justify-center gap-3 whitespace-nowrap"
          >
            <Icon className={`${iconColor} h-5 w-5 `} />
            <span className={`${textColor} text-md`}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;
