import { fetcher, BASE_URL } from "../../config";

export const getListings = async () => {
  const listings = await fetcher(`${BASE_URL}listings?per_page=5`);

  return listings;
};
