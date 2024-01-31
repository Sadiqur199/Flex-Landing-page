import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    id: "",
    phone: "",
    password: "",
    confirm_password: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("API/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
      } else {
        const errorData = await response.json();
        console.log(errorData.message);
      }
    } catch (error) {
      console.log("Error message", error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="md:mx-[500px] md:my-[50px] bg-white p-10 rounded">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
        <p className="text-center text-xs text-gray-500">
          Fill in the details below to create an account
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="form-control   w-[414px]">
          <div className="label"></div>
          <input
            type="text"
            name="full_name"
            placeholder="Enter Your Full Name"
            className="input input-bordered w-[414px] h-[40px]"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-control  w-[414px]">
          <div className="label"></div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-[414px] h-[40px]"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-control  w-[414px]">
          <div className="label"></div>
          <input
            type="text"
            name="id"
            placeholder="Enter Your FullName"
            className="input input-bordered w-[414px] h-[40px]"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-control  w-[414px]">
          <div className="label"></div>
          <input
            type="number"
            name="phone"
            placeholder="Enter Your MobileNo"
            className="input input-bordered w-[414px] h-[40px]"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-control  w-[414px]">
          <div className="label"></div>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="input input-bordered w-[414px] h-[40px]"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-control  w-[414px]">
          <div className="label"></div>
          <input
            type="password"
            name="confirm_password"
            placeholder="Enter Your confirm Password"
            className="input input-bordered w-[414px] h-[40px]"
            value={formData.confirm_password}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-control  w-[414px]">
          <div className="label"></div>
          <select
            className="select select-bordered  w-[414px]"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option selected>Select Your Role</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </label>

        <div className="md:w-[414px] flex">
          <input type="checkbox" checked="" className="checkbox mt-2" />
          <h1 className="ml-2 mt-2">
            I read and agree to the{" "}
            <span className="text-blue-500">
              <Link to="">Terms & Conditions</Link>
            </span>{" "}
          </h1>
        </div>
        <input
          type="submit"
          value="SignUp"
          className="bg-[#5A5BCB] text-white w-full h-[38px] rounded mt-8 mb-10"
        />
      </form>
      <div>
        <p className="flex justify-between w-full mt-5 ">
          <span className="text-gray-500 text-sm">Have a account in?</span>{" "}
          <span>
            <Link to="/login" className="text-sm text-[#5A5BCB]">
              Login Now
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
