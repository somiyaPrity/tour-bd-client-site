import React from 'react';
import Packages from './Packages/Packages';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <div id='home'>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Packages></Packages>
      <Footer></Footer>
    </div>
  );
};

export default Home;
