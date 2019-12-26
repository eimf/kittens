import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/selectors/user";
import { selectCartHidden } from "../redux/selectors/cart";
import { auth } from "../firebase/firebase";
import CartIcon from "./cart-icon";
import CartDropdown from "./cart-dropdown";
import "./styles/header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <div className="no-options">
        <Link to="/">
          <img
            className="logo"
            src="https://robohash.org/21?set=set3&size=80x80"
            alt="logo"
          />
        </Link>
      </div>
      <div className="options">
        <Link to="/shop">
          <h2>Shop</h2>
        </Link>
        {currentUser ? (
          <h2 className="option" onClick={() => auth.signOut()}>
            Sign Out
          </h2>
        ) : (
          <Link className="option" to="/signIn">
            <h2>Sign In</h2>
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
