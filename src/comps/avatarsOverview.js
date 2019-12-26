import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection from "../bits/collection";
import { selectAvatarsCollections } from "../redux/selectors/avatars";

const AvatarsOverview = ({ avatarsSections }) => (
  <div>
    <h1 className="title">Shop</h1>
    {avatarsSections.map((avatarSection, idx) => (
      <Collection key={idx} avatarSection={avatarSection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  avatarsSections: selectAvatarsCollections
});

export default connect(mapStateToProps)(AvatarsOverview);
