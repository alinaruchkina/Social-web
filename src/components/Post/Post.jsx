import React, { useState } from 'react';
import style from './Post.module.css';
import user from '../../assets/userPhoto.jpg';
import { useDispatch } from 'react-redux';

function Post({ post }) {
  const dispatch = useDispatch();
  const [disLike, setDisLike] = useState(post.amountDislike);
  const [like, setLike] = useState(post.amountLike);
  return (
    <div className={style.main}>
      <div className={style.username}>
        <img className={style.image} src={post.userPhoto ? post.userPhoto : user} alt="my image" />
        <div className={style.data_post}>
          <div className={style.name}>{post.userName}</div>
          <div className={style.data}>Published: {post.postData}</div>
        </div>
      </div>
      <div>
        <div className={style.description}>{post.description}</div>
      </div>
      <div className={style.reaction}>
        <div className={style.View}>views: {post.amountView}</div>
        <div className={style.Like} onClick={() => setLike(like + 1)}>
          like: {like}
        </div>
        <div className={style.Dislike} onClick={() => setDisLike(disLike + 1)}>
          dislike: {disLike}
        </div>
      </div>
    </div>
  );
}

export default Post;
