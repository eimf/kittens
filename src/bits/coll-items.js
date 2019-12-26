import React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/actions";
import CustomButton from "./aButton";

const CollItems = ({ avatarCollectionId, items, addItem }) => {
  return (
    <div className="coll-prew">
      {items
        .filter((itm, idx) => idx < 4)
        .map(item => (
          <div key={item.id}>
            <div>
              <img
                src={`https://robohash.org/meow${item.id}?set=set${avatarCollectionId}&size=180x180`}
                alt=""
              />
              <span>{item.name}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
              Add to cart
            </CustomButton>
          </div>
        ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollItems);
