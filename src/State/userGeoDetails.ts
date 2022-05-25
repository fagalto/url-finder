import { atom,selector } from "recoil";
import { pointInfo } from "../Components/PointInfo";
import { userIP } from "./userIp";
import * as DM from "../DataSource/DataManager"

export let defaultPoint: pointInfo = {
  lat: 0,
  lng: 0,
  city: "no City",
  region: "no Region",
  country: "no Country",
  country_code: "NN",
  flag: "no flag"
}


export const userGeoDetails = selector<pointInfo>({
  key: "userGeoDetails",
  get: async ({ get }) => {
    const ip = get(userIP);

    const details = DM.getIPGeoData(ip);

    return details;
  },
});
