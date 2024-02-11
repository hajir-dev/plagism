"use client";

import { useRecoilValue } from "recoil";
import { convertedTextState } from "../_store/store";
import { RiFileCopyLine } from "react-icons/ri";
import { ToastOptions, toast } from "react-toastify";

const Result = () => {
  const convertedText = useRecoilValue(convertedTextState);

  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const copyText = () => {
    navigator.clipboard
      .writeText(convertedText)
      .then(() => {
        toast.success("Copied Successfully", toastOptions);
      })
      .catch(() => {
        toast.error("Copy Failed", toastOptions);
      });
  };

  return (
    convertedText && (
      <div className="w-full flex-1 mt-4">
        <div className="flex justify-between">
          <p>Result : </p>
          <RiFileCopyLine
            onClick={copyText}
            className="cursor-pointer text-lg"
            title="Copy Result"
          />
        </div>
        <p className="font-semibold">{convertedText}</p>
      </div>
    )
  );
};

export default Result;
