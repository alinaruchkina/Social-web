import React, { useState } from 'react';
import styles from './Page.module.css';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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
          LIKES
        </button>
        <button className={state ? styles.like : styles.views} onClick={() => setstate(false)}>
          VIEWS{' '}
        </button>
      </div>
      {state ? (
        <div>
          <div>
            <div className={styles.scan}>
              <FavoriteBorderIcon style={{ color: 'green', width: '20px' }} />
              884
            </div>
          </div>

          <div className={styles.new_view}>35 New Likes This Week</div>
        </div>
      ) : (
        <div>
          <div>
            <div className={styles.scan}>
              <div className={styles.heart}>
                <RemoveRedEyeIcon style={{ color: 'green', width: '20px' }} />
              </div>
              440
            </div>
          </div>

          <div className={styles.new_like}>440 New Views This Week</div>
        </div>
      )}
    </div>
  );
};
// test
export default Page;
