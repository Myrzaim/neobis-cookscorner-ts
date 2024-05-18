import React, { useState, useRef } from "react";
import logo from "../../assets/images/logo1.svg";
import home from "../../assets/icons/home.svg";
import homeNotActive from "../../assets/icons/search.svg";
import search from "../../assets/icons/search.svg";
import person from "../../assets/icons/personAccount.svg";
import exit from "../../assets/icons/exit.svg";
import styles from "./navbar.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import classnames from "classnames";

interface onClickData {
  selected: string;
}

const Navbar = () => {
  const navigate = useNavigate();
  const url = window.location.href;

  const [active, setActive] = useState("home");

  const handleClick = (s: onClickData) => {
    console.log(url.split("/")[3] === "");

    setActive(s.selected);
    let path = "/";
    switch (s.selected) {
      case "person": {
        path = "/profile";
        break;
      }
      case "search": {
        path = "/search";
        break;
      }
      default: {
        break;
      }
    }
    navigate(path);
  };

  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.container__logo}
          src={url.split("/")[3] === "" ? logo : search}
          alt="logo"
        />
        <hr />
        <div className={styles.container__blocks}>
          <div>
            <div
              onClick={() => handleClick({ selected: "home" })}
              className={classnames(
                styles.container__block,
                active === "home" ? styles.container__block__click : null
              )}
            >
              <img
                className={styles.container__block_img}
                src={active === "home" ? home : homeNotActive}
                alt="home"
              />
            </div>
            <div
              onClick={() => handleClick({ selected: "search" })}
              className={classnames(
                styles.container__block,
                active === "search" ? styles.container__block__click : null
              )}
            >
              <img
                className={styles.container__block_img}
                src={search}
                alt="search"
              />
            </div>
            <div
              onClick={() => handleClick({ selected: "person" })}
              className={classnames(
                styles.container__block,
                active === "person" ? styles.container__block__click : null
              )}
            >
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
