import { getOwnUrl, MappedData, getIpFromHost } from "./ApiClient";


export const getIPGeoData = async (ip: string) => {
    return await MappedData(ip)
}
export const getOwnAddress = async () => {
    return await getOwnUrl()
}
export const getIpFromHostname = async (hostname:string) => {
  return await getIpFromHost(hostname);
};
export const getURLStringGeoData = async (url: string) => {
    
}