import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ViewportContext } from "~/providers/ViewportProvider";
import { RequireOnlyOne } from "~/types/optional";

type Props = {
  name: string;
  href?: string;
  subItems?: { name: string; href: string; icon?: React.ReactNode }[];
};

export type NavItemProps = RequireOnlyOne<Props, "href" | "subItems">;

// Animacje dla dropdown
const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 },
  },
};

export const NavItem: React.FC<NavItemProps> = ({ name, href, subItems }) => {
  const { isMobile } = useContext(ViewportContext);
  const { route } = useRouter();

  const classes = clsx(
    isMobile
      ? "px-6 py-5 w-full content-between border-gray-200 ring-inset rounded-none"
      : "px-4 py-2"
  );

  const activeClasses = "text-sky-700";

  return !subItems ? (
    <Link
      href={href}
      className={clsx(
        classes,
        "text-base font-medium tracking-wide transition-all duration-300 hover:text-sky-700",
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
              "group flex items-center gap-1.5 text-base font-medium tracking-wide transition-all duration-300 hover:text-sky-700 focus:outline-none",
              classes,
              subItems.map((item) => item.href).includes(route) && activeClasses
            )}
          >
            <span
              className={clsx(
                "transition-colors duration-300 group-hover:text-sky-700",
                (subItems.map((item) => item.href).includes(route) || open) &&
                  activeClasses
              )}
            >
              {name}
            </span>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDownIcon
                className={clsx(
                  "h-4 w-4 transition-colors duration-300 group-hover:text-sky-700",
                  (subItems.map((item) => item.href).includes(route) || open) &&
                    activeClasses
                )}
                aria-hidden="true"
              />
            </motion.span>
          </Popover.Button>

          <AnimatePresence>
            {open && (
              <Popover.Panel
                static
                as={motion.div}
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={clsx(
                  "absolute z-20 mt-3 w-screen max-w-sm",
                  isMobile
                    ? "left-0 max-w-[calc(100vw-2rem)]"
                    : "left-0 -translate-x-1/4"
                )}
              >
                <div className="overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
                  <div className="relative flex flex-col p-2">
                    {subItems.map((item, index) => (
                      <motion.div key={item.name} variants={itemVariants}>
                        <Link
                          href={item.href}
                          className={clsx(
                            "group/item flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200",
                            "hover:bg-sky-50",
                            route.replace(/\/$/, "") ===
                              item.href.replace(/\/$/, "")
                              ? "bg-sky-50 text-sky-700"
                              : "text-gray-700 hover:text-sky-700"
                          )}
                          onClick={(e) => {
                            e.stopPropagation();
                            close();
                          }}
                        >
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100/50 text-sky-700 transition-all duration-200 group-hover/item:bg-sky-100 group-hover/item:scale-110">
                            {item.icon &&
                              React.cloneElement(item.icon as React.ReactElement, {
                                className: "h-6 w-6",
                              })}
                          </span>
                          <span className="flex-1">{item.name}</span>
                          <ChevronDownIcon className="h-4 w-4 -rotate-90 text-gray-400 opacity-0 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:text-sky-700 group-hover/item:opacity-100" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
};
