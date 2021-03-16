import { fetcher, BASE_URL } from "../../config"

export const getUserArticle = async (userName, article) => {
  const userArticle = await fetcher(
    `${BASE_URL}/articles/${userName}/${article}`
  )

  return userArticle
}
