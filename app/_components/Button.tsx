"use client";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { acceptTOSState, convertedTextState } from "../_store/store";
import { convertText } from "../_services/convert";
import { toast, ToastOptions } from "react-toastify";

const Button = () => {
  const setConvertedText = useSetRecoilState(convertedTextState);
  const isAcceptTOS = useRecoilValue(acceptTOSState);

  const toastOptions: ToastOptions = {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleSubmit = () => {
    convertText()
      .then((response: { result: string | ((currVal: string) => string) }) => {
        setConvertedText(response.result);
        toast.success("Conversion Complete", toastOptions);
      })
      .catch((e: any) => {
        toast.error("Conversion Error", toastOptions);
      });
  };

  return (
    <button
      disabled={!isAcceptTOS}
      onClick={handleSubmit}
      className="border w-full py-4 rounded-lg  duration-300 border-gray-300 hover:shadow disabled:opacity-10 dark:hover:shadow-white dark:focus:shadow-white"
    >
      Convert
    </button>
  );
};

export default Button;
