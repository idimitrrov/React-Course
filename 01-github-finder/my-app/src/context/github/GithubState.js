import React, { useReducer } from "react";
import axios from "axios";
import githubReducer from "./githubReducer";
import GithubContext from "./GithubContext";

import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SET_ERROR,
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setError();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Get User

  const getUser = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };
  // Get Repos
  const getUserRepos = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:5&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };
  // Clear Users
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };
  // Set Error
  const setError = () => dispatch({ type: SET_ERROR });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
