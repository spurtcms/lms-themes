
"use server"
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { apiinstance } from "./interceptor";

export const fetchGraphQl = async (GET_POSTS_QUERY,varia) => {
 
  try {
    const entries = await apiinstance("",{
      method: 'POST',
      body: JSON.stringify({
        query: GET_POSTS_QUERY,
        variables: varia
      })
    });
     return entries.data
  } catch (error) {
    throw error;
  }
};

export const postGraphQl = async (GET_POSTS_QUERY,varia,check,rember) => {

  try {
    const entries = await fetchGraphQl(GET_POSTS_QUERY,varia);
    
    if(check==="signup"){
      if(entries?.memberRegister==true){
        redirect("/auth/login")
        
      }

    }
    if(check==="login"){
      if(entries?.templateMemberLogin){
        if(rember==""){
          cookies().set('token',entries?.templateMemberLogin)
          cookies().set("remeber-key","not-rember")
        
          redirect("/")
          
        }else{
          cookies().set('token',entries?.templateMemberLogin)
          cookies().set("remeber-key",rember)
          redirect("/")
        }
     
      }
    }
   
  } catch (error) {
    throw error;
  }
};
