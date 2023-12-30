// pages/about.jsx
import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Shibe from '../components/Shibe';

const AboutPage = () => {
    return (
      <div id="home">
        <Header />
        <h1>てすと</h1>
        <section>
          {/* Shibe */}
          <Shibe count={1} urls={true} httpsUrls={true} imageSize="500px" />
        </section>
        <p>てすと</p>

        <p>
          てすと
        </p>
        <Footer />
      </div>
    );
  };
  
  export default AboutPage;
  