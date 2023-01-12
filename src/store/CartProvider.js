import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const additemToCartHasndler = (item) => {};

  const removeItemFromCartHAndler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: additemToCartHasndler,
    removeItem: removeItemFromCartHAndler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
