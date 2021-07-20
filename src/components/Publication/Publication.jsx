import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSubscribe, setLike, setShow } from '../../redux/action/post';
import styles from './Publication.module.css';

const Publication = ({ props }) => {
  const dispatch = useDispatch();
  const userLike = useSelector((store) => store.usersPosts.like);
  const subscribe = useSelector((store) => store.usersPosts.subscribe);
  const show = useSelector((store) => store.usersPosts.show);

  const plus = (amountLike) => dispatch(setLike(amountLike + 1));
  const minus = (amountLike) => dispatch(setLike(amountLike - 1));

  const follow = () => dispatch(setSubscribe(false));
  const unfollow = () => dispatch(setSubscribe(true));
  const [state, setstate] = useState(true);

  const showSet = () => dispatch(setShow(!show));

  return (
    <div className={styles.main}>
      <button onClick={() => showSet()}>{show ? 'hidden' : 'show'}</button>
      {show && <img className={styles.image} src={props.userPhoto} alt="my image" />}
      <input className={styles.box} placeholder={props.boxDescription} />
      <div className={styles.like}>like: {userLike}</div>
      <button onClick={() => plus(userLike)}>plus</button>
      <button onClick={() => minus(userLike)}>minus</button>
      <div>
        {subscribe ? (
          <button onClick={() => follow()}>follow</button>
        ) : (
          <button onClick={() => unfollow()}>unfollow</button>
        )}
      </div>
    </div>
  );
};

export default Publication;
