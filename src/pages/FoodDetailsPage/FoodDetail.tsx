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
          <h1 className={styles.title}>name</h1>
          <div className={styles.location}>
            <p>location</p>
          </div>
          <h3>Description</h3>
          <p>description</p>
          <h3>Rewiews</h3>

          <button className={styles.book_btn}>Book Now</button>
        </div>
      </div>
  );
};

export default FoodDetail;
