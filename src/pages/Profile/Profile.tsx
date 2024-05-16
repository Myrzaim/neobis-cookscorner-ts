import React, { useState } from 'react';
import styles from './profile.module.scss';
import profileImg from "../../assets/images/profileImg.svg";
import FoodCard from '../../components/Card/FoodCard';
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "8%",
    p: 4,
};
  
const Profile = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                  <button  onClick={() => setOpen(true)}>Manage Profile</button>
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
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
                <Box sx={style}>
                    <div className={styles.modalContainer}>
                      <h2>Manage Profile</h2>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 15C30 23.2845 23.2845 30 15 30C6.7155 30 0 23.2845 0 15C0 6.7155 6.7155 0 15 0C23.2845 0 30 6.7155 30 15ZM10.455 10.455C10.6659 10.2443 10.9519 10.126 11.25 10.126C11.5481 10.126 11.8341 10.2443 12.045 10.455L15 13.41L17.955 10.455C18.1683 10.2563 18.4503 10.1481 18.7418 10.1532C19.0332 10.1584 19.3113 10.2764 19.5174 10.4826C19.7236 10.6887 19.8416 10.9668 19.8468 11.2582C19.8519 11.5497 19.7437 11.8317 19.545 12.045L16.59 15L19.545 17.955C19.7437 18.1683 19.8519 18.4503 19.8468 18.7418C19.8416 19.0332 19.7236 19.3113 19.5174 19.5174C19.3113 19.7236 19.0332 19.8416 18.7418 19.8468C18.4503 19.8519 18.1683 19.7437 17.955 19.545L15 16.59L12.045 19.545C11.8317 19.7437 11.5497 19.8519 11.2582 19.8468C10.9668 19.8416 10.6887 19.7236 10.4826 19.5174C10.2764 19.3113 10.1584 19.0332 10.1532 18.7418C10.1481 18.4503 10.2563 18.1683 10.455 17.955L13.41 15L10.455 12.045C10.2443 11.8341 10.126 11.5481 10.126 11.25C10.126 10.9519 10.2443 10.6659 10.455 10.455Z" fill="#343434"/>
                      </svg>
                      <form className={styles.modalContainer__form}> 
                      <label>
                          Change your name
                      </label>
                          <input className={styles.modalContainer__form_name}  type="text" value='Pancakes' />
                          <label>
                          Change your bio
                      </label>
                      <textarea className={styles.modalContainer__form_bio}  value='Im a passionate chef who loves creating delicious dishes with flair.'></textarea>
                      <label>
                          Add a recipe photo
                      </label>
                      <input className={styles.modalContainer__form_bio} type="text" placeholder='Pancakes' />
                   
                          <button> Save changes</button>
                          </form>
                        </div>
        </Box>
      </Modal>
    </div>
  )
}

export default Profile