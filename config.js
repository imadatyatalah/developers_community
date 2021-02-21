export default {
  title: "Developers Community",
  author: {
    name: "Imad Atyat-Alah",
  },
  description:
    "Developers Community uses dev.to api endpoint to fetch data from, You can call it dev.to clone!",
};

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const BASE_URL = "https://dev.to/api/";

export const MAX_WIDTH = "1440px";

export const links = [
  { title: "Home", href: "/" },
  { title: "Reading List", href: "/reading-list" },
  { title: "Listing", href: "/listing" },
  { title: "Podcasts", href: "/podcasts" },
  { title: "Videos", href: "/videos" },
  { title: "Tags", href: "/tags" },
];
