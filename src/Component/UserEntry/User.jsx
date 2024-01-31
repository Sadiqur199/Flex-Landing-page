import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SignUp from "../SignUp/SignUp";

const User = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("https://i.ibb.co/mDWTcwb/Group-34008.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "900px",
        }}
      >
        <Navbar></Navbar>
        <SignUp></SignUp>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default User;
