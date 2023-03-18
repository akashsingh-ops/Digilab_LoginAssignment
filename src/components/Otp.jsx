import React from "react";

import logimg from "../assests/logimg.png";
import { useNavigate } from "react-router-dom";
import OTPInput, { ResendOTP } from "react-otp-input";
import react, { useEffect, useState } from "react";
export const Otp = () => {
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();
  const handlecilck = () => {
    navigate("/");
  };

  //   redirect
  useEffect(() => {
    setTimeout(() => {
      navigate("/success");
    }, 10000);
  }, []);

  //
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  //
  return (
    <div className="grid bg-white grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-gray-150 flex  mt-10 flex-col ">
        <form className="max-w-[400px] mt-10 w-full mx-auto  px-6 rounded-lg ">
          <br />
          <br />
          <h2 className="text-3xl mt-12 dark:text-dark font-medium font-bold-center">
            Enter the varification code to continue
          </h2>
          <div className="mt-2 ">
            <p className="  dark:text-gray-500 mt-2  font-bold-center">
              We sent to{" "}
              <span className="text-blue-600 ">hellouser@heads.desgin</span>. if
              you don't see it, check you spam.
            </p>
          </div>
          <br></br>
          <div>
            <input
              className="otp-field rounded-2xl w-12 h-14 border-2 border-blue-500 text-center  focus:outline-none shodow-teal-500/50  hover:shadow-teal-500/40 "
              type="text"
              name="otp"
              maxLength={1}
            ></input>
            <input
              className="otp-field ml-2 rounded-2xl w-12 h-14 border-2 focus:outline-none  border-blue-500 text-center "
              type="text"
              name="otp"
              maxLength={1}
            ></input>
            <input
              className="otp-field ml-2 rounded-2xl w-12 h-14 border-2 focus:outline-none  border-blue-500 text-center "
              type="text"
              name="otp"
              maxLength={1}
            ></input>
            <input
              className="otp-field ml-2 rounded-2xl w-12 h-14 border-2 focus:outline-none  border-blue-500 text-center "
              type="text"
              name="otp"
              maxLength={1}
            ></input>
            <input
              className="otp-field ml-2 rounded-2xl w-12 h-14 border-2 focus:outline-none  border-blue-500 text-center "
              type="text"
              name="otp"
              maxLength={1}
            ></input>{" "}
            <input
              className="otp-field ml-2 rounded-2xl w-12 h-14 border-2 focus:outline-none  border-blue-500 text-center "
              type="text"
              name="otp"
              maxLength={1}
            ></input>
          </div>

          <div class=" mt-4rounded flex m-3  ">
            <div class="  flex-1 p-2">
              <button
                onClick={handlecilck}
                className=" rounded-2xl font-bold text-blue-700 p-3"
              >
                Back
              </button>
            </div>
            <div class=" flex-2 p-2 ">
              <button className="text-gray-400 font-medium p-3">
                Resend 00:{counter}
              </button>
            </div>
          </div>
          <div className=" hidden sm:block flex mt-12 ml-10 p-0 px-0 ml-0 justify-start">
            <br />
            <p className="mt-12">
              Not member?{" "}
              <span className="text-blue-700 font-medium">Create account</span>
            </p>
          </div>
        </form>
      </div>
      <div className="hidden sm:block   ">
        <br />
        <div className=" flex flex-col z-40 ml-0 max-w-[450px] max-h-[600px]  absolute transform mt-0 p-2  h-full w-full  mx-auto  bg-blue-600 p-0 px-0 rounded-3xl flex flex-col ">
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
};
export default Otp;
