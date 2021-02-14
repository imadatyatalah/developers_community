import { fetcher, BASE_URL } from "../../config";

export const getUserArticles = async (userName, perPage) => {
  const userArticles = await fetcher(
    `${BASE_URL}articles?username=${userName}&per_page=${perPage}`
  );

  return userArticles;
};
