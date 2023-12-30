// components/Main.jsx
import React from 'react';
import styles from '../styles/style.css';
import Shibe from './Shibe';
import QRCodeGenerator from './QRCodeGenerator';

const Main = () => {
  return (
    <main className={styles.mainContainer}>
      <section>
        {/* Shibe */}
        <Shibe count={1} urls={true} httpsUrls={true} imageSize="500px" />
      </section>
      <section className={styles.mainSection}>
        <h2>歓迎するよ。</h2>
        <p>授業で学んだあれやこれ、気になったものを作成・追加していくサイトだよ。</p>
      </section>
      <section>
        {/* QR Code Generator */}
        <QRCodeGenerator />
      </section>
    </main>
  );
}

export default Main;
