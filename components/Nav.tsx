import clsx from "clsx";
import {
  IconElectrical,
  Icons8Apartment,
  Icons8Building,
  Icons8CityBlock,
  Icons8CountryHouse,
  Icons8Fire,
  Icons8Maybe,
  Icons8Plumbing,
  Icons8Property,
  Icons8Residence,
  Icons8SmokeDetectorB,
  Icons8Switchboard,
  Icons8Trailer,
} from "src/components/icons";
import { NavItem, NavItemProps } from "~/components/NavItem";
import { NAV_LABELS } from "~/pages/content/Labels";

const navItems: NavItemProps[] = [
  {
    name: NAV_LABELS.SERVICES,
    subItems: [
      {
        name: NAV_LABELS.COMPLIANCE_SUBSCRIPTION,
        href: "/property-compliance-subscription",
        icon: (
          <Icons8Property className="mr-2 h-8 w-8 flex-shrink-0 group-hover:text-red-500" />
        ),
      },
      {
        name: "Przegląd Czujników Dymu",
        href: "/smoke-alarm-safety-check",
        icon: <Icons8SmokeDetectorB className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: "Przegląd Instalacji Elektrycznej",
        href: "/electrical-safety-check",
        icon: (
          <IconElectrical className="mr-2 h-8 w-8 flex-shrink-0 group-hover:text-red-500" />
        ),
      },
      {
        name: "Przegląd Instalacji Gazowej",
        href: "/gas-safety-check",
        icon: <Icons8Fire className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: "Przegląd Instalacji w Przyczepach Kempingowych",
        href: "/caravan-gas-compliance-check",
        icon: <Icons8Trailer className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: "Modernizacja Rozdzielnicy Elektrycznej",
        href: "/electrical-switchboard-upgrade",
        icon: <Icons8Switchboard className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: "Usługi Hydrauliczne",
        href: "/general-plumbing",
        icon: <Icons8Plumbing className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: "Zakres Usługi i Wyłączenia",
        href: "/inclusions-exclusions",
        icon: <Icons8Maybe className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
    ],
  },
  {
    name: "Rozwiązania",
    subItems: [
      {
        name: "Dla Zarządców Zieruchomości",
        href: "/solutions-for-property-managers",
        icon: <Icons8Apartment className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: "Dla właścicieli mieszkań na wynajem",
        href: "/solutions-for-landlords",
        icon: <Icons8Residence className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: "Dla administratorów budynków",
        href: "/solutions-for-building-managers",
        icon: <Icons8Building className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: "Dla właścicieli domów",
        href: "/solutions-for-homeowners",
        icon: <Icons8CountryHouse className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: "Dla Biur Nieruchomości",
        href: "/solutions-for-real-estate",
        icon: <Icons8CityBlock className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
    ],
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "O nas",
    href: "/about-us",
  },
  {
    name: "Praca z nami",
    href: "/work-with-us",
  },
];

type Props = {
  className?: string;
};

const Nav: React.FC<Props> = ({ className }) => {
  return (
    <nav className={clsx("flex", className)}>
      {navItems.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </nav>
  );
};

export { Nav };
