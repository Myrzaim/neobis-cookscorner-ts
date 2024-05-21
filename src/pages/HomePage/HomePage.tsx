import React from "react";
import Category from "../../components/Category/Category";
import styles from "./homePage.module.scss";

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Hi, Sarthak. UI Designer & Cook</h1>
        <Category />
      </div>
    </>
  );
};

export default HomePage;
