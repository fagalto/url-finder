import { atom } from "recoil";

export const searchedIP = atom<string>({
  key: "searchedIP",
  default: "",
});
