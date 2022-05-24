import { atom } from "recoil";

export const searchedList = atom<string[]>({
  key: "searchedList",
  default: [],
});
