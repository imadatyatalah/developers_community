import { fetcher, BASE_URL } from "../../config"

export const getArticles = async () => {
  const articles = await fetcher(`${BASE_URL}articles`)

  return articles
}
