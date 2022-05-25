import { pointInfo } from "../Components/PointInfo";
import { defaultPoint } from "../State/userGeoDetails";
import { getData } from "./FetchMethods";
import Bottleneck from "bottleneck";

const limiter = new Bottleneck({
  minTime: 2001, //free plan request per second limit
});

const API_1_BASE_URL = "https://ipgeolocation.abstractapi.com/v1/";
const API_1_KEY = "6c864f4617104dad83739170b994278b";

const sampleResponse = {
  ip_address: "166.171.248.255",
  city: "Modesto",
  city_geoname_id: 5373900,
  region: "California",
  region_iso_code: "CA",
  region_geoname_id: 5332921,
  postal_code: "95353",
  country: "United States",
  country_code: "US",
  country_geoname_id: 6252001,
  country_is_eu: false,
  continent: "North America",
  continent_code: "NA",
  continent_geoname_id: 6255149,
  longitude: -120.997,
  latitude: 37.6393,
  security: {
    is_vpn: false,
  },
  timezone: {
    name: "America/Los_Angeles",
    abbreviation: "PST",
    gmt_offset: -8,
    current_time: "07:10:37",
    is_dst: false,
  },
  flag: {
    emoji: "🇺🇸",
    unicode: "U+1F1FA U+1F1F8",
    png: "https://static.abstractapi.com/country-flags/US_flag.png",
    svg: "https://static.abstractapi.com/country-flags/US_flag.svg",
  },
  currency: {
    currency_name: "USD",
    currency_code: "USD",
  },
  connection: {
    autonomous_system_number: 20057,
    autonomous_system_organization: "AT&T Mobility LLC",
    connection_type: "Cellular",
    isp_name: "AT&T Mobility LLC",
    organization_name: "Service Provider Corporation",
  },
};
const sampleOwnAddress = {
  ipAddress: "188.147.97.170",
  continentCode: "EU",
  continentName: "Europe",
  countryCode: "PL",
  countryName: "Poland",
  stateProv: "Pomerania",
  city: "Kobylnica",
};
const dnsSampleResponse = {
  Status: 0,
  TC: false,
  RD: true,
  RA: true,
  AD: false,
  CD: false,
  Question: [{ name: "porannybiegacz.pl.", type: 1 }],
  Answer: [{ name: "porannybiegacz.pl.", type: 1, TTL: 14211, data: "141.136.43.133" }],
};

type API_1_RESPONSE = typeof sampleResponse;
type OWN_ADDRESS = typeof sampleOwnAddress;
type DNS_RESPONSE = typeof dnsSampleResponse;

const fetchIPData = async (ip: string) => {
  return await getData<API_1_RESPONSE>(`${API_1_BASE_URL}?api_key=${API_1_KEY}&ip_address=${ip}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error("Problem with fetching data");
    });
};
export const MappedData = async (ip: string) => {
  let geoLocationData: pointInfo= Object.assign({}, defaultPoint);
  const response = await limiter
    .schedule(() => fetchIPData(ip))
    .then((res) => {
      geoLocationData.city = res.city;
      geoLocationData.country = res.country;
      geoLocationData.country_code = res.country_code;
      geoLocationData.flag = res.flag.png;
      geoLocationData.lat = res.latitude;
      geoLocationData.lng = res.longitude;
      geoLocationData.region = res.region;
      return geoLocationData;
    })
    .catch((err) => {
      throw new Error("Problem with fetching data");
    });
  return response;
};
export const getOwnUrl = async () => {
  const url = "https://api.db-ip.com/v2/free/self";
  return await getData<OWN_ADDRESS>(url)
    .then((res) => res.data.ipAddress)
    .catch((err) => {
      throw new Error("Problem with getting Your IP");
    });
};
export const getIpFromHost = async (hostname: string) => {
  const url = `https://dns.google/resolve?name=${hostname}`;
  return await getData<DNS_RESPONSE>(url)
    .then((res) => res.data.Answer[0].data) //know that'shortcut
    .catch((err) => {
      throw new Error("Could not resolve"+ hostname);
    });
};
