import NextLink from "next/link";

const ArticleTags = ({ data }) => (
  <>
    {data.map((tag) => (
      <NextLink href={`/tag/${tag}`} key={tag}>
        <a className="tag">#{tag} </a>
      </NextLink>
    ))}
  </>
);

export default ArticleTags;
