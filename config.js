export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const BASE_URL = "https://dev.to/api/";

export const links = [
  { title: "Home", href: "/" },
  { title: "Reading List", href: "/reading-list" },
  { title: "Listing", href: "/listing" },
  { title: "Podcasts", href: "/podcasts" },
  { title: "Videos", href: "/videos" },
  { title: "Tags", href: "/tags" },
];
