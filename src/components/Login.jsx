import React from "react";
import logimg from "../assests/logimg.png";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const handlecilck = () => {
    navigate("/Otp");
  };
  return (
    <div className="grid bg-white grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-gray-150 flex  flex-col justify-center">
        <form className="max-w-[450px] w-full mx-auto p-8 px-8 rounded-lg ">
          <h2 className="text-4xl dark:text-dark font-medium font-bold-center">
            Welcome to Systempackage
          </h2>
          <br></br>
          <div class=" rounded flex m-3  bg-gray-200">
            <div class=" rounded flex-1 p-2">Username</div>
            <div class=" flex-2 ">
              <select
                className="rounded focus:outline-none max-w-[140px] h-[38px]"
                name="cars"
                id="cars"
              >
                <option value="@head.design">@head.design</option>
                <option value="@User">User</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col  py-2">
            <input
              className="p-2 rounded-lg
             bg-gray-150 mt-2 p-2 focus:border-blue-500 bg-gray-200 focus:bg-gray-200 focus:outline-none"
              type="password"
              placeholder="Enter password"
              name="password"
            />
          </div>
          <div className="flex justify-between py-2 ">
            <p className="flex item-center ">
              <input className="mr-2 " type="checkbox" /> Remember Me
            </p>
          </div>
          <button
            onClick={handlecilck}
            className="w-full my-5 py-2 bg-blue-600 shadow-lg shodow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
          >
            Next
          </button>
          <div className="flex  justify-center text-gray-400 py-2 ">
            <p className=" text-blue-600 ">Forgot your Password</p>
          </div>
          <div className="   mt-12 ml-10 p-0 px-0 ml-0 justify-start">
            <br />
            <p className="mt-12">
              Not member?{" "}
              <span className="text-blue-700 font-medium">Create account</span>
            </p>
          </div>
        </form>
      </div>

      <div className="hidden sm:block max-w-md   ">
        <br />
        <div className=" flex  ml-0 z-40 max-w-[450px] max-h-[600px]  absolute transform mt-0 p-2  h-full w-full  mx-auto  bg-blue-600 p-0 px-0 rounded-3xl flex flex-col ">
          <div className="p-0 px-0">
            <img
              className="rounded-3xl h-[300px] w-full "
              src={logimg}
              alt="img"
            />
          </div>
          <div className="  w-[400px] mt-4 h-full justify-between    ">
            <div className="  align-right">
              <span className="rounded ml-10 mb-6 bg-black px-2 text-white">
                NEW
              </span>
            </div>

            <div className="mt-2 mb-7">
              <h3 className="text-3xl ml-10  dark:text-white font-bold font-bold-center">
                Developer handoff improvement
              </h3>
            </div>

            <div className="mt-2 ">
              <p className=" ml-10 dark:text-white mt-2  font-bold-center">
                You'll now seea highlight around Symbols on the Canvas and in
                the Inspector.
              </p>
            </div>
            <div className="flex ml-10">
              <h1 className="dark:text-white text-6xl ">.</h1>
              <h1 className=" text-blue-400 text-6xl ">.</h1>
              <h1 className="text-blue-400 text-6xl ">.</h1>
              <h1 className="text-blue-400 text-6xl ">.</h1>
              <h3 className="text-white absolute   ">Share</h3>
            </div>
          </div>
        </div>
        <div className=" flex   ml-5 z-30 rotate-6 max-w-[450px] max-h-[400px]  absolute transform mt-5  h-full w-full  mx-auto  bg-blue-700 p-0 px-0 rounded-3xl flex flex-col "></div>
        <div className=" flex   ml-10 z-20  rotate-12 max-w-[450px] max-h-[400px]  absolute transform mt-10  h-full w-full  mx-auto  bg-blue-900 p-0 px-0 rounded-3xl flex flex-col "></div>
      </div>
    </div>
  );
}
