import React, { useState, useRef } from "react";
import logo from "../../assets/images/logo1.svg";
import logonotActive from "../../assets/icons/LogoNotActive.svg";
import home from "../../assets/icons/home.svg";
import homeNotActive from "../../assets/icons/homeNotActive.svg";
import search from "../../assets/icons/search.svg";
import searchNotActive from "../../assets/icons/searchNotActive.svg";
import person from "../../assets/icons/presonA.svg";
import personNotActive from "../../assets/icons/person.svg";
import exit from "../../assets/icons/exit.svg";
import styles from "./navbar.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import classnames from "classnames";

interface onClickData {
  selected: string;
}

const Navbar = () => {
  const navigate = useNavigate();
  const url = useLocation().pathname;

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
          src={url.split("/")[3] === "" ? logo : logonotActive}
          alt="logo"
        />
        <hr />
        <div className={styles.container__blocks}>
          <div>
            <div
              onClick={() => handleClick({ selected: "home" })}   
              className={classnames(
                styles.container__block,
                active === "home" ? styles.container__click : null
              )}
            >
              <img
                className={styles.container__img}
                src={active === "home" ? home : homeNotActive}
                alt="home"
              />
            </div>
            <div
              onClick={() => handleClick({ selected: "search" })}
              className={classnames(
                styles.container__block,
                active === "search" ? styles.container__click : null
              )}
            >
              <img
                className={styles.container__img}
                src={active === "search" ? search : searchNotActive}
                alt="search"
              />
            </div>
            <div
              onClick={() => handleClick({ selected: "person" })}
              className={classnames(
                styles.container__block,
                active === "person" ? styles.container__click : null
              )}
            >
              <img
                className={styles.container__img}
                src={active === "person" ? person : personNotActive}
                alt="person"
              />
            </div>
          </div>

          <div className={styles.container__exit}>
            <img className={styles.container__img} src={exit} alt="exit" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
