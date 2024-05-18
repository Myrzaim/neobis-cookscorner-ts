import React from "react";
import Category from "../../components/Category/Category";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./homePage.module.scss";

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <Navbar /> */}
        <h1>Hi, Sarthak. UI Designer & Cook</h1>
        <Category />
      </div>
    </>
  );
};

export default HomePage;
