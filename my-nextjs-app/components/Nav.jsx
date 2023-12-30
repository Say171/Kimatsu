// components/Nav.jsx
import React from 'react';
import Link from 'next/link';
import styles from '../styles/style.css';

const Nav = () => {
  return (
    <nav id="g_navi">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
