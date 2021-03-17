import { fetcher, BASE_URL } from "../../config"

export const getArticles = async (perPage) => {
  const articles = await fetcher(`${BASE_URL}articles?per_page=${perPage}`)

  return articles
}
