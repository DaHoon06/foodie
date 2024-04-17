import {toast, ToastContainer, ToastOptions} from "react-toastify";
import {ReactNode} from "react";
import {IoCheckmark, IoInformationCircleSharp} from "react-icons/io5";
import {BiSolidError} from "react-icons/bi";
import styles from './Toast.module.scss';

const defaultToastOption: ToastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
};

export const Toast = {
  info: (message: ReactNode, options: ToastOptions = {}) => {
    toast.info(message, {
      ...defaultToastOption,
      icon: <IoInformationCircleSharp size={14} color={"#222"} />,
      ...options,
    });
  },
  success: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(message, {
      ...defaultToastOption,
      icon: <IoCheckmark size={14} color={"#222"} />,
      ...options,
    });
  },
  error: (message: ReactNode, options: ToastOptions = {}) => {
    toast.error(message, {
      ...defaultToastOption,
      icon: <BiSolidError size={28} color={"#fff"} />,
      ...options,
    });
  },
};

export const CustomToastify = () => {
  return (
    <ToastContainer className={styles.toast} />
  )
}