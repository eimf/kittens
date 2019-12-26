import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../redux/actions";
import { selectCartItemsCount } from "../redux/selectors/cart";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import "./styles/cartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <div className="cart-icon" onClick={() => toggleCartHidden()}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemsCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
