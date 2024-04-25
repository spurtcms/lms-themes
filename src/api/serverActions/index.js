'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function Rememberme(data) {
   let sess= cookies().get("remeber-key")
if(data){
}else{
    if(sess?.value==="remeber"){
    }
    if(sess?.value==="not-rember"){
        // cookies().set("remeber-key","")
        redirect("/auth/login")
    }
}
    
}


export async function tokencookie(){
    const TokenValue = cookies().get('token')
    return TokenValue&&TokenValue?.value;
     
  }

  export async function tokenerror(){
    const TokenValue = cookies().get('token-error')
    return TokenValue&&TokenValue?.value;
     
  }

  