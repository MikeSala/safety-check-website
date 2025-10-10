import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import router, { useRouter } from "next/router";
import React, { Fragment, useContext } from "react";
import { ViewportContext } from "~/providers/ViewportProvider";
import { RequireOnlyOne } from "~/types/optional";

type Props = {
  name: string;
  href?: string;
  subItems?: { name: string; href: string; icon?: React.ReactNode }[];
};

export type NavItemProps = RequireOnlyOne<Props, "href" | "subItems">;

export const NavItem: React.FC<NavItemProps> = ({ name, href, subItems }) => {
  const { isMobile } = useContext(ViewportContext);
  const { route } = useRouter();

  const classes = clsx(
    isMobile
      ? "px-6 py-5 w-full content-between border-gray-200 ring-inset rounded-none"
      : "px-3 py-1.5"
  );

  const activeClasses = "text-sky-700";

  return !subItems ? (
    <Link
      href={href}
      className={clsx(
        classes,
        "transition duration-500 hover:text-sky-700",
        href === route && activeClasses
      )}
    >
      {name}
    </Link>
  ) : (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={clsx(
              "group flex items-center gap-2 transition duration-500 hover:text-sky-700",
              classes,
              subItems.map((item) => item.href).includes(route) && activeClasses
            )}
          >
            <span
              className={clsx(
                "transition duration-500 group-hover:text-sky-700",
                (subItems.map((item) => item.href).includes(route) || open) &&
                  activeClasses
              )}
            >
              {name}
            </span>
            <ChevronDownIcon
              className={clsx(
                "h-5 w-5 transform transition duration-500 ease-in-out group-hover:text-sky-700",
                open && "rotate-180",
                (subItems.map((item) => item.href).includes(route) || open) &&
                  activeClasses
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className={clsx(
                "absolute left-1/2 z-10 mt-2 w-screen max-w-md -translate-x-1/2 transform",
                isMobile && "max-w-[90%]"
              )}
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                <div className="relative flex flex-col bg-neutral-50 p-2">
                  {subItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={clsx(
                        "text-md group flex items-center gap-2 rounded-none border-b-2 py-4 px-2 transition duration-500 ease-in-out",
                        classes,
                        "last:border-b-0",
                        route.replace(/\/$/, "") ===
                          item.href.replace(/\/$/, "") && activeClasses,
                        "hover:text-sky-700"
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        close();
                        router.push(item.href);
                      }}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
