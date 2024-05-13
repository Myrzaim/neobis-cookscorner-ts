import React from 'react';
import styles from './greet.module.scss';
import logo from '../../assets/images/logo.svg';

const GreetPage = () => {
  return (
      <div className={styles.container}>
          <img src={logo} alt="logo" />
          <h3>CooksCorner</h3>
    </div>
  )
}

export default GreetPage