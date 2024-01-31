import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
import About from '../About/About';
import Question from '../Question/Question';
import Impact from '../Impact/Impact';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <div style={{ backgroundImage: 'url("https://i.ibb.co/mDWTcwb/Group-34008.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '1200px' }}>
      <Navbar></Navbar>
      <Banner></Banner>
      </div>
      <div className='mt-[250px]'>
      <ProductFeatures></ProductFeatures>
      </div>
      <div style={{ backgroundImage: 'url("https://i.ibb.co/mDWTcwb/Group-34008.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '740px' }}>
        <About></About>
      </div>
        <Question></Question>
        <Impact></Impact>
        <Footer></Footer>
    </div>
  );
};

export default Home;