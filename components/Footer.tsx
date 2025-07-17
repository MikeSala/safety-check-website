import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useContext } from "react";
import ContactButtons from "~/components/ContactButtons";
import DistrictBar from "~/components/DisctrictBar";
import { LogoButton } from "~/components/LogoButton";
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
            <Link href="/property-compliance-subscription">Subskrypcja</Link>
          </li>
          <li>
            <Link href="/smoke-alarm-safety-check">
              Przegląd Systemów Sygnalizacji Pożarowej
            </Link>
          </li>
          <li>
            <Link href="/electrical-safety-check">
              Przegląd Instalacji Elektrycznej
            </Link>
          </li>
          <li>
            <Link href="/gas-safety-check">Przegląd Instalacji Gazowej</Link>
          </li>
          <li>
            <Link href="/caravan-gas-compliance-check">
              Przegląd Instalacji w Przyczepach Kempingowych
            </Link>
          </li>
          <li>
            <Link href="/electrical-switchboard-upgrade">
              Modernizacja Rozdzielnicy Elektrycznej
            </Link>
          </li>
          <li>
            <Link href="/general-plumbing">Usługi hydrauliczne</Link>
          </li>
          <li>
            <Link href="/inclusions-exclusions">Zakres i wyłączenia</Link>
          </li>
        </ul>
      ),
    },
    {
      heading: "Rozwiązania",
      content: (
        <ul>
          <li>
            <Link href="/solutions">Nasze rozwiązania</Link>
          </li>
          <li>
            <Link href="/solutions-for-property-managers">
              Dla Zarządców Nieruchomości
            </Link>
          </li>
          <li>
            <Link href="/solutions-for-landlords">
              Dla Właścicieli pod Wynajem
            </Link>
          </li>
          <li>
            <Link href="/solutions-for-building-managers">
              Dla Administratorów Budynków
            </Link>
          </li>
          <li>
            <Link href="/solutions-for-homeowners">Dla Właścicieli Domów</Link>
          </li>
          <li>
            <Link href="/solutions-for-real-estate">
              Dla Biur Nieruchomości
            </Link>
          </li>
        </ul>
      ),
    },
    {
      heading: "Inne linki",
      content: (
        <ul>
          <li>
            <Link href="/book-now">Zarezerwuj</Link>
          </li>
          <li>
            <Link href="/contact-us">Kontakt</Link>
          </li>
          <li>
            <Link href="/about-us">O nas</Link>
          </li>
          <li>
            <Link href="/legislation">Przepisy prawne</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/work-with-us">Praca z nami</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Polityka prywatności</Link>
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
