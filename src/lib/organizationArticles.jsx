import { fetcher, BASE_URL } from "../../config";

export const getOrganizationArticles = async (userName) => {
  const organizationArticles = await fetcher(
    `${BASE_URL}organizations/${userName}/articles`
  );

  return organizationArticles;
};
