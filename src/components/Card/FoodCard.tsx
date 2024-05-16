import React from "react";
import styles from "./foodCard.module.scss";
import foodImg from "../../assets/images/food.svg";

const FoodCard = () => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={foodImg} alt="foodImg" />
      <div className={styles.card__info}>
        <h3>Egg Omlet</h3>
              <p>by Ainsley Harriott</p>
            c
      </div>
    </div>
  );
};

export default FoodCard;
