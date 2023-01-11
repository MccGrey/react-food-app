import React from "react";
import mealsIMG from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>MccgreyFoods</h1>
        <HeaderCartButton />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsIMG} alt="foodimg" />
      </div>
    </>
  );
};

export default Header;
