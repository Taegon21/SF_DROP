import { atom } from "recoil";

// 인증번호 전역 상태 관리
export const authCodeState = atom({
  key: "authCodeState", 
  default: "", 
});

// 파일 목록 전역 상태 관리
export const filesState = atom({
  key: "filesState",
  default: [],
});