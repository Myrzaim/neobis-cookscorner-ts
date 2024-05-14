import React from "react";
import styles from "./greet.module.scss";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const GreetPage = () => {
  return (
    <div className={styles.container}>
      <Link to={"./signin"}>
        <img src={logo} alt="logo" />
      </Link>
      <h3>CooksCorner</h3>
    </div>
  );
};

export default GreetPage;
