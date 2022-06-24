import React from 'react';
import styles from './UserItem.module.css';
const UserItem = ({ user }) => {
  return (
    <a className={styles.userData} href={user.html_url}>
      <p className>{user.login}</p>
      <img className={styles.avatar} src={user.avatar_url} alt="user" />
    </a>
  );
};

export default UserItem;
