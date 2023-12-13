import React from "react";
import { Link } from "react-router-dom";

function Navbar({ title, icon }) {
  return (
    <nav className="w-full h-12 bg-rose-700 text-white px-10 flex items-center justify-between">
      <div className="text-xl font-bold flex items-center gap-2">
        {icon}
        <h1>{title}</h1>
      </div>

      <ul className="flex flex-row items-center gap-4 font-semibold text-lg capitalize">
        <li className="hover:opacity-80 duration-150">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:opacity-80 duration-150">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
