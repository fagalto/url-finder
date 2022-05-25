//https://app.abstractapi.com/api/ip-geolocation/documentation

import NoPointData from "./NoPointData";
import PointDetails from "./PointDetails";
import { defaultPoint } from "../../State/userGeoDetails";
import { error } from "../../State/Loadables/factory";

const flag = {
  emoji: "🇺🇸",
  unicode: "U+1F1FA U+1F1F8",
  png: "https://static.abstractapi.com/country-flags/US_flag.png",
  svg: "https://static.abstractapi.com/country-flags/US_flag.svg",
};
type flagType = typeof flag;
export interface pointInfo {
  lat: number;
  lng: number;
  city: string|null;
  region: string;
  country: string;
  country_code: string;
  flag: string;
}

const PointInfo = (props?: { info?: pointInfo, error?:error }) => {
  return props?.info !== undefined ? (
    <PointDetails info={props.info} error={props.error} />
  ) : (
    <NoPointData />
  );
};

export default PointInfo;
