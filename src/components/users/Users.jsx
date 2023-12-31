import { useContext } from "react";
import UserItem from "./UserItem";
import { Spinner } from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

function Users() {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-3 mx-auto">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
