import {
  buildDefaultSolutionsSections,
  createSolutionsPage,
} from "~/components/solutions/solutionsPageFactory";
import InfoLinks from "~/components/InfoLinks";
import { SolutionsForHomeownersContent as content } from "~/content/dla-wlascicieli-domow/content.pl";

const selectedId = [121, 122, 123, 124, 125];

const sections = buildDefaultSolutionsSections(content, <InfoLinks />);

export default createSolutionsPage({
  content,
  faqSelectedIds: selectedId,
  sections,
});
