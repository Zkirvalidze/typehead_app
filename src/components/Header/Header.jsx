import React from 'react';
import logo from '../../assets/images.png';
import styles from './Header.module.css';
export default function Header() {
  return <img src={logo} className={styles.logo} alt="github-logo" />;
}
