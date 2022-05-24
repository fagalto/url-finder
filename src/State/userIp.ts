import { atom } from "recoil";

export const userIP = atom<string>({
  key: "userIP",
  default: "141.136.43.133",
});
