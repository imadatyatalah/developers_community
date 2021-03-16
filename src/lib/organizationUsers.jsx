import { fetcher, BASE_URL } from "../../config"

export const getOrganizationUsers = async (userName) => {
  const organizationUsers = await fetcher(
    `${BASE_URL}organizations/${userName}/users`
  )

  return organizationUsers
}
