import React from "react";

export default function page() {
  return (
   
      <section className=" p-8 drop-shadow-1 bg-white rounded w-full max-w-[568px]   ">
        <div className="grid place-items-center mb-8">
          <img src="\img\login-logo.svg " alt="logo" />
        </div>
        <h1 className=" text-black text-2xl leading-7 font-medium  mb-2 ">
          Sign Up
        </h1>
        <p className=" text-grey-2 text-sm font-light leading-4 ">
          Sign up Now!
        </p>
        <from>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 ">
            <div className="flex flex-col gap-2 mt-6">
              <label
                for="userName"
                className=" text-black text-base font-normal leading-5"
              >
                First Name
              </label>
              <input
                id="userName"
                className=" p-3 border  rounded-md  border-gray-1 text-sm font-normal leading-4 text-black placeholder:text-grey-2 focus:outline-none "
                type="text"
                placeholder="Enter First Name"
              />
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <label
                for="userName"
                className=" text-black text-base font-normal leading-5"
              >
                Last Name
              </label>
              <input
                id="userName"
                className=" p-3 border  rounded-md  border-gray-1 text-sm font-normal leading-4 text-black placeholder:text-grey-2 focus:outline-none "
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <label
              for="userName"
              className=" text-black text-base font-normal leading-5"
            >
              Email
            </label>
            <input
              id="userName"
              className=" p-3 border  rounded-md  border-gray-1 text-sm font-normal leading-4 text-black placeholder:text-grey-2 focus:outline-none "
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <label
              for="userName"
              className="text-black text-base font-normal leading-5"
            >
              Password
            </label>
            <input
              id="userName"
              className="p-3 border  rounded-md  border-gray-1 text-sm font-normal leading-4 text-black placeholder:text-grey-2 focus:outline-none"
              type="text"
              placeholder=" Password"
            />
          </div>

          <button className="bg-blue-1 p-3 w-full rounded text-sm font-medium leading-4 text-white  mt-6 ">
            Sign up
          </button>
        </from>
      </section>
   
  );
}
