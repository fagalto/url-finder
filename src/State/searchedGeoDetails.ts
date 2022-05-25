import { atom,selector } from "recoil";
import { pointInfo } from "../Components/PointInfo";
import { searchedIP } from "./searchedIP";
import * as DM from "../DataSource/DataManager"
import * as utils from "../Utils/ipVerification"

export const defaultPoint: pointInfo = {
  lat: 0,
  lng: 0,
  city: "no City",
  region: "no Region",
  country: "no Country",
  country_code: "NN",
  flag: "no flag"
}


export const searchedGeoDetails = selector<pointInfo>({
  key: "searchedGeoDetails",
  get: async ({ get }) => {
    const ip = get(searchedIP);
    let _ip=ip
    if (utils.isHostname(ip)) {
      _ip = await DM.getIpFromHostname(ip)
    }
      return DM.getIPGeoData(_ip)


   
  },
});
