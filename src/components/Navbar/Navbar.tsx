import React from "react";
import logo from "../../assets/images/logo1.svg";
import home from "../../assets/icons/home.svg";
import search from "../../assets/icons/search.svg";
import person from "../../assets/icons/personAccount.svg";
import exit from "../../assets/icons/exit.svg";
import styles from "./navbar.module.scss";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.container__logo} src={logo} alt="logo" />
        <hr />
        <div className={styles.container__blocks}>
          <div>
            <div className={styles.container__block__click}>
              <img
                className={styles.container__block_img}
                src={home}
                alt="home"
              />
            </div>
            <div className={styles.container__block}>
              <img
                className={styles.container__block_img}
                src={search}
                alt="search"
              />
            </div>
            <div className={styles.container__block}>
              <img
                className={styles.container__block_img}
                src={person}
                alt="person"
              />
            </div>
          </div>

          <div className={styles.container__block__exit}>
            <img
              className={styles.container__block_img}
              src={exit}
              alt="exit"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
