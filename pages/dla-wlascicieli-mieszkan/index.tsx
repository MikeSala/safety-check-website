import {
  buildDefaultSolutionsSections,
  createSolutionsPage,
} from "~/components/solutions/solutionsPageFactory";
import InfoLinks from "~/components/InfoLinks";
import { SolutionsForLandlordsContent as content } from "~/content/dla-wlascicieli-mieszkan/content.pl";

const selectedId = [101, 102, 103, 104, 105];

const sections = buildDefaultSolutionsSections(content, <InfoLinks />);

export default createSolutionsPage({
  content,
  faqSelectedIds: selectedId,
  sections,
});
