import React from "react";
import { withRouter } from "react-router-dom";
import "./styles/hItem.scss";

const MenuItem = ({ id, name, username, history, match }) => {
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${username}`)}
    >
      <img
        src={`https://robohash.org/meow${id}?set=set4&size=180x180`}
        alt=""
      />
      <div className="content">
        <div className="title">{username}</div>
        <span className="subtitle">{name}</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
