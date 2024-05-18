import React from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import styles from "./registration.module.scss";

const RegistrationPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__welcome}>
        <div className={styles.container__welcome__block}>
          <p>
            Sign up for delicious<span> Discoveries!</span>
          </p>
        </div>
        <div className={styles.container__form}>
          <RegistrationForm />
          <p className={styles.signup}>
            Already have an account?{" "}
            <Link to={"/signin"} style={{ textDecoration: "none" }}>
              <span>Sign In Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
