import React from "react";
import CollectionsOverview from "../comps/avatarsOverview";

const Shop = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default Shop;
