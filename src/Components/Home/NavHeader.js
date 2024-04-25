'use client'
import React from 'react'
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
export default function NavHeader() {
  return (
   <>
   <section class="flex  items-center flex-wrap gap-x-2 gap-y-4 py-8 ">
          <h1 class=" text-xl font-normal leading-6 text-black me-auto  max-sm:basis-full  ">
            All Courses
          </h1>
          <div class="flex items-center gap-6 relative  ">
            <Menu
              as="div"
              className="relative inline-block text-left w-full md:w-fit"
            >
              <Menu.Button class=" py-1 px-3 border-0 rounded leading-none text-sm font-light text-black flex items-center md:w-fit h-7 gap-2 bg-slate-50 after:w-3 after:h-[6px] after:inline-block after:bg-no-repeat after:bg-contain after:bg-[url('/img/course-drop.svg')]  w-full">
                Most Popular
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
                        className=" py-[6px] px-3 text-sm  w-full font-light  leading-4 text-black hover:bg-gray-100 block hover:  "
                      >
                        Recent
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="#"
                        className=" py-[6px] px-3 text-sm  w-full font-light  leading-4 text-black hover:bg-gray-100 block hover:  "
                      >
                        Most popular
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="#"
                        className=" py-[6px] px-3 text-sm  w-full font-light  leading-4 text-black hover:bg-gray-100 block hover:  "
                      >
                        Most popular
                      </a>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <a
            href="javascript:void(0)"
            class="py-1 px-3 border-0 rounded leading-none text-sm font-light text-black flex items-center w-fit h-7 gap-2 bg-slate-50 "
          >
            My Profile
          </a>

          <div class="flex items-center gap-2 flex-wrap">
            <input
              type="text"
              placeholder="Search"
              className="bg-slate-50 p-[6px] ps-10 bg-[url('/img/lmsSearch.svg')]  bg-no-repeat text-xs font-light text-black border-0 rounded-md w-48 h-7    
              bg-[left_0.75rem_center] focus:outline-none  "
            />
          
          </div>
        </section>
   </>
  )
}
