import { fetcher, BASE_URL } from "../../config";

export const getListings = async (perPage) => {
  const listings = await fetcher(`${BASE_URL}listings?per_page=${perPage}`);

  return listings;
};
