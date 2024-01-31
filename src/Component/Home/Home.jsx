import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
import About from '../About/About';

const Home = () => {
  return (
    <div>
      <div style={{ backgroundImage: 'url("https://i.ibb.co/mDWTcwb/Group-34008.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '1200px' }}>
      <Navbar></Navbar>
      <Banner></Banner>
      </div>
      <div className='mt-[650px]'>
      <ProductFeatures></ProductFeatures>
      </div>
      <div style={{ backgroundImage: 'url("https://i.ibb.co/mDWTcwb/Group-34008.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '700px' }}>
        <About></About>
      </div>
    </div>
  );
};

export default Home;