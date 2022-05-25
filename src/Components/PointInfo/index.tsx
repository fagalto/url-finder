//https://app.abstractapi.com/api/ip-geolocation/documentation

import NoPointData from "./NoPointData";
import PointDetails from "./PointDetails";

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

const PointInfo = (props: { info?: pointInfo, loading: boolean }) => {
  console.log("loading is", props.loading)
  return props.info !== undefined ? (
    <PointDetails info={props.info} />
  ) : (
    <NoPointData loading={props.loading} />
  );
};

export default PointInfo;
