import React from 'react';
import styles from './UserCard.module.css';
const UserCard = (props) => {
  return (
    <div className={styles.main}>
      <img className={styles.user_image} src={props.userImage} alt="user photo" />
      <div className={styles.user_description}>
        <div> {props.userDescription}</div>
        <div className={styles.group_message}>
          <div> {props.Message} </div>
          <div className={styles.group_call}> {props.groupCall} </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
