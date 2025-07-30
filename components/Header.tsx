import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Fragment, useContext, useRef, useState } from "react";
import { useClickAway, useUpdateEffect } from "react-use";
import ContactButtons from "~/components/ContactButtons";
import { LogoButton } from "~/components/LogoButton";
import { Nav } from "~/components/Nav";
import { ViewportContext } from "~/providers/ViewportProvider";

const Header: React.FC = () => {
  const { isMobile } = useContext(ViewportContext);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { route } = useRouter();
  const mobileNavContainerRef = useRef(null);

  const logoSize = {
    height: isMobile ? 50.04 : 76.95,
    width: isMobile ? 93 : 143,
  };

  useUpdateEffect(() => {
    setIsMobileNavOpen(false);
  }, [route]);

  useClickAway(mobileNavContainerRef, () => {
    setIsMobileNavOpen(false);
  });

  return (
    <>
      <header className="sticky top-0 z-10 flex w-full items-center justify-between gap-4 bg-neutral-50 px-4 py-3 shadow-lg sm:px-6 lg:px-8">
        {isMobile ? (
          <>
            <div className="mx-4 flex w-full items-center justify-between sm:justify-start">
              <button onClick={() => setIsMobileNavOpen(true)}>
                <span className="sr-only">Open navigation.</span>
                <Bars3Icon className="h-14 w-14" />
              </button>
              <LogoButton isWhiteLogo={true} {...logoSize} />
              <ContactButtons isMobile={isMobile} />
            </div>
          </>
        ) : (
          <>
            <LogoButton isWhiteLogo={true} {...logoSize} />
            <Nav className="flex-wrap gap-x-2 gap-y-1" />
            <ContactButtons />
          </>
        )}
      </header>
      <Transition
        as={Fragment}
        show={isMobileNavOpen}
        enter="transform transition ease-in-out duration-500"
        enterFrom="opacity-0 -translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transform transition ease-in-out duration-500"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-full"
      >
        <Dialog
          as="div"
          className={clsx(
            "absolute inset-0 z-10 flex w-full backdrop-brightness-25"
          )}
          onClose={() => setIsMobileNavOpen(false)}
        >
          <div
            ref={mobileNavContainerRef}
            className="flex h-full w-[90%] flex-col overflow-y-auto bg-neutral-50"
            style={{ maxHeight: "100vh" }}
          >
            <Nav className="flex-col" />
          </div>
          <button
            className="absolute right-1 top-1 h-8 w-8"
            onClick={() => setIsMobileNavOpen(false)}
          >
            <span className="sr-only">Close navigation.</span>
            <XMarkIcon className="text-white shadow-md" />
          </button>
        </Dialog>
      </Transition>
    </>
  );
};

export { Header };
