import { MappedData } from "./ApiClient"

export const getIPGeoData = async (ip: string) => {
    return await MappedData(ip)
}
export const getURLStringGeoData = async (url: string) => {
    
}