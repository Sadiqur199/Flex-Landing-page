import React from "react";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const UserLogin = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("https://i.ibb.co/mDWTcwb/Group-34008.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <Navbar></Navbar>
        <Login></Login>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UserLogin;
