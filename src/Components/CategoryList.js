'use client'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function CategoryList({categoryList}) {
    const [open, setOpen] = useState(0);
    const [pageList,setPageList]=useState([])
    

  const handleOpen = (value) => setOpen(open === value ? "" : value);
  

  useEffect(()=>{
    let cateArry=[]
    categoryList?.pages?.map((data,index)=>{
      let obj={}
        obj.pageName=data.pageName
        obj.id=data.id
       let sdata=categoryList?.subpages?.filter((s)=>s.parentId==data.id)

       if(sdata?.length){
        obj.subPage=sdata
       }else{
        obj.subPage=[]
       }
       cateArry.push(obj)

    })
setPageList(cateArry)
  },[])

  return (
   <>
   
   <div class="block">
              <h2 class=" text-lg font-medium text-black leading-5 my-8 ">
                Course Content
              </h2>

              <div className=" border border-gray-1 rounded-lg ">
                {pageList?.map((data,index)=>(
                  <Accordion open={open === index}>
                  <AccordionHeader
                    onClick={() => handleOpen(index)}
                    className={
                      " text-sm font-normal leading-4 text-grey-3 p-4 flex items-center gap-3 border-b border-gray-1 w-full justify-start before:inline-block before:min-w-3 before:min-h-2 before:bg-[url('/img/accord-arrow.svg')] before:bg-contain before:bg-no-repeat  " +
                      (open === index
                        ? " before:rotate-180"
                        : "  before:rotate-0  ")
                    }
                  >
                    {data.pageName}
                  </AccordionHeader>
                  <AccordionBody>
                    {data?.subPage?.map((sdata,sindex)=>(
                    <a
                      href=""
                      className=" flex items-center gap-2 py-2 px-10 border-b border-gray-1 text-grey-3  text-sm font-normal leading-4  before:inline-block   before:min-w-3 before:min-h-3 before:bg-[url('/img/accord-lnk.svg')] before:bg-contain before:bg-no-repeat"
                    >
                      {sdata.subpageName}
                    </a>
                    ))}
                   
                  </AccordionBody>
                </Accordion>
                ))}
                
                {/* <Accordion open={open === 2}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className={
                      " text-sm font-normal leading-4 text-grey-3 p-4 flex items-center gap-3 border-b border-gray-1 w-full justify-start before:inline-block before:min-w-3 before:min-h-2 before:bg-[url('/img/accord-arrow.svg')] before:bg-contain before:bg-no-repeat  " +
                      (open === 2
                        ? " before:rotate-180"
                        : "  before:rotate-0  ")
                    }
                  >
                    Chapter 2
                  </AccordionHeader>
                  <AccordionBody>
                    <a
                      href=""
                      className=" flex items-center gap-2 py-2 px-10 border-b border-gray-1 text-grey-3  text-sm font-normal leading-4  before:inline-block   before:min-w-3 before:min-h-3 before:bg-[url('/img/accord-lnk.svg')] before:bg-contain before:bg-no-repeat"
                    >
                      Lesson Plan ‘The Concept of Leadership’
                    </a>
                    <a
                      href=""
                      className=" flex items-center gap-2 py-2 px-10 border-b border-gray-1 text-grey-3  text-sm font-normal leading-4 before:inline-block before:min-w-3 before:min-h-3 before:bg-[url('/img/accord-lnk.svg')] before:bg-contain before:bg-no-repeat"
                    >
                      Need for Lesson Plan in Teaching
                    </a>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3}>
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className={
                      " text-sm font-normal leading-4 text-grey-3 p-4 flex items-center gap-3 border-b border-gray-1 w-full justify-start before:inline-block before:min-w-3 before:min-h-2 before:bg-[url('/img/accord-arrow.svg')] before:bg-contain before:bg-no-repeat  " +
                      (open === 3
                        ? " before:rotate-180"
                        : "  before:rotate-0  ")
                    }
                  >
                    Chapter 3
                  </AccordionHeader>
                  <AccordionBody>
                    <a
                      href=""
                      className=" flex items-center gap-2 py-2 px-10 border-b border-gray-1 text-grey-3  text-sm font-normal leading-4  before:inline-block   before:min-w-3 before:min-h-3 before:bg-[url('/img/accord-lnk.svg')] before:bg-contain before:bg-no-repeat"
                    >
                      Lesson Plan ‘The Concept of Leadership’
                    </a>
                    <a
                      href=""
                      className=" flex items-center gap-2 py-2 px-10 border-b border-gray-1 text-grey-3  text-sm font-normal leading-4 before:inline-block before:min-w-3 before:min-h-3 before:bg-[url('/img/accord-lnk.svg')] before:bg-contain before:bg-no-repeat"
                    >
                      Need for Lesson Plan in Teaching
                    </a>
                  </AccordionBody>
                </Accordion>

                <Accordion open={open === 4}>
                  <AccordionHeader
                    onClick={() => handleOpen(4)}
                    className={
                      " text-sm font-normal leading-4 text-grey-3 p-4 flex items-center gap-3  border-gray-1 w-full justify-start before:inline-block before:min-w-3 before:min-h-2 before:bg-[url('/img/accord-arrow.svg')] before:bg-contain before:bg-no-repeat  " +
                      (open === 4
                        ? " before:rotate-180 border-b-0 "
                        : "  before:rotate-0 border-b-1 ")
                    }
                  >
                    Chapter 4
                  </AccordionHeader>
                  <AccordionBody>
                    <a
                      href=""
                      className=" flex items-center gap-2 py-2 px-10 border-t border-gray-1 text-grey-3  text-sm font-normal leading-4  before:inline-block   before:min-w-3 before:min-h-3 before:bg-[url('/img/accord-lnk.svg')] before:bg-contain before:bg-no-repeat"
                    >
                      Lesson Plan ‘The Concept of Leadership’
                    </a>
                    <a
                      href=""
                      className=" flex items-center gap-2 py-2 px-10 text-grey-3  border-t border-gray-1 text-sm font-normal leading-4 before:inline-block before:min-w-3 before:min-h-3 before:bg-[url('/img/accord-lnk.svg')] before:bg-contain before:bg-no-repeat "
                    >
                      Need for Lesson Plan in Teaching
                    </a>
                  </AccordionBody>
                </Accordion> */}
              </div>
            </div>
   </>
  )
}
