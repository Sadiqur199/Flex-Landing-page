import React from 'react';
import { LuBox } from "react-icons/lu";


const ProductFeatures = () => {
  return (
    <div className='md:w-[1216px] md:mx-auto mb-14'>
      <div className='text-center mb-10'>
        <p className='text-[#0052CC]'>Products Features</p>
        <h1 className='text-3xl font-bold'>Make more out of your data</h1>
      </div>
      <div className='md:flex md:justify-between'>
      <div >
        <div className='md:w-[250px] h-[106px] mb-14'>
        <LuBox className='md:float-right md:ml-0 ml-2   md:mr-9  shadow-lg bg-white text-[#0052CC] ' size={35}/>
        <div className='p-3 clear-both '>
        <h2 className='text-xl font-bold md:ml-4'>Real-time analytics</h2>
        <p className='text-xs'>See product usage, sign-ins, feature metrics change as users work on your.</p>
        </div>
        </div>

        <div className='md:w-[250px] h-[106px] mb-14'>
        <LuBox className='md:float-right md:ml-0 ml-2   md:mr-9  shadow-lg bg-white text-[#0052CC] ' size={35}/>
        <div className='p-3 clear-both '>
        <h2 className='text-xl font-bold md:ml-4'>Real-time analytics</h2>
        <p className='text-xs'>See product usage, sign-ins, feature metrics change as users work on your.</p>
        </div>
        </div>

        <div className='md:w-[250px] h-[106px] mb-14'>
        <LuBox className='md:float-right md:ml-0 ml-2   md:mr-9  shadow-lg bg-white text-[#0052CC] ' size={35}/>
        <div className='p-3 clear-both '>
        <h2 className='text-xl font-bold md:ml-4'>Real-time analytics</h2>
        <p className='text-xs'>See product usage, sign-ins, feature metrics change as users work on your.</p>
        </div>
        </div>
        
      </div>
      <div className='mt-14 md:ml-0 ml-14'>
      <div className='w-[348px] h-[348.74px] bg-[#0052CC] rounded-full'>
        <img src="https://i.ibb.co/YPnd7z1/Central-phone-2.png" alt="" className='absolute mt-[-50px] h-[450px] ml-[60px] shadow-2xl rounded' />
      </div>
      </div>

      <div className='md:mt-0 mt-14'>
      <div className='md:w-[250px] h-[106px] mb-14'>
        <LuBox className=' md:ml-0 ml-2   md:mr-9  shadow-lg bg-white text-[#0052CC] ' size={35}/>
        <div className='p-3 clear-both '>
        <h2 className='text-xl font-bold'>Real-time analytics</h2>
        <p className='text-xs'>See product usage, sign-ins, feature metrics change as users work on your.</p>
        </div>
        </div>

        <div className='md:w-[250px] h-[106px] mb-14'>
        <LuBox className='md:ml-0 ml-2   md:mr-9  shadow-lg bg-white text-[#0052CC] ' size={35}/>
        <div className='p-3 clear-both '>
        <h2 className='text-xl font-bold'>Real-time analytics</h2>
        <p className='text-xs'>See product usage, sign-ins, feature metrics change as users work on your.</p>
        </div>
        </div>

        <div className='md:w-[250px] h-[106px] mb-14'>
        <LuBox className=' md:ml-0 ml-2   md:mr-9  shadow-lg bg-white text-[#0052CC] ' size={35}/>
        <div className='p-3 clear-both '>
        <h2 className='text-xl font-bold'>Real-time analytics</h2>
        <p className='text-xs'>See product usage, sign-ins, feature metrics change as users work on your.</p>
        </div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default ProductFeatures;