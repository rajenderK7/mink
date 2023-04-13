import React, { MouseEventHandler } from "react";

export interface MinkButtonItem {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const MinkButton = ({ title, onClick }: MinkButtonItem) => {
  return (
    <button
      className="p-1 px-2 rounded-md font-medium bg-[#4f06c4] text-white"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default MinkButton;
