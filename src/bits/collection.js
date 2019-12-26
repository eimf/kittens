import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItems from "./coll-items";
import "./styles/collection.scss";

const Collection = ({ avatarSection, history, match }) => {
  const {title, items, id} = avatarSection;
  return (
    <div>
      <div className="c-content">
        <h2
          className="title"
          onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
        >
          {title}
        </h2>
        <CollectionItems avatarCollectionId={id} items={items} />
      </div>
    </div>
  );
};

export default withRouter(Collection);
