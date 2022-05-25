import { atom } from "recoil";

export const searchedIP = atom<string>({
  key: "searchedIP",
  default: "141.136.4.134",
});
