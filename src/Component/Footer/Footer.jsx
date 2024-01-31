import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";



const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-11 bg-[#00193D] text-primary-content">
  <aside>
  <img src="https://i.ibb.co/T4VbX75/1.png" className='w-[120px] h-[50px] text-white' alt="" />
<p className='md:w-[500px] mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque.</p>
  <nav>
    <div className="grid grid-flow-col gap-4">
    <AiFillTwitterCircle size={30} className='text-white'/>
    <TiSocialLinkedinCircular size={30} className='text-white'/>
    <FaFacebook size={30} className='text-white' />

    </div>
  </nav>
  <hr className='md:w-[1216px] mt-5 mb-5'/>

    <p className='font-bold'>© All right reserved by <span className='text-[#F60E0E]'>MAAC</span></p>
  </aside> 

</footer>
    </div>
  );
};

export default Footer;