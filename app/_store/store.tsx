import { atom } from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const convertedTextState = atom({
  key: "convertedTextState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const acceptTOSState = atom({
  key: "acceptTOSState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export { textState, convertedTextState, acceptTOSState };
