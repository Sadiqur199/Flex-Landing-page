import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const UserName = localStorage.getItem("username");
    const Password = localStorage.getItem("password");

    if (UserName) {
      setUsername(UserName);
    }

    if (Password) {
      setPassword(Password);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://zas71.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password,
        }),
      });

      const data = await response.json();
      console.log(data, username, password);

      if (data.status === "success") {
        console.log("Redirect Home Page");
      }
    } catch (error) {
      console.log("Error Message", error);
    }
  };
  return (
    <div className="md:mx-[500px] md:my-[50px] bg-white p-10 rounded">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-center">Welcome Back!</h1>
        <p className="text-center text-xs text-gray-500">
          Please login to your account
        </p>
      </div>
      <form onSubmit={handleLogin}>
        <label className="form-control  w-[414px]">
          <input
            type="email"
            placeholder="Enter Your Username"
            className="input input-bordered w-[414px] h-[40px]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label className="form-control  w-[414px] mt-5">
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input input-bordered w-[414px] h-[40px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <input
          type="submit"
          value="Signin"
          className="bg-[#5A5BCB] text-white w-full h-[38px] rounded mt-8"
        />
      </form>
      <div>
        <p className="flex justify-between w-full mt-5 ">
          <span className="text-gray-500 text-sm">Not a account in?</span>{" "}
          <span>
            <Link to="/signup" className="text-sm text-[#5A5BCB]">
              Register Now
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
