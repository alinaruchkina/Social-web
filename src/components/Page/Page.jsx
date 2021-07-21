import React, { useState } from 'react';
import styles from './Page.module.css';

const Page = () => {
  const [state, setstate] = useState(true);
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
            <div className={styles.numbers}>1</div>
          </div>
          <div className={styles.photo}>
            <img
              className={styles.alarm}
              src="https://image.flaticon.com/icons/png/512/107/107822.png"
              alt="alarm"
            />
            <div className={styles.notification}> Notifications </div>

            <div className={styles.number}> 9 </div>
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <button className={state ? styles.views : styles.like} onClick={() => setstate(true)}>
          Likes
        </button>
        <button className={state ? styles.like : styles.views} onClick={() => setstate(false)}>
          Views{' '}
        </button>
      </div>
    </div>
  );
};
// test
export default Page;
