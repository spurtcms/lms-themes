import { fetchGraphQl } from "@/api/graphicql";
import CategoryList from "./CategoryList";
import { GET_POSTS_CATEGORY_QUERY, GET_POSTS_SLUG_QUERY } from "@/api/query";

export default async function Post({params}) {
    const varibale={
      spaceId:params.slug
    }
    
    const postDetail= await fetchGraphQl(GET_POSTS_SLUG_QUERY,varibale)
    const categoryList= await fetchGraphQl(GET_POSTS_CATEGORY_QUERY,varibale)
  return (
    <>
     <main>
        <section className=" py-6 px-8 border-b border-gray-300 ">
          <ul class=" mb-8 w-full max-w-7xl mx-auto lg:px-6 flex items-center gap-3  ">
            <li className="flex items-center gap-3">
              <a
                href=""
                className=" overflow-hidden text-ellipsis whitespace-nowrap  text-base text-grey-2 font-light leading-5 after:inline-block after:w-1 after:h-2  after:bg-[url('/img/bread-arrow.svg')] after:bg-contain after:bg-no-repeat flex items-center gap-3  line-clamp-1 "
              >
                All Courses
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className=" text-base text-grey-3 font-light leading-5  line-clamp-1"
              > {postDetail.spaceDetails.spaceName}
              </a>
            </li>
          </ul>

          <div class="grid lg:grid-cols-[1fr_25rem]   gap-14 w-full max-w-7xl mx-auto lg:px-6">
            <div class="max-w-full me-auto">
              <div class="flex flex-col items-start  gap-2 mb-16">
                {postDetail.spaceDetails.categories?.at(-1)?.categoryName&& <span class=" w-auto h-7 py-1 px-2 rounded-md  text-base font-light text-grey-3  border-gray-1 border leading-none grid place-items-center bg-grey-1 text-center ">
                 {postDetail.spaceDetails.categories?.at(-1)?.categoryName}
                </span>}
               

                <h1 class=" text-2xl font-medium leading-7 text-black ">
                 {postDetail.spaceDetails.spaceName}
                </h1>

                <p class="font-light leading-5 text-grey-3 text-base">
                  Photoshop CS6 will be yours to command in 4 hours!
                </p>
              </div>
              <div class="grid gap-2">
                <img src="/img/course-rating.svg" alt="rating" />

                <p className="text-base text-black font-normal leading-5">
                  Instructor:
                </p>

                <p class="flex items-center gap-2 font-light text-grey-3 leading-5 text-base">
                  <img src="/img/course-prof.svg" alt="" /> Admin
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" mb-8 grid  lg:grid-cols-[1fr_25rem]    gap-14 w-full max-w-7xl mx-auto px-6">
          <div class=" max-w-[46.25rem] me-auto">
            <div class="block">
              <h2 class=" text-lg font-medium text-black my-8   leading-5 ">
                Description
              </h2>
              <p className="pt-2 text-sm font-light leading-6 text-grey-3">
              {postDetail.spaceDetails.spaceDescription}
              </p>
            </div>
           <CategoryList categoryList={categoryList?.PagesAndPageGroupsUnderSpace}/>

            <div class="block">
              <h2 class=" text-lg font-medium text-black leading-5 my-8 ">
                Reviews
              </h2>

              <div class="grid place-items-center relative border border-gray-1 rounded-lg p-4 min-h-56">
                <textarea class=" resize-none w-full h-full inset-0 absolute bg-transparent border-0 p-4"></textarea>
                <div class="flex items-center gap-4 w-ful justify-center">
                  <img src="/img/review-img.svg" alt="review" />
                  <div class="block">
                    <h3 className=" text-lg font-normal leading-5 text-black mb-1">
                      Review the Course
                    </h3>
                    <p className=" text-sm font-light leading-6 text-grey-2">
                      Help us to improve our course material.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class=" max-w-[25rem] border border-gray-300  rounded-lg overflow-hidden bg-white lg:-mt-[218px] h-fit   ">
            <div class="grid place-items-center relative">
              <div class="flex items-center gap-2 absolute top-4 left-0 w-full px-5 ">
                <img
                  src="/img/crd-vid-logo.svg"
                  alt="video Logo"
                  className=" w-8 h-8 rounded-full overflow-hidden"
                />
                <p className="text-base font-normal leading-5 text-white max-w-[17.1875rem] overflow-hidden text-ellipsis whitespace-nowrap">
                  What We’re Reading: Work-life bal...
                </p>

                <button class=" ms-auto p-0">
                  <img src="/img/courseVideo-opt.svg" alt=" " />
                </button>
              </div>
              <img
                className="  w-full"
                src="/img/detail__crd__img.svg"
                alt=""
              />
              <button class="absolute">
                <img src="/img/pause-video.svg" alt="pause" />
              </button>
            </div>
            <div class="flex gap-3 flex-col p-5">
              <a
                href="javascript:void(0)"
                class=" p-1 w-full bg-grey-1 border border-gray-1 text-base font-normal leading-5 rounded-lg flex justify-center text-grey-1"
              >
                Edit
              </a>
              <h3 className="flex items-center text-black text-base font-normal leading-5 gap-1 ">
                <img src="/img/card-rupee.svg" alt="" />
                500
              </h3>
              <p className=" text-sm font-light leading-4 flex items-center gap-1 text-black  ">
                <img src="/img/card-enrolled.svg" alt="" />2 Enrolled
              </p>
              <p className=" text-sm font-light leading-4 flex items-center gap-1 text-black">
                <img src="/img/card-lesson.svg" alt="" />1 Lesson
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
