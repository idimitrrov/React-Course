import React from "react";
import ReposItem from "./ReposItem";
import User from "../users/User";

const Repos = ({ repos }) => {
  return repos.map((repo) => <ReposItem repo={repo} key={repo.id} />);
};

export default Repos;
