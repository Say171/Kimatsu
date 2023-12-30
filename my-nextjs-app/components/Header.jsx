// components/Header.jsx
import React from 'react';
import Nav from './Nav';
import styles from '../styles/style.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>やぁ |ω・｀）ﾉ ﾔｧ</h1>
      <Nav />
    </header>
  );
}

export default Header;
