
import Link from "next/link";
import NavHeader from "./NavHeader";
import ImageComponets from "../ImageComponent";
import { fetchGraphQl } from "@/api/graphicql";
import { GET_POSTS_LIST_QUERY, GET_POST_CATEGORY_LIST } from "@/api/query";
import Navbar from "./Navbar";
import HomeList from "./HomeList";


var catlistdata = [];
export default async function HomePage() {
  
  const categorieslist={
    "limit": 10,
    "offset": 0,
  }
  const catData=await fetchGraphQl(GET_POST_CATEGORY_LIST,categorieslist)


  const varibale={
    "limit": 10,
    "offset": 0,
    "categoriesId":catData?.categoriesList?.categories?.[0]?.id
  }
   const couseData=await fetchGraphQl(GET_POSTS_LIST_QUERY,varibale)

  //  sec
  
 
  const anand = async (id) => {
    console.log(id, "pophuhui");
    const variables = {
      "limit": 10,
      "offset": 0,
      "categoriesId": id,
    };
    let gtftfas = await fetchGraphQl(GET_POSTS_LIST_QUERY, variables);
    // 
    let aar = gtftfas
    catlistdata.push(aar);
    console.log(aar, "pipio");
  };
  catData?.categoriesList?.categories?.map((dataid)=>{
    anand(dataid.id)

    
    // console.log(dataid.id,"123456789")
  })

  console.log(catlistdata, "tfrdtrd");

  // console.log(catData?.categoriesList?.categories.map((dd)=>console.log(dd.id,'anand123')),"catData")
    // let openTab =1
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
            {/* <Navbar catData={catData}/> */}

           <HomeList couseData={couseData} catData={catData} catlistdata={catlistdata}/>
          </div>
        </div>
      </main>
    </>
  );
}
