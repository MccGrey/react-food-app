import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [
    { id: "c1", name: "sushi", amount: "2", price: "12.89" },
  ].map((item) => <li>{item.name}</li>);
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}></button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
