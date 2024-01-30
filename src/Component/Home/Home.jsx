import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>
      <div style={{ backgroundImage: 'url("https://i.ibb.co/mDWTcwb/Group-34008.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '700px' }}>
      <Navbar></Navbar>
      <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;