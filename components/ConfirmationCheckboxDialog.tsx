import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Button, { ButtonColor, ButtonProps } from "~/components/Button";
import Checkbox from "~/components/Checkbox";

export function initConfirmationCheckboxDialogContent(): ConfirmationCheckboxDialogContent {
  return {
    title: "",
    dialogContextText: "",
    confirmText: "",
    cancelText: "",
  };
}

export type ConfirmationCheckboxDialogContent = {
  title: string;
  dialogContextText: string;
  confirmText: string;
  cancelText: string;
};

type ConfirmationCheckboxDialogProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: (val?: boolean) => void;
  onCancel?: () => void;
  content: ConfirmationCheckboxDialogContent;
  isApproved?: boolean;
  loading?: boolean;
};

export const ConfirmationCheckboxDialog: React.FC<
  ConfirmationCheckboxDialogProps
> = ({
  modalVisible,
  setModalVisible,
  content,
  onConfirm,
  onCancel,
  isApproved,
  loading,
}) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleOnCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const onCloseModal = () => {
    if (onCancel) {
      onCancel();
    }
    setModalVisible(false);
    setIsChecked(false);
  };

  const actionButtons: Array<ButtonProps & { label: string }> = [
    {
      label: content.cancelText,
      outline: true,
      color: ButtonColor.Neutral,
      onClick: () => {
        onCloseModal();
      },
      disabled: loading,
    },
    {
      label: content.confirmText,
      disabled: !isChecked,
      color: ButtonColor.Primary,
      onClick: () => {
        const isApproved = content.confirmText === "Accept";
        onConfirm(isApproved);
      },
      loading,
    },
  ];

  return (
    <Transition.Root show={modalVisible} as={Fragment}>
      <Dialog
        className="relative z-10"
        onClose={onCloseModal}
        open={modalVisible}
      >
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
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative flex transform flex-col items-center overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                <Dialog.Title
                  as="h3"
                  className="mb-3 text-xl font-medium text-gray-900"
                >
                  {content.title}
                </Dialog.Title>
                <div className="flex items-center justify-center gap-4">
                  <Checkbox
                    name="agree"
                    id="agree"
                    handleCheck={handleOnCheck}
                    value="agree"
                    isChecked={isChecked}
                    className="h-6 w-6 w-full flex-1 self-center border-gray-300 bg-black text-black accent-black hover:cursor-pointer hover:accent-gray-500 focus:ring-black"
                  />
                  <label
                    htmlFor="agree"
                    // TODO: Instead of w-[90%] it would be better to make sure the width is full and then add horizontal margin
                    className="w-[90%] whitespace-pre-wrap text-sm text-gray-500 hover:cursor-pointer"
                  >
                    {content.dialogContextText}
                  </label>
                </div>
                <div className="mt-5 flex w-full gap-3">
                  {actionButtons.map((button, index) => {
                    return (
                      <Button key={index} className="flex-grow" {...button}>
                        {button.label}
                      </Button>
                    );
                  })}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
