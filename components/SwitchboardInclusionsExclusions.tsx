import { switchboardInclusionsExclusionsData } from "~/content/switchboardInclusionsExclusions";
import { InclusionsExclusions } from "./shared/InclusionsExclusions";

const SwitchboardInclusionsExclusions = () => {
  return (
    <InclusionsExclusions
      category={switchboardInclusionsExclusionsData.title}
      inclusions={switchboardInclusionsExclusionsData.inclusions}
      exclusions={switchboardInclusionsExclusionsData.exclusions}
      variant="switchboard"
    />
  );
};

export default SwitchboardInclusionsExclusions;
