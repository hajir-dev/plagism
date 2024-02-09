"use client";

import { useState } from "react";
import { useRecoilState } from "recoil";
import { acceptTOSState } from "../_store/store";

const TermOfService = () => {
  const [showTOS, setShowTOS] = useState(false);
  const [isAcceptTOS, setIsAcceptTOS] = useRecoilState(acceptTOSState);
  return (
    <div className=" my-4">
      <input
        type="checkbox"
        checked={isAcceptTOS}
        onChange={() => setIsAcceptTOS(!isAcceptTOS)}
        className="outline-none"
      />
      <span>
        {" "}
        I acknowledge and accept the associated risks.{" "}
        <span
          onClick={() => setShowTOS(!showTOS)}
          className=" underline italic cursor-pointer"
        >
          {showTOS ? "Close" : "Show TOS"}
        </span>
      </span>
      {showTOS && (
        <p className="text-red-400 font-semibold">
          This project is designed for educational purposes to explore
          techniques used to deceive plagiarism detection tools. Users are
          reminded that using this application to produce unoriginal work or for
          purposes that violate ethics, such as concealing plagiarism,
          contradicts academic and professional principles. The application
          should be used responsibly and solely for educational purposes. The
          creator of this application is not liable for any misuse that violates
          the law.
        </p>
      )}
    </div>
  );
};

export default TermOfService;
