'use client'
import { postGraphQl } from '@/api/graphicql'
import { GET_POSTS_SIGN_QUERY } from '@/api/query'
import { EmailValidator, lowerPresent, numPresent, specialPresent, upperPresent } from '@/utils/regexValidation'
import React, { useEffect, useState } from 'react'

export default function SingUp() {

      const [fisrtName,setFirstName]=useState("")
      const [userName,setUserName]=useState("")
      const [lastName,setLastName]=useState("")
      const [email,setEmail]=useState("")
      const [password,setPassword]=useState("")
      const [emailError,setEmailError]=useState("")
      const [valid,setValid]=useState(0)
      const [passwordError,setPasswordError]=useState([])

      useEffect(()=>{
        if(valid==1){
          validCheck()
        }

      },[email,password])
      const handlesignup=()=>{
        setValid(1)

        const inputdata={
            "singData": {
              "firstName": fisrtName,
              "lastName": lastName,
              "mobile": "9948484843",
              "email": email,
              "password": password,
              "username":userName
            }
          }
          if(validCheck()){
            setValid(0)
            postGraphQl(GET_POSTS_SIGN_QUERY,inputdata,"signup")
          }
      }
      const validCheck=()=>{
        let emailcheck=false
        if (email !== "") {
          let emailCheck = EmailValidator(email);
          if (emailCheck) {
            setEmailError("");
            emailcheck=true
          } else {
            emailcheck=false
            setEmailError("Incorrect Email. Please check the email you have entered.");
          }
        } else {
          emailcheck=false
          setEmailError("Email id is required");
        }
        let arrayValue = []
     if (password == "") {
      arrayValue.push("New password is required")
      setPasswordError(["New password is required"])
      
    } else {
      if (!upperPresent(password) && password.length !== 0) {
        arrayValue.push("Must contain at least 1 in capital case!")
      }
      if (!numPresent(password) && password.length !== 0) {
        arrayValue.push("Must have at least 1 number")
      }
      if (!lowerPresent(password) && password.length !== 0) {
        arrayValue.push("Must contain at least 1 lower lase!")
      }
      
      if (password.length < 8) {
        arrayValue.push("Must be at least 8 characters!")
      }
      if (!specialPresent(password) && password.length !== 0) {
        arrayValue.push("Must contain at least 1 special characters!")
      }
      setPasswordError(arrayValue)
    }
        if(fisrtName !==""&&lastName !==""&&userName !==""&&arrayValue.length==0&&emailcheck ==true){
         return true
        }else{
          return false
        }
      }

  return (
   <>
    <main className="grid place-items-center min-h-dvh p-4  bg-blue-2 ">
   <section className=" p-8 drop-shadow-1 bg-white rounded w-full max-w-[568px]">
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
            <div className="flex flex-col gap-2 mt-5">
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
                onChange={(e)=>setFirstName(e.target.value)}
              />
             {fisrtName ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Enter first name</p>} 
            </div>

            <div className="flex flex-col gap-2 mt-5">
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
                onChange={(e)=>setLastName(e.target.value)}
              />
              {lastName==""&&valid==1&& <p className='text-red-600 text-xs font-normal'>Enter last name</p>}
             
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
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
              onChange={(e)=>setEmail(e.target.value)}
            />
            {emailError !==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>{emailError}</p>}
          </div>
          <div className="flex flex-col gap-2 mt-5">
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
              placeholder="Email"
              onChange={(e)=>setUserName(e.target.value)}
            />
            {userName ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Enter user name</p>}
          </div>
          <div className="flex flex-col gap-2 mt-5">
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
              onChange={(e)=>setPassword(e.target.value)}
            />
            {valid==1&& <div class="mt-1">
        <ul class="grid grid-cols-1 sm:grid-cols-2  ps-2 gap-y-2">
          {passwordError?.map((err)=>(
           <li class="text-xs font-normal text-red-600">{err}</li>
          ))}
       
         </ul>
      </div>}
       
          </div>

          <button onClick={()=>handlesignup()} className="bg-blue-1 p-3 w-full rounded text-sm font-medium leading-4 text-white  mt-6 ">
            Sign up
          </button>
        </from>
      </section>
      </main>
   </>
  )
}
