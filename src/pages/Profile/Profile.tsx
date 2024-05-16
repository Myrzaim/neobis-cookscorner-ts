import React from 'react';
import styles from './profile.module.scss';
import profileImg from "../../assets/images/profileImg.svg";
import FoodCard from '../../components/Card/FoodCard';

const Profile = () => {
  return (
      <div className={styles.container}>
          <h1>Profile</h1>
          <div className={styles.container__profile}>
                  <img src={profileImg} alt="profileImg" />
              <div>

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
                  <h3>Ainsley Harriott</h3>
        <p>
        I'm a passionate chef who loves creating delicious dishes with flair.
        </p>
                  <button>Manage Profile</button>
                  </div>
          </div>
          
          <div className={styles.container__recipe} >
              <span>My recipe</span>
              <p>Saved recipe</p>
          </div>
          <div className={styles.container__foodCards}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
           
        
       
      </div>
    </div>
  )
}

export default Profile