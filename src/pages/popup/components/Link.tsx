import { BiLinkExternal } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { copyToClipboard } from "../utils/copyToClipboard";

export interface LinkItem {
  name: string;
  link: string;
}

export interface LinkProps {
  linkItem: LinkItem;
  deleteHandler: any;
}

const Link = ({ linkItem: { name, link }, deleteHandler }: LinkProps) => {
  return (
    <div className="flex justify-between items-center">
      <p
        className="block w-full py-2 border-gray-300 cursor-pointer hover:bg-gray-100 hover:text-[#4f06c4] border-b"
        onClick={() => copyToClipboard(link)}
      >
        {name}
      </p>
      <div className="flex justify-around space-x-1 items-center">
        <a href={link} target="_blank">
          <BiLinkExternal className=" text-lg hover:cursor-pointer hover:text-[#4f06c4]" />
        </a>
        <MdDelete
          onClick={() => deleteHandler(name)}
          className="text-lg hover:cursor-pointer text-red-500 hover:text-red-600"
        />
      </div>
    </div>
  );
};

export default Link;
