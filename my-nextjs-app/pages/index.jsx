// pages/index.jsx
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div id="home">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <Main />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
