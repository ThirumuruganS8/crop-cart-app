import { Fragment } from "react";
// import mealsPic from "../../assests/meals.jpg";
import med1 from "../../assests/agri4.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>CropCart</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      \
      <div className={classes["main-image"]}>
        <img src={med1} alt="table full of good meals" />
      </div>
    </Fragment>
  );
};

export default Header;
