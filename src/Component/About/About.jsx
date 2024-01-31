import React from "react";
import { LuMonitorSmartphone } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { GiTrophyCup } from "react-icons/gi";

const About = () => {
  return (
    <div className="md:w-[1500px] h-screen ">
      <div className="md:flex md:justify-between  md:mx-[200px]">
        <div className="w-[350px] h-[350px] bg-[#F1F6FF] mt-[120px] rounded md:block hidden">
          <img
            src="https://i.ibb.co/yXsjCjR/Pre-order-vs-delivery-1.png"
            alt=""
            className="w-[230px] h-[270px] absolute mt-[-90px] ml-[55px]"
          />
          <img
            src="https://i.ibb.co/x8BjyVv/Top-Selling-Routes-1.png"
            alt=""
            className="w-[230px] h-[270px] absolute mt-[150px] ml-[-40px]"
          />
          <img
            src="https://i.ibb.co/T1pP3GG/Group-34025.png"
            alt=""
            className="w-[230px] h-[160px] absolute ml-[170px] mt-[160px]"
          />
        </div>
        <div className="md:ml-[300px] md:mt-[120px] md:w-[500px]">
          <p className="text-sm text-[#0052CC] mb-5">About us</p>
          <h2 className="text-3xl font-bold mb-5">
            A dedicated solution for startups and enterprises
          </h2>
          <p className="mb-5 text-[#4E4E4E] md:text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          <hr className="mb-5" />
          <div className="flex ">
            <div className="avatar">
              <div className=" w-[60px] h-[60px] rounded-full mr-5">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
              <p>"Fieldx is for teams that care about their product growth."</p>
              <h5 className="font-bold mt-2">CEO, FieldX</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-[200px] md:mt-[120px] mt-5">
        <div className="md:flex md:justify-between">
          <div className=" md:mb-0 mb-1">
            <LuMonitorSmartphone className="text-[#0052CC] md:mb-2" size={30}/>
            <p className="text-[#0052CC] font-bold md:mb-2 text-xl">10+</p>
            <p className="text-[#4E4E4E]">Platforms Created</p>
          </div>

          <div className=" md:mb-0 mb-1">
            <FaPeopleGroup className="text-[#0052CC] md:mb-2" size={30}/>
            <p className="text-[#0052CC] font-bold md:mb-2 text-xl">1559+</p>
            <p className="text-[#4E4E4E]">Total Users</p>
          </div>

          <div className=" md:mb-0 mb-1">
            <CiUser className="text-[#0052CC] md:mb-2" size={30}/>
            <p className="text-[#0052CC] font-bold md:mb-2 text-xl">10+</p>
            <p className="text-[#4E4E4E]">Total Clients</p>
          </div>

          <div >
            <GiTrophyCup className="text-[#0052CC] mb-2" size={30}/>
            <p className="text-[#0052CC] font-bold mb-2 text-xl">300 Days</p>
            <p className="text-[#4E4E4E]">In Operations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
