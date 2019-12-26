import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../redux/selectors/avatars";
import "./styles/avatarCollection.scss";

const AvatarCollectionPage = ({ match, collection }) => {
  const { title, items, id } = collection;
  return (
    <div>
      <h2>{title}</h2>
      <div className="collection-item">
        {items.map(item => (
          <div key={item.id} className="item-content">
            <div>
              <img
                src={`https://robohash.org/meow${item.id}?set=set${id}&size=180x180`}
                alt=""
              />
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(AvatarCollectionPage);
