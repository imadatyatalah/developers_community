import { fetcher, BASE_URL } from "../../config"

export const getUser = async (userName) => {
  const user = await fetcher(`${BASE_URL}users/by_username?url=${userName}`)

  return user
}
