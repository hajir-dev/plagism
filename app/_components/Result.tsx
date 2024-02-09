"use client";

import { useRecoilValue } from "recoil";
import { convertedTextState } from "../_store/store";

const Result = () => {
  const convertedText = useRecoilValue(convertedTextState);
  return (
    convertedText && (
      <div className="w-full flex-1 mt-4">
        <p>Result : </p>
        <p className="font-semibold">{convertedText}</p>
      </div>
    )
  );
};

export default Result;
