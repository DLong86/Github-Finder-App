import React from "react";

export const Alert = ({ text }) => {
  return (
    <div className="block w-full rounded-md bg-gray-400 text-white py-1 my-2 cursor-pointer hover:bg-gray-200 hover:text-gray-700 duration-200">
      {text}
    </div>
  );
};
