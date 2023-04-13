import { atom, selector } from "recoil";
import { LinkItem } from "../../components/Link";

let links: any[] = [];
chrome.storage.sync.get(["links"], (res) => {
  res.links.forEach((link: LinkItem) => {
    links.push(link);
  });
});

export const linksAtom = atom({
  key: "links",
  default: links,
});
