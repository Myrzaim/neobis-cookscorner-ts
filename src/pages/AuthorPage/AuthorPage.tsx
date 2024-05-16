import React from "react";
import styles from "./authorPage.module.scss";
import authorImg from "../../assets/images/authorImg.svg";
import FoodCard from "../../components/Card/FoodCard";
// import back from '../../assets/icons/back';

const AuthorPage = () => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.container__back}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="24" fill="#EDEDED" />

        <g mask="url(#mask0_2148_1107)">
          <path
            d="M22.4 24.4222L27.6 29.3813C27.8444 29.6144 27.9667 29.9111 27.9667 30.2714C27.9667 30.6317 27.8444 30.9284 27.6 31.1615C27.3556 31.3946 27.0444 31.5112 26.6667 31.5112C26.2889 31.5112 25.9778 31.3946 25.7333 31.1615L19.6 25.3123C19.4667 25.1852 19.3722 25.0474 19.3167 24.8991C19.2611 24.7507 19.2333 24.5918 19.2333 24.4222C19.2333 24.2527 19.2611 24.0938 19.3167 23.9454C19.3722 23.7971 19.4667 23.6593 19.6 23.5322L25.7333 17.683C25.9778 17.4499 26.2889 17.3333 26.6667 17.3333C27.0444 17.3333 27.3556 17.4499 27.6 17.683C27.8444 17.9161 27.9667 18.2128 27.9667 18.5731C27.9667 18.9334 27.8444 19.2301 27.6 19.4632L22.4 24.4222Z"
            fill="#343434"
          />
        </g>
      </svg>
      <div className={styles.container__profile}>
        <img src={authorImg} alt="authorImg" />
        <h3>Ainsley Harriott</h3>
        <div className={styles.container__profile_info}>
          <div>
            <span>29</span>
            <p>Recipe</p>
          </div>
          <div>
            <span>29</span>
            <p>Followers</p>
          </div>
          <div>
            <span>29</span>
            <p>Following</p>
          </div>
        </div>
        <p>
          Ainsley Denzil Dubriel Harriott MBE is an English chef and television
          presenter. He is known for his BBC cooking``
        </p>
        <button>Follow</button>
      </div>
      <div className={styles.container__foodCards}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};

export default AuthorPage;