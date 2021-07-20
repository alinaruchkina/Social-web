import React from 'react';
import styles from './Header.module.css';
const Header = (props) => {
  return (
    <header className={styles.header}>
      {props.number}
      <img src="https://w3schoolsrus.github.io/images/img_5terre.jpg" alt="kartinka" />
    </header>
  );
};
export default Header;
