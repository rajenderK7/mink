import { useEffect, useState } from "react";
import Link, { LinkItem } from "./Link";
import MinkButton from "./MinkButton";
import { copyToClipboard } from "../utils/copyToClipboard";

const linkss: LinkItem[] = [
  { link: "https://github.com/rajenderK7", name: "Github" },
  { link: "https://github.com/rajenderK7", name: "LinkedIn" },
  { link: "https://github.com/rajenderK7", name: "Leetcode" },
  { link: "https://github.com/rajenderK7", name: "Codeforces" },
  { link: "https://github.com/rajenderK7", name: "YouTube" },
];

const fetchLinks = (setLinks: Function) => {
  chrome.storage.sync.get(["links"], (res) => {
    setLinks(res.links);
  });
};

const setDummy = () => {
  chrome.storage.sync.clear();
  chrome.storage.sync.set({ links: linkss }, () => {
    console.log("saved");
  });
};

const Links = () => {
  // setDummy();
  const [links, setLinks] = useState<LinkItem[]>([]);

  useEffect(() => {
    fetchLinks(setLinks);
  }, []);

  const deleteLinkHandler = (name: string) => {
    const updatedLinks = links.filter((link) => link.name !== name);
    chrome.storage.sync.set({ links: updatedLinks }, () => {
      fetchLinks(setLinks);
    });
  };

  const copyAll = () => {
    links.forEach((link) => {
      copyToClipboard(link.link);
    });
  };

  return (
    <>
      <div className="flex justify-between items-center my-1">
        <h1 className="font-medium text-green-700">Click a link to copy</h1>
        {/* Button to copy all the links available */}
        <MinkButton title="Copy all" onClick={copyAll} />
      </div>
      <div className="ml-1 my-2 text-sm font-sm max-h-[260px] bg-white scrollbar-thin scrollbar-thumb-[#4f06c4] overflow-y-scroll">
        {links.length > 0 &&
          links.map((link, idx) => {
            return (
              <Link
                key={idx}
                linkItem={link}
                deleteHandler={deleteLinkHandler}
              />
            );
          })}
        {links.length == 0 && <p>No items added yet. 😃</p>}
      </div>
    </>
  );
};

export default Links;
