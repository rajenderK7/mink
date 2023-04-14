import Link from "./Link";
import MinkButton from "./MinkButton";
import { copyToClipboard } from "../utils/copyToClipboard";
import { useRecoilState } from "recoil";
import { linksAtom } from "../recoil/atom/linksAtom";

export const fetchLinks = (setLinks: any) => {
  chrome.storage.sync.get(["links"], (res) => {
    setLinks(res.links);
    console.log("menlo");
  });
};

const Links = () => {
  const [links, setLinks] = useRecoilState(linksAtom);

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
        {links.length > 0 && (
          <>
            <h1 className="font-medium text-green-700">Click a link to copy</h1>
            <MinkButton title="Copy all" onClick={copyAll} />
          </>
        )}
        {/* Button to copy all the links available */}
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
        {links.length == 0 && (
          <p className="mb-1 text-center">No items added yet. 😃</p>
        )}
      </div>
    </>
  );
};

export default Links;
