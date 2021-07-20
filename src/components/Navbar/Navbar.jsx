import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const menu = [
    'News Feed',
    'Inbox',
    'My Pages',
    'Friends',
    'Images',
    'Videos',
    'Messages',
    'Notifications',
    'People',
    'Nearby',
    'Insights',
    'Logout',
  ];
  return (
    <nav className={styles.nav}>
      <div className={styles.widget}>Shortcuts</div>
      {menu.map((item, index) => (
        <div className={styles.menu} key={index}>
          {item}
        </div>
      ))}
    </nav>
  );
};
export default Navbar;
