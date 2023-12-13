import { useContext, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import GithubContext from "../../context/github/githubContext";

function Search({ showUsers }) {
  const [text, setText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const githubContext = useContext(GithubContext);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      setShowAlert(false);
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="w-[97%] my-4 mt-8 mx-auto">
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        {showAlert && (
          <div
            className="flex justify-between w-full rounded-md bg-gray-200 text-rose-600 pl-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 duration-200"
            onClick={githubContext.clearUsers}
          >
            <div className="flex items-center gap-1">
              <AiOutlineExclamationCircle /> Please enter a name
            </div>
            <IoCloseCircleOutline
              size={30}
              className="mr-2 text-gray-800"
              onClick={() => setShowAlert(false)}
            />
          </div>
        )}
        <input
          type="text"
          className="w-full border-2 px-2 rounded-md"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="block w-full rounded-md bg-black text-white py-1 cursor-pointer hover:bg-gray-800 duration-200"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="block w-full rounded-md bg-gray-400 text-white py-1 my-2 cursor-pointer hover:bg-gray-200 hover:text-gray-700 duration-200"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default Search;
