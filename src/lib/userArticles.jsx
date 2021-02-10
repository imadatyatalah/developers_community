import { fetcher, BASE_URL } from "../../config";

export const getUserArticles = async (userName) => {
  const userArticles = await fetcher(
    `${BASE_URL}articles?username=${userName}`
  );

  return userArticles;
};
