import { atom,selector } from "recoil";
import { pointInfo } from "../Components/PointInfo";
import { searchedIP } from "./searchedIP";
import * as DM from "../DataSource/DataManager"
import { isParameter } from "typescript";

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
    
    var regExp = /[a-zA-Z]/g;
    let _ip = ip;
    if (regExp.test(ip)) {
      console.log("searching for:",ip)
      _ip = await DM.getIpFromHostname(ip)
    }
      return DM.getIPGeoData(_ip)


   
  },
});
