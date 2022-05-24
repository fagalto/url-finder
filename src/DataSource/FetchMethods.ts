export async function getData(url: string) {
  const response = fetch(url, {
    headers: {
      cache: "no-cache",
    },
    method: "GET",
  });
  return response;
}
