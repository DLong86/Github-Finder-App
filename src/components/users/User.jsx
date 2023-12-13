import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "../layout/Spinner";
import Repos from "../../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = () => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;
  // console.log(useParams);
  let { login } = useParams();

  useEffect(() => {
    getUser(login);
    getUserRepos(login);
    // eslint-disable-next-line
  }, [login]);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <div className="w-[95%] mx-auto">
      <div className="my-4 flex">
        <Link
          to="/"
          className="bg-gray-100 py-2 px-4 mr-2 hover:bg-gray-200 duration-200"
        >
          Back to Search
        </Link>
        {hireable ? "Hireable" : ""}
      </div>
      <div className="flex items-center justify-around border border-gray-100 py-6 shadow-sm">
        <div className="flex flex-col px-10 items-center">
          <img src={avatar_url} alt={name} className=" w-32 rounded-full" />
          <h1 className="text-2xl font-bold">{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div className="">
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <button className="cursor-pointer bg-gray-900 text-white block text-center py-2 px-4 my-2 hover:bg-gray-700">
            <a href={html_url}>Visit Github Profile</a>
          </button>
          <ul className="">
            <li className="my-2">
              {login && (
                <>
                  <strong>Username: </strong> {login}
                </>
              )}
            </li>

            <li>
              {blog && (
                <>
                  <strong>Website: </strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 my-4">
        <div className="bg-blue-300 py-2 px-4 rounded-md">
          Followers: {followers}
        </div>
        <div className="bg-blue-300 py-2 px-4 rounded-md">
          Following: {following}
        </div>
        <div className="bg-blue-300 py-2 px-4 rounded-md">
          Public Repos: : {public_repos}
        </div>
        <div className="bg-blue-300 py-2 px-4 rounded-md">
          Public Gists: : {public_gists}
        </div>
      </div>
      <Repos repos={repos} className=" border border-gray-100 py-6 shadow-sm" />
    </div>
  );
};

export default User;
