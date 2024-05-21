import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/authForm/AuthForm';
import styles from './signin.module.scss';

const SighinPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.container__welcome}>
          <div className={styles.container__block}>
            <p>
              Welcome Back To <span>CooksCorner</span>
            </p>
          </div>
        </div>
        <div className={styles.container__form}>
                <AuthForm />
                <p className={styles.container__signup}>
        I don't have an account? <Link to={'/signup'} style={{ textDecoration: 'none' }}><span>Sign Up Now</span></Link>
      </p>
        </div>
      </div>
    );
}

export default SighinPage