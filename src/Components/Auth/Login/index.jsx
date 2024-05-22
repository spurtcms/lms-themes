'use client'

import { postGraphQl } from "@/api/graphicql"
import { GET_POSTS_LOGIN_QUERY } from "@/api/query"
import Link from "next/link"
import { useState } from "react"

export default function Login() {

  const[userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [validCheck,setValidCheck]=useState(0)
  const [rember,setRember]=useState("")

  const handleLogin=()=>{
   
    setValidCheck(1)
      if(userName !==""&&password !==""){
        setValidCheck(0)
        const inputdata={"username":userName,"password":password}
        if(rember===""){
          sessionStorage.setItem("session-key","session-value")

        }else{
          sessionStorage.setItem("session-key","")

        }
        postGraphQl(GET_POSTS_LOGIN_QUERY,inputdata,"login",rember)

      }

  }
  const handleRember=(e)=>{
    // Rememberme(e.target.checked)
    if(e.target.checked){
      setRember("remeber")
    }else{
      setRember("")
    }

  }
  return (
    <main className="grid place-items-center min-h-dvh p-4  bg-blue-2 ">
    <section className=" p-8 drop-shadow-1 bg-white rounded w-full max-w-[464px]">
        <div className="grid place-items-center mb-8">
          <img src="/img/login-logo.svg " alt="logo" />
        </div>
        <h1 className=" text-black text-2xl leading-7 font-medium  mb-2 ">
          Login
        </h1>
        <p className=" text-grey-2 text-sm font-light leading-4 ">
          Welcome back{" "}
          <span className="text-blue-1 text-sm font-light leading-4">
            Sandeep
          </span>
        </p>
        <from>
          <div className="flex flex-col gap-2 mt-6">
            <label
              for="userName"
              className=" text-black text-base font-normal leading-5"
            >
              User Name
            </label>
            <input
              id="userName"
              className=" p-3 border  rounded-md  border-gray-1 text-sm font-normal leading-4 text-black placeholder:text-grey-2 focus:outline-none "
              type="text"
              placeholder=" Enter User Name"
              onChange={(e)=>setUserName(e.target.value)}
            />
             {userName ==""&&validCheck==1&&<p className='text-red-600 text-xs font-normal'>Username is required</p>} 
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
              className="p-3 border  rounded-md   text-sm font-normal leading-4 text-black placeholder:text-grey-2 focus:outline-none"
              type="text"
              placeholder=" Enter Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            {password ==""&&validCheck==1&&<p className='text-red-600 text-xs font-normal'>Password is required</p>} 
          </div>
          <div className="flex items-center">
            <div class="flex items-center mt-4 gap-[6px]">
              <input
                id="remember"
                type="checkbox"
                value=""
                class=" w-3 h-3 text-blue-1 accent-black border-gray-1 rounded-lg cursor-pointer"
                onClick={(e)=>handleRember(e)}
              />
              <label
                for="remember"
                className=" text-grey-2 text-xs font-normal leading-4 cursor-pointer"
              >
                Remember me
              </label>
            </div>
          </div>

          <button className="bg-blue-1 p-3 w-full rounded text-sm font-medium leading-4 text-white  mt-6 " onClick={()=>handleLogin()}>
            Login
          </button>
          <p className="text-sm leading-4 text-grey-2 font-normal mt-3 flex items-center gap-1  justify-center">
            Don&apos;t have an account?{" "}
            <Link href={"/auth/sign-up"} className="text-blue-1">
              Sign Up
            </Link>
          </p>
        </from>
      </section>
      </main>
  )
}
