import { MarginLayout } from "~/components/layouts/MarginLayout";
import { ResponsiveImage } from "~/components/ResponsiveImage";

type ServiceProject = {
  heading: string;
  imageUrl: string;
};

const serviceProjects: ServiceProject[] = [
  {
    heading: "Event Venues",
    imageUrl: "/services-projects-events.webp",
  },
  {
    heading: "Commercial Offices",
    imageUrl: "/services-projects-office.webp",
  },
  {
    heading: "Bars and Restaurants",
    imageUrl: "/services-projects-restaurant.webp",
  },
  {
    heading: "Residential Homes",
    imageUrl: "/services-projects-residential.webp",
  },
  {
    heading: "Shopping Centers",
    imageUrl: "/services-projects-mall.webp",
  },
  {
    heading: "Factories and Warehousing",
    imageUrl: "/services-projects-factory.webp",
  },
];

export const ServiceProjects: React.FC = () => {
  return (
    <MarginLayout className="flex max-w-screen-2xl flex-col items-center gap-8 lg:-mt-20 lg:gap-16">
      <div className="flex flex-col items-center gap-4 text-center lg:max-w-prose">
        <h3 className="h3">Projects</h3>
        <p>
          In addition to residential services, we have many commercial clients
          and handle installation & maintenance for a range of projects and
          environments.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {serviceProjects.map((project) => {
          return (
            <div
              key={project.heading}
              className="col-span-1 flex flex-col items-center gap-3"
            >
              <ResponsiveImage
                src={project.imageUrl}
                sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
              />
              <h4 className="h4">{project.heading}</h4>
            </div>
          );
        })}
      </div>
    </MarginLayout>
  );
};
