import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { Fragment } from "react";

type ModalLayoutProps = {
  children: React.ReactNode;
  modalVisible: boolean;
  onClose: () => void;
  title?: string;
};

export const ModalLayout: React.FC<ModalLayoutProps> = ({
  title,
  children,
  modalVisible,
  onClose,
}) => {
  return (
    <Transition.Root show={modalVisible} as={Fragment}>
      <Dialog className="relative z-10" onClose={onClose} open={modalVisible}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="m-4 flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative flex transform flex-col items-center overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-7xl sm:p-6">
                <Dialog.Title as="h1" className="h2">
                  {title}
                </Dialog.Title>
                <Dialog.Description as={Fragment}>
                  {children}
                </Dialog.Description>
                <button
                  className="absolute top-4 right-4 h-8 w-8 border-2 border-gray-300 text-red-600"
                  onClick={onClose}
                >
                  <span className="sr-only">Close modal.</span>
                  <XMarkIcon />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
