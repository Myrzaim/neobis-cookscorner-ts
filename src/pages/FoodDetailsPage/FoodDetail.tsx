import React from "react";
import styles from "./foodDetail.module.scss";
import foodImg from "../../assets/images/foodImg.svg";
import back from "../../assets/icons/back.svg";
import time from "../../assets/icons/time.svg";
import { Link } from "react-router-dom";

const FoodDetail = () => {

  return (
    <div className={styles.container}>
      <img src={foodImg} alt="foodimg" />
      <Link to={'/'}>
      <button className={styles.back__btn}>
        <img src={back} alt="back" />
        </button>
        </Link>

      <div className={styles.container__description}>
        <h1 className={styles.container__description_title}>
          Ainsley’s Jerk Chicken
        </h1>
<Link to={'/author'}>
        <p className={styles.container__description_author}>
          by Ainsley Harriott
          </p>
          </Link>
        <div className={styles.container__description_time}>
          <img src={time} alt="time" />
          <p>20-30 min</p>
        </div>
        <span className={styles.container__description_level}>easy</span>

        <div className={styles.container__description_svg}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 7.33331L15.28 8.02665C15.3732 8.12343 15.4851 8.20041 15.6088 8.25299C15.7325 8.30557 15.8655 8.33267 16 8.33267C16.1344 8.33267 16.2674 8.30557 16.3911 8.25299C16.5148 8.20041 16.6267 8.12343 16.72 8.02665L16 7.33331ZM12.568 24.4293C10.5466 22.836 8.33729 21.28 6.58396 19.3066C4.86663 17.3706 3.66663 15.1133 3.66663 12.1826H1.66663C1.66663 15.7373 3.14663 18.4493 5.08929 20.6346C6.99596 22.7813 9.42796 24.5013 11.3293 26L12.568 24.4293ZM3.66663 12.1826C3.66663 9.31598 5.28663 6.91065 7.49863 5.89865C9.64796 4.91598 12.536 5.17598 15.28 8.02665L16.72 6.64131C13.4666 3.25865 9.68529 2.69998 6.66663 4.07998C3.71463 5.43065 1.66663 8.56665 1.66663 12.1826H3.66663ZM11.3293 26C12.0133 26.5386 12.7466 27.112 13.4893 27.5466C14.232 27.98 15.08 28.3333 16 28.3333V26.3333C15.5866 26.3333 15.1013 26.1733 14.4986 25.82C13.8946 25.468 13.2693 24.9826 12.568 24.4293L11.3293 26ZM20.6706 26C22.572 24.5 25.004 22.7826 26.9106 20.6346C28.8533 18.448 30.3333 15.7373 30.3333 12.1826H28.3333C28.3333 15.1133 27.1333 17.3706 25.416 19.3066C23.6626 21.28 21.4533 22.836 19.432 24.4293L20.6706 26ZM30.3333 12.1826C30.3333 8.56665 28.2866 5.43065 25.3333 4.07998C22.3146 2.69998 18.536 3.25865 15.28 6.63998L16.72 8.02665C19.464 5.17731 22.352 4.91598 24.5013 5.89865C26.7133 6.91065 28.3333 9.31465 28.3333 12.1826H30.3333ZM19.432 24.4293C18.7306 24.9826 18.1053 25.468 17.5013 25.82C16.8986 26.172 16.4133 26.3333 16 26.3333V28.3333C16.92 28.3333 17.768 27.98 18.5106 27.5466C19.2546 27.112 19.9866 26.5386 20.6706 26L19.432 24.4293Z"
              fill="#343434"
            />
          </svg>
          <span>12 likes</span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 21.4533V14.7973C28 9.07729 28 6.21996 26.2427 4.44263C24.4853 2.66663 21.656 2.66663 16 2.66663C10.3427 2.66663 7.51467 2.66663 5.75733 4.44263C4 6.21996 4 9.07996 4 14.7973V21.4546C4 25.5826 4 27.648 4.97867 28.5493C5.44533 28.98 6.03467 29.2506 6.66267 29.3226C7.97867 29.4733 9.516 28.1133 12.5893 25.3946C13.9493 24.1933 14.628 23.592 15.4133 23.4346C15.8 23.3546 16.2 23.3546 16.5867 23.4346C17.3733 23.592 18.052 24.1933 19.4107 25.3946C22.484 28.1133 24.0213 29.4733 25.3373 29.3213C25.964 29.2506 26.5547 28.98 27.0213 28.5493C28 27.648 28 25.5826 28 21.4533Z"
              stroke="#343434"
              stroke-width="2"
            />
            <path
              opacity="0.5"
              d="M20 8H12"
              stroke="#343434"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <h5>Description</h5>
        <p className={styles.container__description_text}>
          You pick up your palette knife and then work that into. Give your meat
          a good old rub. That’s it, nice and hot, hot and spicy meat. He-he
          boy...You pick up your palette knife and then work that into. Give
          your meat a good old rub. That’s it, nice and hot, hot and spicy meat.
          He-he boy...You pick up your palette knife and then work that into.
          Give your meat a good old rub. That’s it, nice and hot, hot and spicy
          meat. He-he boy...
        </p>
              <h5>Ingredients</h5>
              <div className={styles.container__description_ingredients}>
                  <span>Chicken</span>
                  <span>1kg</span>
              </div>
              <div className={styles.container__description_ingredients}>
                  <span>Chicken</span>
                  <span>1kg</span>
              </div>
      </div>
    </div>
  );
};

export default FoodDetail;
