import type { StaticImageData } from "next/image";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import eventsImage from "~/src/assets/images/services-projects-events.webp";
import factoryImage from "~/src/assets/images/services-projects-factory.webp";
import mallImage from "~/src/assets/images/services-projects-mall.webp";
import officeImage from "~/src/assets/images/services-projects-office.webp";
import residentialImage from "~/src/assets/images/services-projects-residential.webp";
import restaurantImage from "~/src/assets/images/services-projects-restaurant.webp";

type ServiceProject = {
  heading: string;
  image: StaticImageData;
};

const serviceProjects: ServiceProject[] = [
  {
    heading: "Obiekty eventowe",
    image: eventsImage,
  },
  {
    heading: "Biura komercyjne",
    image: officeImage,
  },
  {
    heading: "Bary i restauracje",
    image: restaurantImage,
  },
  {
    heading: "Domy mieszkalne",
    image: residentialImage,
  },
  {
    heading: "Centra handlowe",
    image: mallImage,
  },
  {
    heading: "Fabryki i magazyny",
    image: factoryImage,
  },
];

export const ServiceProjects: React.FC = () => {
  return (
    <MarginLayout className="flex max-w-screen-2xl flex-col items-center gap-8 sm:mt-20 sm:mb-20 lg:gap-16">
      <div className="flex flex-col items-center gap-4 text-center lg:max-w-prose">
        <h3 className="h3">Realizacje</h3>
        <p>
          Oprócz usług mieszkaniowych obsługujemy również wielu klientów
          biznesowych, zajmując się instalacją i konserwacją w różnych typach
          obiektów.
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
                alt={project.heading}
                src={project.image}
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
