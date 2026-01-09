import {
  buildDefaultSolutionsSections,
  createSolutionsPage,
} from "~/components/solutions/solutionsPageFactory";
import { SolutionsForPropertyManagersContent as content } from "~/content/dla-zarzadcow-nieruchomosci/content.pl";
import InfoLinks from "~/pages/InfoLinks";

const selectedId = [111, 112, 113, 114, 115];

const sections = buildDefaultSolutionsSections(content, <InfoLinks />);

export default createSolutionsPage({
  content,
  faqSelectedIds: selectedId,
  sections,
});
