// atoms.js
import { atom } from "recoil";

export const authCodeState = atom({
  key: "authCodeState", // 고유한 key
  default: "", // 기본값
});
