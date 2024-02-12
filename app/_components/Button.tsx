"use client";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { acceptTOSState, convertedTextState, textState } from "../_store/store";
import { convertText } from "../_services/convert";
import { toast, ToastOptions } from "react-toastify";
import { useState } from "react";
import { PiSpinnerGap } from "react-icons/pi";

const Button = () => {
  const setConvertedText = useSetRecoilState(convertedTextState);
  const text = useRecoilValue(textState);
  const isAcceptTOS = useRecoilValue(acceptTOSState);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    convertText(text)
      .then((response: { result: string | ((currVal: string) => string) }) => {
        setConvertedText(response.result);
        toast.success("Conversion Complete", toastOptions);
      })
      .catch((e: any) => {
        toast.error("Conversion Error", toastOptions);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <button
      disabled={!isAcceptTOS || isLoading}
      onClick={handleSubmit}
      className="border w-full py-4 rounded-lg  duration-300 border-gray-300 hover:shadow disabled:opacity-10 dark:hover:shadow-white dark:focus:shadow-white"
    >
      {isLoading ? (
        <PiSpinnerGap className="mx-auto animate-spin" size={20} />
      ) : (
        "Convert"
      )}
    </button>
  );
};

export default Button;
