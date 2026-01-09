import {
  buildDefaultSolutionsSections,
  createSolutionsPage,
} from "~/components/solutions/solutionsPageFactory";
import InfoLinks from "~/pages/InfoLinks";
import { SolutionsForBuildingManagersContent as content } from "~/content/dla-administratorow-budynkow/content.pl";

const selectedId = [131, 132, 133, 134, 135];

const sections = buildDefaultSolutionsSections(content, <InfoLinks />);

export default createSolutionsPage({
  content,
  faqSelectedIds: selectedId,
  sections,
});
