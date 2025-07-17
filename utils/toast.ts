import { toast } from "react-toastify";

export const errorToast = (message: string) => {
  toast(message, {
    type: "error",
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    autoClose: 1000 * 10,
  });
};

export const successToast = (message: string) => {
  toast.success(message, {
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    autoClose: 1000 * 4,
    hideProgressBar: false,
  });
};
