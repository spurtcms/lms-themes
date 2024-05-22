'use client'
import { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { redirect, usePathname } from 'next/navigation'
import { Rememberme } from "@/api/serverActions";
export default function Header() {
  const pathename=usePathname()
  useEffect(()=>{
    if(sessionStorage&&sessionStorage){
     if(sessionStorage.getItem("session-key")){
         if(pathename==="/auth/login"){
          redirect("/")
         }
     }else{
      if(pathename !="/auth/login"){
      Rememberme(sessionStorage.getItem("session-key"))

      }

     }
    }
},[])
  return (
    pathename !=="/auth/sign-up"&& pathename !=="/auth/login"&&
    <header class=" h-[4.5rem] bg-white border-b flex items-center sticky top-0 z-50 border-gray-300 ">
    <div class="flex px-6 items-center justify-between w-full max-w-7xl mx-auto ">
      <Link href={"/"}>
            
            <Image
              src="/img/ourLogo.svg"
              alt="spurtCMS Profile Image"
              className="w-48 md:w-auto"
              width={32}
              height={32}
              priority
            /></Link>
      <div class="flex items-center gap-6">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex  items-center gap-2 text-sm font-normal leading-4 after:inline-block  after:w-2 after:h-2 after:bg-contain after:bg-[url('/img/dropdown-arrow.svg')] after:bg-center after:bg-no-repeat">
            Explore
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-[8.3125rem] py-1 mt-2  min-w-auto  ">
              <div className="block">
                <Menu.Item>
                  <a
                    href="#"
                    className=" py-[6px] px-3 text-sm  w-full font-light leading-tight text-grey-3 hover:bg-gray-100 block hover:  "
                  >
                    Courses
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="#"
                    className=" py-[6px] px-3 text-sm  w-full font-light  leading-tight text-grey-3 hover:bg-gray-100 block hover:  "
                  >
                    Batches
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="#"
                    className=" py-[6px] px-3 text-sm  w-full font-light  leading-tight text-grey-3 hover:bg-gray-100 block hover:  "
                  >
                    Statistics
                  </a>
                </Menu.Item>

                <Menu.Item>
                  <a
                    href="#"
                    className=" py-[6px] px-3 text-sm  w-full font-light  leading-tight text-grey-3 hover:bg-gray-100 block hover:  "
                  >
                    Jobs
                  </a>
                </Menu.Item>

                <Menu.Item>
                  <a
                    href="#"
                    className=" py-[6px] px-3 text-sm  w-full font-light  leading-tight text-grey-3 hover:bg-gray-100 block hover:  "
                  >
                    People
                  </a>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <span className=" w-10 h-10 rounded-full overflow-hidden ">
          <img src="\img\header-prof-img.svg" alt="profile" />
          
        </span>
      </div>
    </div>
  </header>
    
  )
}
