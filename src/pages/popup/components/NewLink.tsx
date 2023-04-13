import { useState } from "react";

const NewLink = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  return (
    <div className="mb-2">
      <div>
        <label htmlFor="title" className="mb-1 text-sm text-gray-900">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
          placeholder="Eg: Github"
          required
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
        />
      </div>
    </div>
  );
};

export default NewLink;
