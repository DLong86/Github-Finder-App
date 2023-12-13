import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Navbar from "./components/layout/Navbar";
import { About } from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <GithubState>
      <BrowserRouter>
        <div className="">
          <Navbar title="Github Finder" icon={<FaGithub />} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:login" element={<User loading={loading} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
