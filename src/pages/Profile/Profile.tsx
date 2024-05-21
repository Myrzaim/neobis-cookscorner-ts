import React, { useState } from "react";
import styles from "./profile.module.scss";
import profileImg from "../../assets/images/profileImg.svg";
import FoodCard from "../../components/Card/FoodCard";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import avatarka from '../../assets/images/profileImg.svg';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8%",
  p: 4,
};

const Profile = () => {
  const [open, setOpen] = useState(false);
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
            I'm a passionate chef who loves creating delicious dishes with
            flair.
          </p>
          <button onClick={() => setOpen(true)}>Manage Profile</button>
        </div>
      </div>

      <div className={styles.container__recipe}>
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
           <img src={avatarka} alt="avatarka" />
            <form className={styles.modalContainer__form}>
              <label>Change your name</label>
              <input
                className={styles.modalContainer__name}
                type="text"
                value="Pancakes"
              />
              <label>Change your bio</label>
              <textarea
                className={styles.modalContainer__bio}
                readOnly={false}
                value="Im a passionate chef who loves creating delicious dishes with flair."
              ></textarea>
              <label>Add a recipe photo</label>
              <input
                className={styles.modalContainer__bio}
                type="file"
                placeholder="Pancakes"
              />

              <button> Save changes</button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Profile;
