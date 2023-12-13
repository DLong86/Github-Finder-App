import React from "react";

export const About = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold my-4">About This App</h1>
      <p>App to search Github users</p>
      <p>
        Version: <span className="text-gray-600 font-bold">1.0.0</span>
      </p>
    </div>
  );
};
