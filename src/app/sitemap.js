import { caseStudyProjects, spacesProjects } from "@/data/spacesProjects";
import { hospitalityCases } from "@/data/hospitalityCases";
import { planningTypes } from "@/data/planningTypes";
import { SITE_URL } from "@/lib/site";

// Every public page, for search engines. Static pages first, then the
// project galleries, case studies and planning types from the data files.
export default function sitemap() {
  const now = new Date();
  const page = (path, priority = 0.6, changeFrequency = "monthly") => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency, priority });
  return [
    page("/", 1, "weekly"),
    page("/spaces", 0.9, "weekly"),
    page("/spaces/projects", 0.8, "weekly"),
    page("/spaces/case-studies", 0.8, "weekly"),
    page("/spaces/process", 0.6),
    page("/spaces/about", 0.6),
    page("/spaces/get-a-quote", 0.7),
    page("/hospitality", 0.9, "weekly"),
    page("/hospitality/projects", 0.7),
    page("/hospitality/about", 0.6),
    page("/hospitality/case-studies", 0.8, "weekly"),
    page("/hospitality/book-a-consultation", 0.7),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms-of-service", 0.2, "yearly"),
    ...spacesProjects.map((p) => page(`/spaces/projects/${p.slug}`, 0.7)),
    ...caseStudyProjects.map((p) => page(`/spaces/case-studies/${p.slug}`, 0.7)),
    ...hospitalityCases.map((c) => page(`/hospitality/case-studies/${c.slug}`, 0.7)),
    ...planningTypes.map((t) => page(`/hospitality/${t.slug}`, 0.6)),
  ];
}
