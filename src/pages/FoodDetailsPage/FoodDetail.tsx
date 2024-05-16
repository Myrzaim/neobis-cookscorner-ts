import React from "react";
import styles from "./foodDetail.module.scss";
import foodImg from "../../assets/images/foodImg.svg";
import back from "../../assets/icons/back.svg";

const FoodDetail = () => {
  return (
    <div className={styles.container}>
        <img src={foodImg} alt="backimg" />
      <button className={styles.back__btn}>
        <img src={back} alt="back" />
      </button>

        <div className={styles.container__description}>
          <h1 className={styles.title}>Ainsley’s Jerk Chicken</h1>
          
              <p>by Ainsley Harriott</p>
              <div className={styles.location}>
            <img className={styles.locationImg} src={back} alt="location" />
            <p>min</p>
          </div>
          <h3>Rewiews</h3>

        </div>
      </div>
  );
};

export default FoodDetail;
