import { useState } from "react";
import { Link } from "react-router-dom";

function UserItem({ user }) {
  return (
    <div className="w-[90%] flex flex-col items-center justify-center shadow-sm py-4 m-1 mx-auto border gap-1 rounded-md">
      <img src={user.avatar_url} alt="" className="rounded-full w-14" />
      <h3 className="text-lg">{user.login}</h3>
      <div className="">
        <Link
          to={`/user/${user.login}`}
          className="my-1 bg-gray-800 text-white px-2 py-1 hover:text-gray-500 rounded-sm"
        >
          More
        </Link>
      </div>
    </div>
  );
}

export default UserItem;
