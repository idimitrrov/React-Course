import React, { useState, useContext } from "react";
import Error from "../layout/Error";
import GithubContext from "../../context/github/GithubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState("");
  const [error, hasError] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      hasError(true);
    } else {
      githubContext.searchUsers(text);
      setText("");
      hasError(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          className={error ? "error" : ""}
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        {error && <Error />}
        <input
          type="submit"
          name="Search"
          className="btn btn-dark btn-block search-btn"
        />
      </form>
      <button
        className="btn btn-light btn-block"
        onClick={githubContext.clearUsers}
      >
        Clear
      </button>
    </div>
  );
};

export default Search;
