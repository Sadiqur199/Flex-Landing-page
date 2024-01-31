import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar  px-10">
        <div className="navbar-start">
          <Link to="/">
            <img
              src="https://i.ibb.co/8YpdgCR/Whats-App-Image-2024-01-31-at-02-45-35-c027b4ee-removebg-preview.png"
              className="w-[120px] h-[50px]"
              alt=""
            />
          </Link>
        </div>

        <div className="navbar-end">
          <Link to="/login" className="mr-5">
            <button className="btn btn-active bg-[#0052CC] text-white hover:bg-[#0052CC] w-[110px]">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-active bg-white text-[#0052CC]  border-[#0052CC] border-2 hover:bg-white hover:border-[#0052CC]">
              Registration
            </button>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
