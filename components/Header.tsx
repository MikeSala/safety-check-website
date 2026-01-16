import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { useClickAway, useUpdateEffect } from "react-use";
import ContactButtons from "~/components/ContactButtons";
import { LogoButton } from "~/components/LogoButton";
import { Nav } from "~/components/Nav";
import { ViewportContext } from "~/providers/ViewportProvider";

// Animacje dla mobile menu
const menuVariants = {
  closed: {
    x: "-100%",
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 40,
    },
  },
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const Header: React.FC = () => {
  const { isMobile } = useContext(ViewportContext);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null);
  const { route } = useRouter();
  const mobileNavContainerRef = useRef(null);

  const logoSize = {
    height: isMobile ? 50.04 : 76.95,
    width: isMobile ? 93 : 143,
  };

  useEffect(() => {
    setScrollContainer(document.getElementById("app"));
  }, []);

  const { scrollY } = useScroll({
    container: scrollContainer ? { current: scrollContainer } : undefined,
  });

  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(250, 250, 250, 1)", "rgba(250, 250, 250, 0.97)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 1px 3px 0 rgb(0 0 0 / 0.1)", "0 10px 40px -10px rgb(0 0 0 / 0.15)"]
  );

  const headerPadding = useTransform(scrollY, [0, 100], ["12px", "8px"]);

  useUpdateEffect(() => {
    setIsMobileNavOpen(false);
  }, [route]);

  useClickAway(mobileNavContainerRef, () => {
    setIsMobileNavOpen(false);
  });

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBg,
          boxShadow: headerShadow,
          paddingTop: headerPadding,
          paddingBottom: headerPadding,
        }}
        className="sticky top-0 z-10 flex w-full items-center justify-between gap-4 px-4 backdrop-blur-md sm:px-6 lg:px-8"
      >
        {isMobile ? (
          <>
            <div className="mx-2 flex w-full items-center justify-between sm:justify-start">
              <motion.button
                onClick={() => setIsMobileNavOpen(true)}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg p-2 transition-colors hover:bg-gray-100"
              >
                <span className="sr-only">Open navigation.</span>
                <Bars3Icon className="h-8 w-8 text-gray-700" />
              </motion.button>
              <LogoButton isWhiteLogo={true} {...logoSize} />
              <ContactButtons isMobile={isMobile} />
            </div>
          </>
        ) : (
          <>
            <LogoButton isWhiteLogo={true} {...logoSize} />
            <Nav className="flex-wrap gap-x-1 gap-y-1" />
            <ContactButtons />
          </>
        )}
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <Dialog
            static
            as={motion.div}
            open={isMobileNavOpen}
            onClose={() => setIsMobileNavOpen(false)}
            className="fixed inset-0 z-50"
          >
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileNavOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              ref={mobileNavContainerRef}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 left-0 flex w-[92%] max-w-md flex-col bg-white shadow-2xl"
            >
              {/* Header w mobile menu */}
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <LogoButton isWhiteLogo={true} height={50} width={93} />
                <motion.button
                  onClick={() => setIsMobileNavOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="sr-only">Close navigation.</span>
                  <XMarkIcon className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-4">
                <Nav className="flex-col" />
              </div>

              {/* Footer w mobile menu */}
              <div className="border-t border-gray-100 p-6">
                <p className="text-center text-xs text-gray-500">
                  Przegląd Instalacji © {new Date().getFullYear()}
                </p>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export { Header };
