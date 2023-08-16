import { observable } from "@legendapp/state";
import { SocialMediaData, WebsitesData, generateLinkList } from "./data";


export const name = observable("");
export const description = observable("");
export const imageUrl = observable("");
export const services = observable([
  {
    id: 0,
    name: "Service 1",
    description: "",
    image: "",
    price: "0",
    tags: [] as string[],
  },
]);
export const socialMedia = observable(generateLinkList(SocialMediaData));
export const websites = observable(generateLinkList(WebsitesData));

