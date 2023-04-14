import { useState } from "react";
import MinkButton from "./MinkButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import { linksAtom } from "../recoil/atom/linksAtom";
import { fetchLinks } from "./Links";
import { showFormAtom } from "../recoil/atom/showFormAtom";

const NewLinkForm = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [links, setLinks] = useRecoilState(linksAtom);
  const setShowForm = useSetRecoilState(showFormAtom);

  const onSubmitHandler = () => {
    if (name === "" || link === "") return;
    const updatedLinks = [...links, { name, link }];
    chrome.storage.sync.set({ links: updatedLinks }, () => {
      fetchLinks(setLinks);
    });
    setName("");
    setLink("");
    setShowForm(false);
  };

  return (
    <form className="mb-2 border-b">
      <div>
        <label htmlFor="name" className="mb-1 text-sm text-gray-900">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          placeholder="Eg: Github"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="link" className="mb-1 text-sm text-gray-900">
          Link
        </label>
        <input
          type="text"
          id="link"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          placeholder="Eg: https://github.com/codediodeio"
          required
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="my-2">
        <MinkButton title="Submit" onClick={onSubmitHandler} />
      </div>
    </form>
  );
};

export default NewLinkForm;
