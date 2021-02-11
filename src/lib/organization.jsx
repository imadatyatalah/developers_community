import { fetcher, BASE_URL } from "../../config";

export const getOrganization = async (userName) => {
  const organization = await fetcher(`${BASE_URL}organizations/${userName}`);

  return organization;
};
