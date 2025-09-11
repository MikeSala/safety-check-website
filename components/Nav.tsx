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
import { ROUTES } from "~/pages/content/Routes";

const navItems: NavItemProps[] = [
  {
    name: NAV_LABELS.SERVICES,
    subItems: [
      {
        name: NAV_LABELS.COMPLIANCE_SUBSCRIPTION,
        href: ROUTES.COMPLIANCE_SUBSCRIPTION,
        icon: (
          <Icons8Property className="mr-2 h-8 w-8 flex-shrink-0 group-hover:text-sky-700" />
        ),
      },
      {
        name: NAV_LABELS.SMOKE_ALARM_CHECK,
        href: ROUTES.SMOKE_ALARM_CHECK,
        icon: <Icons8SmokeDetectorB className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: NAV_LABELS.ELECTRICAL_CHECK,
        href: ROUTES.ELECTRICAL_CHECK,
        icon: (
          <IconElectrical className="mr-2 h-8 w-8 flex-shrink-0 group-hover:text-sky-700" />
        ),
      },
      {
        name: NAV_LABELS.GAS_CHECK,
        href: ROUTES.GAS_CHECK,
        icon: <Icons8Fire className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: NAV_LABELS.CARAVAN_GAS_CHECK,
        href: ROUTES.CARAVAN_GAS_CHECK,
        icon: <Icons8Trailer className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: NAV_LABELS.SWITCHBOARD_UPGRADE,
        href: ROUTES.SWITCHBOARD_UPGRADE,
        icon: <Icons8Switchboard className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: NAV_LABELS.PLUMBING_SERVICES,
        href: ROUTES.GENERAL_PLUMBING,
        icon: <Icons8Plumbing className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: NAV_LABELS.INCLUSIONS_EXCLUSIONS,
        href: ROUTES.INCLUSIONS_EXCLUSIONS,
        icon: <Icons8Maybe className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
    ],
  },
  {
    name: NAV_LABELS.SOLUTIONS,
    subItems: [
      {
        name: NAV_LABELS.FOR_PROPERTY_MANAGERS,
        href: ROUTES.PROPERTY_MANAGERS,
        icon: <Icons8Apartment className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: NAV_LABELS.FOR_LANDLORDS,
        href: ROUTES.LANDLORDS,
        icon: <Icons8Residence className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: NAV_LABELS.FOR_BUILDING_MANAGERS,
        href: ROUTES.BUILDING_MANAGERS,
        icon: <Icons8Building className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: NAV_LABELS.FOR_HOMEOWNERS,
        href: ROUTES.HOMEOWNERS,
        icon: <Icons8CountryHouse className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
      {
        name: NAV_LABELS.FOR_REAL_ESTATE,
        href: ROUTES.REAL_ESTATE,
        icon: <Icons8CityBlock className="mr-2 h-8 w-8 flex-shrink-0" />,
      },
    ],
  },
  {
    name: NAV_LABELS.FAQ,
    href: ROUTES.FAQ,
  },
  {
    name: NAV_LABELS.ABOUT_US,
    href: ROUTES.ABOUT_US,
  },
  {
    name: NAV_LABELS.WORK_WITH_US,
    href: ROUTES.WORK_WITH_US,
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
