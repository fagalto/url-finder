import axios, { AxiosError } from "axios"

export async function getData<T>(url: string) {
  const response = axios.get<T>(url)
  return response;
}
