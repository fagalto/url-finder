//
///

import { getData } from "./FetchMethods"

const API_1_BASE_URL = 'https://ipgeolocation.abstractapi.com/v1/'
const API_1_KEY = '6c864f4617104dad83739170b994278b'

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

type API_1_RESPONSE = typeof sampleResponse

export const fetchIPData = async (ip: string) => {
    return await getData(`${API_1_BASE_URL}?api_key=${API_1_KEY}&ip_address=${ip}`)
      .then((res) => res.json())
      .then((json: API_1_RESPONSE) => json)
      .catch((err) => {
        throw new Error("Problem with fetching data" + err);
      });
    
    
}

