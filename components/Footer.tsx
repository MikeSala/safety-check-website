import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useContext } from "react";
import ContactButtons from "~/components/ContactButtons";
import DistrictBar from "~/components/DisctrictBar";
import { LogoButton } from "~/components/LogoButton";
import { NAV_LABELS } from "~/pages/content/Labels";
import { ROUTES } from "~/pages/content/Routes";
import { ViewportContext } from "~/providers/ViewportProvider";

export const Footer: React.FC = () => {
  const router = useRouter();
  const { isMobile } = useContext(ViewportContext);

  const footerSections: { heading?: string; content: ReactNode }[] = [
    {
      content: (
        <LogoButton
          className="self-start"
          height={isMobile ? 96.6 : 110.4}
          width={isMobile ? 179.2 : 204.8}
          isWhiteLogo={true}
        />
      ),
    },
    {
      heading: "Residential & Commercial Safety Checks",
      content: <p>Book your safety check. Friendly and fast.</p>,
    },
    {
      heading: "Main Office",
      content: (
        <>
          <p>82 Bardia Avenue,</p>
          <p>Seaford Vic Australia 3198</p>
          <p>Monday - Friday 8am - 4pm</p>
        </>
      ),
    },
    {
      heading: "Contact",
      content: (
        <>
          <Link
            className="transition duration-300 hover:text-red-500"
            href={`tel:${process.env.NEXT_PUBLIC_TEL_LINK}`}
          >
            {process.env.NEXT_PUBLIC_TEL_LINK}
          </Link>
          <Link
            className="transition duration-300 hover:text-red-500"
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_LINK}`}
            target="_blank"
            rel="noreferrer"
          >
            {process.env.NEXT_PUBLIC_EMAIL_LINK}
          </Link>
        </>
      ),
    },
    {
      heading: "Usługi",
      content: (
        <ul>
          <li>
            <Link href="/services">Nasze usługi</Link>
          </li>
          <li>
            <Link href={ROUTES.COMPLIANCE_SUBSCRIPTION}>
              {NAV_LABELS.COMPLIANCE_SUBSCRIPTION}
            </Link>
          </li>
          <li>
            <Link href={ROUTES.SMOKE_ALARM_CHECK}>
              {NAV_LABELS.SMOKE_ALARM_CHECK}
            </Link>
          </li>
          <li>
            <Link href={ROUTES.ELECTRICAL_CHECK}>
              {NAV_LABELS.ELECTRICAL_CHECK}
            </Link>
          </li>
          <li>
            <Link href={ROUTES.GAS_CHECK}>{NAV_LABELS.GAS_CHECK}</Link>
          </li>
          <li>
            <Link href={ROUTES.CARAVAN_GAS_CHECK}>
              {NAV_LABELS.CARAVAN_GAS_CHECK}
            </Link>
          </li>
          <li>
            <Link href={ROUTES.SWITCHBOARD_UPGRADE}>
              {NAV_LABELS.SWITCHBOARD_UPGRADE}
            </Link>
          </li>
          <li>
            <Link href={ROUTES.GENERAL_PLUMBING}>
              {" "}
              {NAV_LABELS.PLUMBING_SERVICES}
            </Link>
          </li>
          <li>
            <Link href={ROUTES.INCLUSIONS_EXCLUSIONS}>
              {" "}
              {NAV_LABELS.INCLUSIONS_EXCLUSIONS}
            </Link>
          </li>
        </ul>
      ),
    },
    {
      heading: NAV_LABELS.SOLUTIONS,
      content: (
        <ul>
          <li>
            <Link href={ROUTES.SOLUTIONS}> {NAV_LABELS.SOLUTIONS}</Link>
          </li>
          <li>
            <Link href={ROUTES.PROPERTY_MANAGERS}>
              {NAV_LABELS.FOR_PROPERTY_MANAGERS}
            </Link>
          </li>
          <li>
            <Link href={ROUTES.LANDLORDS}> {NAV_LABELS.FOR_LANDLORDS}</Link>
          </li>
          <li>
            <Link href={ROUTES.BUILDING_MANAGERS}>
              {NAV_LABELS.FOR_BUILDING_MANAGERS}
            </Link>
          </li>
          <li>
            <Link href={ROUTES.HOMEOWNERS}> {NAV_LABELS.FOR_HOMEOWNERS}</Link>
          </li>
          <li>
            <Link href={ROUTES.REAL_ESTATE}> {NAV_LABELS.FOR_REAL_ESTATE}</Link>
          </li>
        </ul>
      ),
    },
    {
      heading: "Inne linki",
      content: (
        <ul>
          <li>
            <Link href={ROUTES.BOOK_NOW}> {NAV_LABELS.BOOK_NOW}</Link>
          </li>
          <li>
            <Link href={ROUTES.CONTACT_US}>{NAV_LABELS.CONTACT_US}</Link>
          </li>
          <li>
            <Link href={ROUTES.ABOUT_US}>{NAV_LABELS.ABOUT_US}</Link>
          </li>
          <li>
            <Link href={ROUTES.LEGISLATION}>{NAV_LABELS.LEGISLATION}</Link>
          </li>
          <li>
            <Link href={ROUTES.FAQ}>{NAV_LABELS.FAQ}</Link>
          </li>
          <li>
            <Link href={ROUTES.WORK_WITH_US}>{NAV_LABELS.WORK_WITH_US}</Link>
          </li>
          <li>
            <Link href={ROUTES.PRIVACY_POLICY}>
              {NAV_LABELS.PRIVACY_POLICY}
            </Link>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <footer className=" bg-black text-gray-200">
        <DistrictBar />

        <hr
          className="w-full border-t-2 py-2
"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-0">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex gap-4 py-4 pb-2"></div>
            <div className="mb-10 sm:ml-6 md:mr-10">
              <ContactButtons />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
            <div className="flex flex-col gap-2 text-sm">
              <LogoButton
                className="self-start"
                height={isMobile ? 96.6 : 110.4}
                width={isMobile ? 179.2 : 204.8}
              />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
                Residential & Commercial Safety Checks
              </h3>
              <p>Book your safety check. Friendly and fast.</p>
              <p>REC 32917</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
                Main Office
              </h3>
              <p>82 Bardia Avenue,</p>
              <p>Seaford Vic Australia 3198</p>
              <p>Monday - Friday 8am - 4pm</p>

              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
                Contact
              </h3>
              <Link
                className="transition duration-500 hover:text-red-500"
                href={`tel:${process.env.NEXT_PUBLIC_TEL_LINK}`}
              >
                {process.env.NEXT_PUBLIC_TEL_LINK}
              </Link>
              <Link
                className="mt-1 transition duration-500 hover:text-red-500"
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_LINK}`}
                target="_blank"
                rel="noreferrer"
              >
                {process.env.NEXT_PUBLIC_EMAIL_LINK}
              </Link>
            </div>

            {footerSections.slice(4, 7).map((section, i) => (
              <section key={i} className="flex flex-col gap-2 text-lg">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-200">
                  {section.heading}
                </h3>
                <div className="mb-2 flex flex-col text-sm">
                  {React.Children.map(section.content, (child) => {
                    if (React.isValidElement(child) && child.type === "ul") {
                      return (
                        <ul>
                          {React.Children.map(
                            child.props.children,
                            (listItem) => {
                              if (
                                React.isValidElement(listItem) &&
                                listItem.type === "li"
                              ) {
                                const link = React.Children.toArray(
                                  (listItem as React.ReactElement).props
                                    .children
                                )[0];

                                if (
                                  React.isValidElement(link) &&
                                  link.type === Link
                                ) {
                                  const isActive =
                                    router.pathname === link.props.href;
                                  return (
                                    <li
                                      className={
                                        isActive ? "mb-1 text-red-500" : "mb-1"
                                      }
                                    >
                                      <Link
                                        href={link.props.href}
                                        className="transition duration-500 hover:text-red-500"
                                      >
                                        {link.props.children}
                                      </Link>
                                    </li>
                                  );
                                }
                              }
                              return listItem;
                            }
                          )}
                        </ul>
                      );
                    }
                    return child;
                  })}
                </div>
              </section>
            ))}
          </div>

          <hr className="my-8" />
          <div className="flex flex-col justify-between gap-2 text-center text-sm sm:flex-row">
            <p>&copy; {new Date().getFullYear()} RCSC</p>
            <p>
              Developed by{" "}
              <Link
                className="text-gray-200 transition duration-500 hover:text-red-500"
                target="_blank"
                href="https://strive.limited/"
                rel="noreferrer"
              >
                Strive
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
