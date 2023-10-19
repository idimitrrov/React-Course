import React from "react";
import PropTypes from "prop-types";
import User from "../users/User";

const ReposItem = ({ repo }) => {
  return (
    <div className="card-two">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};
export default ReposItem;
