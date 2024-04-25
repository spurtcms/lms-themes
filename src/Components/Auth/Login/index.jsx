'use client'

import ToastMessage from "@/Components/ToastMessg/ToastMessage"
import { postGraphQl } from "@/api/graphicql"
import { GET_POSTS_LOGIN_QUERY } from "@/api/query"
import { toastmess, tokencookie, tokenerror } from "@/api/serverActions"
import Link from "next/link"
import { useState } from "react"
import { ToastContainer } from "react-toastify"

export default function Login() {

  const[userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [validCheck,setValidCheck]=useState(0)
  const [rember,setRember]=useState("")
  const [spinner,setSpinner]=useState()
  const [spierror,setSpinerror]=useState([])
  const [toastmsg,setToastmsg]=useState()

  const logintoken=async()=>{
   return await tokencookie()
  }
  const loginerror=async()=>{
    return await tokenerror()
  }
  
  const handleLogin=async()=>{
    setSpinner(true)
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
        let spintoken=await logintoken()
        console.log(spintoken,"login")
        if(spintoken){
          setSpinner(false)
          ToastMessage({type:'success',message:"Login Successfull"})
          console.log("spin tokren")
        }

        let spinerror=await loginerror()
        console.log(spinerror,"spinerror")
        if(spinerror=="invalid password"){
          setSpinner(false)
          ToastMessage({type:'error',message:"Invalid Password"})

        }
        else if(spinerror=="your username not registered"){
          setSpinner(false)
          ToastMessage({type:'warning',message:"your username not registered"})
        }
      }
      setSpinner(false)
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
          {spinner?
          <svg aria-hidden="true" role="status" class="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
          </svg>:
            "Login"
          }
          </button>
          <p className="text-sm leading-4 text-grey-2 font-normal mt-3 flex items-center gap-1  justify-center">
            Don't have an account?{" "}
            <Link href={"/auth/sign-up"} className="text-blue-1">
              Sign Up
            </Link>
          </p>
        </from>
      </section>
     
      </main>

      
  )
}
