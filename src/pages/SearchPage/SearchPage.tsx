import React, { useState } from "react";
import styles from "./search.module.scss";

interface onClickData {
  selected: string;
}
const SearchPage = () => {
  const [active, setActive] = useState("recipe");

  const handleClick = (s: onClickData) => {
    setActive(s.selected);
  };

  return (
    <div className={styles.container}>
      <h2>What to eat today?</h2>
      <div className={styles.container__category}>
        <button
          className={
            active === "chef"
              ? styles.container__active
              : styles.container__notActive
          }
          onClick={() => handleClick({ selected: "chef" })}
        >
          Chefs
        </button>
        <button
          className={
            active === "recipe"
            ? styles.container__active
            : styles.container__notActive
          }
          onClick={() => handleClick({ selected: "recipe" })}
        >
          Recipes
        </button>
      </div>
      <div className={styles.container__search}>
        <input
          type="text"
          placeholder={active === "chef" ? "Search chefs" : "Search recipes"}
        />
        <i className="fa fa-search search-icon"></i>
      </div>
      <button className={styles.container__add}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22ZM12.75 9C12.75 8.80109 12.671 8.61032 12.5303 8.46967C12.3897 8.32902 12.1989 8.25 12 8.25C11.8011 8.25 11.6103 8.32902 11.4697 8.46967C11.329 8.61032 11.25 8.80109 11.25 9V11.25H9C8.80109 11.25 8.61032 11.329 8.46967 11.4697C8.32902 11.6103 8.25 11.8011 8.25 12C8.25 12.1989 8.32902 12.3897 8.46967 12.5303C8.61032 12.671 8.80109 12.75 9 12.75H11.25V15C11.25 15.1989 11.329 15.3897 11.4697 15.5303C11.6103 15.671 11.8011 15.75 12 15.75C12.1989 15.75 12.3897 15.671 12.5303 15.5303C12.671 15.3897 12.75 15.1989 12.75 15V12.75H15C15.1989 12.75 15.3897 12.671 15.5303 12.5303C15.671 12.3897 15.75 12.1989 15.75 12C15.75 11.8011 15.671 11.6103 15.5303 11.4697C15.3897 11.329 15.1989 11.25 15 11.25H12.75V9Z"
            fill="#FAFAFA"
          />
        </svg>
        Add your recipe
      </button>
    </div>
  );
};

export default SearchPage;
