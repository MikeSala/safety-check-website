import {
  buildDefaultSolutionsSections,
  createSolutionsPage,
} from "~/components/solutions/solutionsPageFactory";
import { SolutionsForRealEstateContent as content } from "~/content/dla-biur-nieruchomosci/content.pl";
import InfoLinks from "~/components/InfoLinks";

const selectedId = [141, 142, 143, 144, 145];

const sections = buildDefaultSolutionsSections(content, <InfoLinks />);

export default createSolutionsPage({
  content,
  faqSelectedIds: selectedId,
  sections,
});
