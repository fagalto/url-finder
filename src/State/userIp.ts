import { selector } from "recoil";
import * as DM from "../DataSource/DataManager";

export const userIP = selector<string>({
  key: "userIP",
  get: async ({ get }) => {

    const details = DM.getOwnAddress();

    return details;
  },
});
