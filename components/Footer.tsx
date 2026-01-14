import Link from "next/link";
import { useRouter } from "next/router";
import ContactButtons from "~/components/ContactButtons";
import DistrictBar from "~/components/DisctrictBar";
import { NAV_LABELS } from "~/content/Labels";
import { ROUTES } from "~/content/Routes";
import { getContactInfo } from "~/utils/contactInfo";

const LINK_GROUPS = [
  {
    heading: "Usługi",
    links: [
      { href: ROUTES.SERVICES, label: "Nasze usługi" },
      {
        href: ROUTES.COMPLIANCE_SUBSCRIPTION,
        label: NAV_LABELS.COMPLIANCE_SUBSCRIPTION,
      },
      { href: ROUTES.SMOKE_ALARM_CHECK, label: NAV_LABELS.SMOKE_ALARM_CHECK },
      { href: ROUTES.ELECTRICAL_CHECK, label: NAV_LABELS.ELECTRICAL_CHECK },
      { href: ROUTES.GAS_CHECK, label: NAV_LABELS.GAS_CHECK },
      { href: ROUTES.CARAVAN_GAS_CHECK, label: NAV_LABELS.CARAVAN_GAS_CHECK },
      {
        href: ROUTES.SWITCHBOARD_UPGRADE,
        label: NAV_LABELS.SWITCHBOARD_UPGRADE,
      },
      { href: ROUTES.GENERAL_PLUMBING, label: NAV_LABELS.PLUMBING_SERVICES },
      {
        href: ROUTES.INCLUSIONS_EXCLUSIONS,
        label: NAV_LABELS.INCLUSIONS_EXCLUSIONS,
      },
    ],
  },
  {
    heading: "Rozwiązania",
    links: [
      { href: ROUTES.SOLUTIONS, label: "Nasze rozwiązania" },
      {
        href: ROUTES.PROPERTY_MANAGERS,
        label: NAV_LABELS.FOR_PROPERTY_MANAGERS,
      },
      { href: ROUTES.LANDLORDS, label: NAV_LABELS.FOR_LANDLORDS },
      {
        href: ROUTES.BUILDING_MANAGERS,
        label: NAV_LABELS.FOR_BUILDING_MANAGERS,
      },
      { href: ROUTES.HOMEOWNERS, label: NAV_LABELS.FOR_HOMEOWNERS },
      { href: ROUTES.REAL_ESTATE, label: NAV_LABELS.FOR_REAL_ESTATE },
    ],
  },
  {
    heading: "Inne linki",
    links: [
      { href: ROUTES.BOOK_NOW, label: NAV_LABELS.BOOK_NOW },
      { href: ROUTES.CONTACT_US, label: NAV_LABELS.CONTACT_US },
      { href: ROUTES.ABOUT_US, label: NAV_LABELS.ABOUT_US },
      { href: ROUTES.LEGISLATION, label: NAV_LABELS.LEGISLATION },
      { href: ROUTES.FAQ, label: NAV_LABELS.FAQ },
      { href: ROUTES.PRIVACY_POLICY, label: NAV_LABELS.PRIVACY_POLICY },
    ],
  },
];

export const Footer: React.FC = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const { phoneNumber, phoneHref, email, emailHref } = getContactInfo();
  const hasContactInfo = Boolean(phoneNumber || email);

  const renderLinkGroup = (
    heading: string,
    links: (typeof LINK_GROUPS)[number]["links"]
  ) => {
    return (
      <section className="flex flex-col gap-2 text-sm" key={heading}>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
          {heading}
        </h3>
        <ul>
          {links.map(({ href, label }) => {
            const isActive = router.pathname === href;
            return (
              <li
                key={href}
                className={isActive ? "mb-1 text-sky-700" : "mb-1"}
              >
                <Link
                  href={href}
                  className="transition duration-500 hover:text-sky-700"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  return (
    <>
      <footer className=" bg-black text-gray-200">
        <DistrictBar />

        <br className="w-full py-4" />
        <div className="mx-auto max-w-7xl px-4 sm:px-0">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex gap-4 py-4 pb-2"></div>
            <div className="mb-10 sm:ml-6 md:mr-10">
              <ContactButtons />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
            {hasContactInfo && (
              <div className="flex flex-col gap-2 text-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
                  Kontakt
                </h3>
                {phoneNumber && phoneHref && (
                  <Link
                    className="transition duration-500 hover:text-sky-800"
                    href={phoneHref}
                  >
                    {phoneNumber}
                  </Link>
                )}
                {email && emailHref && (
                  <Link
                    className="mt-1 transition duration-500 hover:text-sky-800"
                    href={emailHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {email}
                  </Link>
                )}
              </div>
            )}

            {LINK_GROUPS.map(({ heading, links }) =>
              renderLinkGroup(heading, links)
            )}
          </div>

          <hr className="my-8" />
          <div className="flex flex-col justify-between gap-2 text-center text-sm sm:flex-row">
            <p>&copy; {currentYear}</p>
            <p>
              Developed by{" "}
              <Link
                className="text-gray-200 transition duration-500 hover:text-sky-700"
                target="_blank"
                href="https://strivelab.pl"
                rel="noreferrer"
              >
                StriveLab
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
