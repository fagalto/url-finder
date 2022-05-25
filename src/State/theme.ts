import { atom } from "recoil";

type themes = "light" | "dark";

export const theme = atom<themes>({
  key: "theme",
  default: "dark",
});
