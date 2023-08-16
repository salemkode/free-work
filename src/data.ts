export const SocialMediaData = [
  {
    name: "Facebook",
    placeholder: "https://facebook.com/username",
  },
  {
    name: "Twitter",
    placeholder: "https://twitter.com/username",
  },
  {
    name: "Instagram",
    placeholder: "https://instagram.com/username",
  },
  {
    name: "LinkedIn",
    placeholder: "https://linkedin.com/in/username",
  },
  {
    name: "GitHub",
    placeholder: "https://github.com/username",
  },
  {
    name: "Stack Overflow",
    placeholder: "https://stackoverflow.com/users/username",
  },
  {
    name: "Telegram",
    placeholder: "https://t.me/username",
  },
] as const;
export const WebsitesData = [
  {
    name: "Website",
    placeholder: "https://example.com",
  },
  {
    name: "Khamsat",
    placeholder: "https://khamsat.com/user/username",
  },
  {
    name: "Fiverr",
    placeholder: "https://fiverr.com/username",
  },
  {
    name: "Mostaql",
    placeholder: "https://mostaql.com/u/username",
  },
  {
    name: "Upwork",
    placeholder: "https://upwork.com/username",
  },
  {
    name: "Freelancer",
    placeholder: "https://freelancer.com/username",
  },
] as const;


export type UrlsItem = {
  name: string;
  placeholder: string;
};

export type UpdatedList<T extends UrlsItem[] | Readonly<Readonly<UrlsItem>[]>> =
  Record<T[number]["name"], string>;

export const generateLinkList = <TItems extends UrlsItem | Readonly<UrlsItem>>(
  items: TItems[] | Readonly<TItems[]>
): UpdatedList<TItems[]> => {
  return Object.assign({}, ...items.map((item) => ({ [item.name]: "" })));
};