import React from 'react';
import { useSelector } from 'react-redux';
import styles from './App.module.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Post from './components/Post/Post.jsx';
import Publication from './components/Publication/Publication.jsx';
import Page from './components/Page/Page.jsx';
const App = () => {
  const post = useSelector(({ usersPosts }) => usersPosts.post);
  const props = {
    userPhoto: 'http://www.wpkixx.com/html/winku-dark/images/resources/admin2.jpg',
    boxDescription: 'write something',
    amountLike: 1,
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <Navbar />
        <div>
          <Publication props={props} />
          {post.map((item) => (
            <div key={item.id}>
              <Post post={item} />
            </div>
          ))}
        </div>
        <Page />
      </div>
    </div>
  );
};

export default App;
