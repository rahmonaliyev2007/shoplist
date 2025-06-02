import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../hooks/getEnv";
import { useAuthStore } from "../../store/useToken";
import { useUserStore } from "../../store/useUser";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuthStore();
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${API}/auth`, {
      username,
      password,
    });

    if (response.status >= 200 && response.status < 400) {
      await setToken(response?.data?.token);
      await setUser(response?.data?.user);
toast.success("Succesfully!")
      navigate("/profile");
    }
    else{
      toast.error("Bad Request!")
    }
    return response?.data;
  };

  return ( 
    
    <div className="mx-auto dark:text-[white] p-[50px] max-md:p-6 max-sm:p-4 content-center min-h-[100vh]">
      <div className="max-w-[1200px] bg-[#F9FAFB] mx-auto rounded-[25px] overflow-hidden dark:shadow-dark  shadow-lg flex items-center content-center min-h-[450px] max-md:flex-col">
        <div className="w-[50%] max-md:w-[100%]  bg-[#212529] min-h-[450px] h-full px-[50px] pt-[30px] pb-[50px]">
          <div className="h-[150px] w-[140px] overflow-hidden mx-auto">
            <img
              src="./logo.png"
              alt="logo"
              className="h-[150px] w-[140px] border scale-110 mx-auto"
            />
          </div>
          <p className="text-white text-[16px] mt-[48px] mb-[16px] text-center">
            Welcome back to
          </p>
          <h2 className="text-white text-[74px] mb-[8px] max-lg:text-[54px] max-sm:text-[48px] text-center">
            Shopping List
          </h2>
        </div>
        <div className="w-[50%] max-md:w-[100%] bg-[#F9FAFB] min-h-[450px] h-full p-[50px] max-md:p-10 max-sm:px-4">
          <form action="" onSubmit={onSubmit}>
            <h2 className="relative text-[30px] text-violet-700 w-[100px] mx-auto text-center font-semibold before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-[100px] before:bg-violet-700 before:scale-0 hover:before:scale-100  before:duration-300 cursor-pointer">
              Sign In
            </h2>
            <div className="flex flex-col gap-2 mt-3">
              <label
                htmlFor=""
                className="text-[15px] text-[#212529] font-medium"
              >
                Username
              </label>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="Enter Your Username"
                className="w-full h-[40px] py-[6px] px-[12px] duration-300 bg-[#F9FAFB] border focus:shadow-[0px_2px_8px_3px_#8b3fd1] outline-none shadow-lg rounded-[6px] text-[#212529]"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label
                htmlFor=""
                className="text-[15px] text-[#212529] font-medium "
              >
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Enter Your Password"
                className="w-full h-[40px] py-[6px] px-[12px] border shadow-lg outline-none rounded-[6px] text-[#212529] bg-[#F9FAFB] focus:shadow-[0px_2px_8px_3px_#8b3fd1]"
              />
            </div>
            <button className="w-full h-[38px] text-white bg-violet-700 border border-violet-900  duration-300 cursor-pointer rounded-[25px] mt-4 mb-5 hover:shadow-[0px_2px_8px_3px_#8b3fd1]">
              Sign In
            </button>
          </form>
          <p>
            No accaunt yet?{" "}
            <Link
              to="/register"
              className="text-violet-700 underline cursor-pointer duration-300 hover:text-[#005fee]"
            >
              Create One
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Login);
