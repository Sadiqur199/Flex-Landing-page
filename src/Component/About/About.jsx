import React from 'react';

const About = () => {
  return (
    <div className='w-[1500px] '>
      <div className='md:flex justify-between  mx-[300px]'>
          <div className='w-[350px] h-[350px] bg-[#F1F6FF] mt-[120px] rounded'>
           <img src="https://i.ibb.co/yXsjCjR/Pre-order-vs-delivery-1.png" alt="" className='w-[230px] h-[270px] absolute mt-[-90px] ml-[55px]' />
           <img src="https://i.ibb.co/x8BjyVv/Top-Selling-Routes-1.png" alt="" className='w-[230px] h-[270px] absolute mt-[150px] ml-[-40px]' />
           <img src="https://i.ibb.co/T1pP3GG/Group-34025.png" alt="" className='w-[230px] h-[160px] absolute ml-[170px] mt-[160px]' />
        </div>
        <div className='md:ml-[300px] mt-[120px] w-[590px]'>
          <p className='text-sm text-[#0052CC] mb-5'>About us</p>
          <h2 className='text-3xl font-bold mb-5'>A dedicated solution for startups and enterprises</h2>
          <p className='mb-5 text-[#4E4E4E]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

          <hr  className='mb-5'/>
        </div>
      </div>
    </div>
  );
};

export default About;