import { atom } from "recoil";
import { pointInfo } from "../Components/PointInfo";

const defaultPoint: pointInfo = {
  lat: 0,
  lng: 0,
  city: "no City",
  region: "no Region",
  country: "no Country",
  country_code: "NN",
  flag: "no flag"
}


export const userGeoDetails = atom<pointInfo>({
  key: "userGeoDetails",
  default: defaultPoint,
});
