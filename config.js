export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const BASE_URL = "https://dev.to/api/";
