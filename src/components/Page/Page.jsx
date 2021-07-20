import React from 'react';
import styles from './Page.module.css';

const Page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.user_info}>
        <img
          className={styles.image}
          src="http://www.wpkixx.com/html/winku-dark/images/resources/friend-avatar9.jpg"
          alt="my image"
        />
        <div className={styles.user_page}>
          <div className={styles.user}>My Page</div>
          <div className={styles.picture}>
            <img
              className={styles.sms}
              src="https://img.icons8.com/material-sharp/452/whatsapp--v1.png"
              alt="sms"
            />
            <div className={styles.message}> Messages</div>
          </div>
          <div className={styles.photo}>
            <img
              className={styles.alarm}
              src="https://image.flaticon.com/icons/png/512/107/107822.png"
              alt="alarm"
            />
            <div> Notifications</div>
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <button className={styles.like}>Likes</button>
        <button className={styles.views}>Views</button>
      </div>
    </div>
  );
};
// test
export default Page;
