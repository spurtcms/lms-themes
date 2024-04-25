"use client"

import Link from 'next/link'
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({catData,catNo,dataLength,catlistdata}) => {
  // let catlistfind=[];

  // console.log(catData?.categoriesList?.categories,"12345")
  // catlistdata.map((data)=>{
    // console.log(data.spaceList.spacelist,"nitheesh")
    // catlistfind.push(data.spaceList)

  //   data.spaceList.map((response)=>{
  //     console.log(response,"dfghj")
  //     catlistfind.push(response)
  //  })
    
  // })

  // console.log(catlistfind,'catlistdataqw')

  const searchParams = useSearchParams()
    let scrl = useRef(null);
    const [scrolEnd, setscrolEnd] = useState(true);
    const [scrollX,setScrollX]=useState(0)
    let scroll=searchParams.get("scroll")

    const slide = (shift) => {
      scrl.current.scrollLeft += shift;

      setScrollX(scrollX + shift);
  
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    };
    const scrollCheck = () => {
      setScrollX(scrl.current.scrollLeft);
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    };
    useEffect(()=>{
     if(scroll !=null){
      if(scrl.current){
        scrl.current.scrollLeft = scroll;
      }
     }else{
      if(scrl.current){
        scrl.current.scrollLeft = 0;
      }
     }
    },[scroll,scrl])
    useEffect(()=>{
        if(scrl.current){
            if (
                Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
                scrl.current.offsetWidth
              ) {
                setscrolEnd(true);
              } else {
              
                setscrolEnd(false);
              }
        }
    },[scrl])


  return (
   <>
   <div className="flex flex-nowrap flex-row gap-x-2 pb-4 my-10 justify-start  relative">
       {scrollX !== 0 && (
        <button
          onClick={() => slide(-50)}
          class="w-2 h-2 absolute top-[0.625rem] left-[-1.438rem]"
        >
          <Image src="/img/arrow-left-colour.svg" alt="arrow-left" width={15}
                  height={15}
                  priority />
                  
        </button>
     )} 
           <ul
            ref={scrl}
            onScroll={scrollCheck}
              className="flex leading-none border-b border-gray-300 flex-nowrap overflow-hidden"
              role="tablist"
            >
              {catData&&catData?.categoriesList?.categories?.map((result,index)=>(
                <>{console.log(result,'q2132423423')}
                 <li className="block">
                <Link
                  className={
                    "pb-2 text-base font-light leading-5  me-6  whitespace-nowrap block " +
                    ((catNo==null&&index==0)||(catNo==result?.id)
                      ? "text-black   border-b-2 border-black "
                      : "  text-grey-1 border-b-2  border-transparent  ")
                  }
                //   onClick={(e) => {
                //     e.preventDefault();
                //     setOpenTab(1);
                //   }}
                //   data-toggle="tab"
                  href={`/?catgoId=${result?.id}`}
                //   role="tablist"
                >
                  {result?.categoryName}
                 {/* {`${result?.categoryName}${catlistfind?.map((res)=>(
                  res?.spacelist?.map((casid)=>(
                    casid==catNo?`(${res?.spacelist?.length})`:""
                  ))
                  ))}`} */}
           
                </Link>
              </li>
                </>
              ))}
             
            </ul>

            {!scrolEnd && (
        <button
          onClick={() => slide(+50)}
          class="w-2 h-2 absolute top-[0.625rem] right-[-1.438rem]"
        >
         <Image src="/img/arrow-right-colour.svg" alt="arrow-right" width={15}
                  height={15}
                  priority />
                  
        </button>
      )}
      </div>

   </>
  )
}

export default Navbar
