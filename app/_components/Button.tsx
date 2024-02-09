"use client";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { acceptTOSState, convertedTextState, textState } from "../_store/store";

const Button = () => {
  const setConvertedText = useSetRecoilState(convertedTextState);
  const isAcceptTOS = useRecoilValue(acceptTOSState);
  const text = useRecoilValue(textState);
  async function convertText() {
    const response = await fetch("http://localhost:3000/convert", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ text }),
    });
    return response.json();
  }

  const handleSubmit = () => {
    convertText().then((response) => setConvertedText(response.result));
  };

  return (
    <button
      disabled={!isAcceptTOS}
      onClick={handleSubmit}
      className="border w-full py-4 rounded-lg  duration-300 border-gray-300 hover:shadow disabled:opacity-10"
    >
      Generate
    </button>
  );
};

export default Button;
