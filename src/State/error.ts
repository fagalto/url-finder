import { atom } from "recoil";

export const errorMessage = atom<string>({
  key: "errorMessage",
  default: ""
});
