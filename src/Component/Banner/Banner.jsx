import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
     <div className="p-14">
     <div className="text-center">
        <h1 className="font-bold text-6xl">
          Analytics that transform your <br /> product inside-out
        </h1>
        <div className="mt-10">
          <Link to="" className="mr-5">
            <button className="btn btn-active bg-[#0052CC] text-white hover:bg-[#0052CC] w-[180px] ">
            Request for Demo
            </button>
          </Link>
          <Link to="">
            <button className="btn btn-active bg-[#F0F6FF] text-[#0052CC]  border-[#0052CC] border-2 hover:bg-[#F0F6FF] hover:border-[#0052CC]">
              Download
            </button>
          </Link>
        </div>
      </div>
      <div className="drop-shadow-[0_20px_20px_#CEDEF8]">
        <img src="https://i.ibb.co/D8q49c3/tablet-1.png" alt=""  className="h-screen mt-[70px] mx-auto"/>
        <img src="https://i.ibb.co/gvHnZNQ/Group-34024.png" alt=""  className="absolute h-screen md:mt-[-600px] mt-[-260px] md:ml-[700px] ml-[150px]"/>
      </div>
     </div>
      <div className="mt-[70px]">
        <hr />
      </div>
    </div>
  );
};

export default Banner;
