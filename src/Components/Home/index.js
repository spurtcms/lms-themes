
import Link from "next/link";
import NavHeader from "./NavHeader";
import ImageComponets from "../ImageComponent";
import { fetchGraphQl } from "@/api/graphicql";
import { GET_POSTS_LIST_QUERY } from "@/api/query";



export default async function HomePage() {
  const varibale={
    "limit": 10,
    "offset": 0
  }
   const couseData=await fetchGraphQl(GET_POSTS_LIST_QUERY,varibale)
  let openTab =1
  // const [openTab, setOpenTab] = useState(1);
  // const [couseData,setCouseData]=useState(courseCard)

 

  return (
    <>
      <main className=" w-full max-w-7xl px-6 mx-auto ">
        
        <NavHeader />
        <div className="flex flex-wrap">
          <div className="w-full">
            {/* <ul
              className="flex leading-none border-b border-gray-300 flex-nowrap overflow-auto"
              role="tablist"
            >
              <li className="block">
                <a
                  className={
                    "pb-2 text-base font-light leading-5  me-6  whitespace-nowrap block " +
                    (openTab === 1
                      ? "text-black   border-b-2 border-black "
                      : "  text-grey-1 border-b-2  border-transparent  ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Live (10)
                </a>
              </li>
              <li className="block">
                <a
                  className={
                    "pb-2 text-base font-light leading-5  me-6  whitespace-nowrap block " +
                    (openTab === 2
                      ? "text-black   border-b-2 border-black "
                      : "  text-grey-1 border-b-2  border-transparent  ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Upcoming (1)
                </a>
              </li>
              <li className="block">
                <a
                  className={
                    "pb-2 text-base font-light leading-5  me-6  whitespace-nowrap block " +
                    (openTab === 3
                      ? "text-black   border-b-2 border-black "
                      : "  text-grey-1 border-b-2  border-transparent  ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Enrolled (2)
                </a>
              </li>
              <li className="block">
                <a
                  className={
                    "pb-2 text-base font-light leading-5  me-6  whitespace-nowrap block " +
                    (openTab === 4
                      ? "text-black   border-b-2 border-black "
                      : "  text-grey-1 border-b-2  border-transparent  ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Created (5)
                </a>
              </li>
              <li className="block">
                <a
                  className={
                    "pb-2 text-base font-light leading-5  me-6  whitespace-nowrap block " +
                    (openTab === 5
                      ? "text-black   border-b-2 border-black "
                      : "  text-grey-1 border-b-2  border-transparent  ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(5);
                  }}
                  data-toggle="tab"
                  href="#link5"
                  role="tablist"
                >
                  Under Review (3)
                </a>
              </li>
            </ul> */}

            <div className="block py-8">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div class="grid gap-6 grid-cols-autofill">
                  {couseData?.spaceList?.spacelist?.map((data,index)=>(
                    <>
                  {console.log(data,'11couseData')}

                    <Link href={`/posts/${data.spaceSlug}`} class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group">
                   
         
                    {data.categories?.at(-1)?.categoryName&&<span class=" absolute top-3 left-4 border-0  h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      {data.categories?.at(-1)?.categoryName}
                    </span>}
                    
                    <div class="block">
                        <ImageComponets path={data.imagePath} w={500} h={200} alt={"spurtCMS card image"}/>
                    
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                       {data.spaceName}
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                      {data.spaceDescription}
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </Link>
                    </>
                  ))}
                  

                  {/* <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img2.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img3.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img1.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img2.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img3.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a> */}
                </div>
              </div>

              {/* <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div class="grid gap-6 grid-cols-autofill">
                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img1.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img2.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img3.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img3.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img1.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img1.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div class="grid gap-6 grid-cols-autofill">
                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img1.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img3.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img1.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img1.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img3.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img1.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                <div class="grid gap-6 grid-cols-autofill">
                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img1.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img2.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img3.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img1.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img2.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis text-grey-3  ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img3.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                <div class="grid gap-6 grid-cols-autofill">
                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img1.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img2.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis text-grey-3  ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img3.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis  text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          Free
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img1.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0)"
                    class="border border-gray-300 inline-block rounded-lg overflow-hidden relative group"
                  >
                    <span class=" absolute top-3 left-4 border-0 w-20 h-7 py-1 px-2 rounded bg-white text-base font-light text-black leading-5 ">
                      Business
                    </span>
                    <div class="block">
                      <img
                        src="\img\course-img2.svg"
                        alt=""
                        className=" w-full    h-full inline-block"
                      />
                    </div>

                    <div class="flex flex-col gap-2 p-4">
                      <p class="flex items-center font-light leading-4 text-black gap-1 text-sm ">
                        <img src="\img\lesson-img.svg" alt="" />1 Lesson
                      </p>
                      <h2 class=" text-base font-medium leading-5 text-black group-hover:underline ">
                        What We’re Reading: Work-life balance: The best lie
                        ever&nbsp;told?
                      </h2>
                      <p class=" text-sm font-light leading-5 line-clamp-2 overflow-hidden text-ellipsis text-grey-3 ">
                        A lot of people have a lot to say about the into work
                        the so-called laziness or the note in allege lorem
                        ethic, the so-called laziness or the note in allege
                        lorem
                      </p>

                      <div class=" flex justify-between items-center mt-4">
                        <p class="flex items-center gap-2 text-base  text-black font-light leading-5">
                          <img src="\img\course-prof.svg" alt="" /> Admin
                        </p>
                        <span class=" text-base  text-black font-light leading-5 flex gap-1 items-center ">
                          <img src="\img\card-rupee.svg" alt="" />
                          500
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
