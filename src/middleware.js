import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
 
export function middleware(request) {
   
    const remeber = cookies().get('remeber-key')
    const token = cookies().get('token')
    
    if(remeber?.value=="remeber"){

      if(token?.value==undefined){
        if (!request.nextUrl.pathname.includes("/login")) {
          const absoluteUrl = new URL("/auth/login", request.nextUrl.origin);
          return NextResponse.redirect(absoluteUrl.toString());
      } 
      }else{
        if (request.nextUrl.pathname.includes("/login")) {
          const absoluteUrl = new URL("/", request.nextUrl.origin);
          return NextResponse.redirect(absoluteUrl.toString());
      } 
      }
    }else{
      if(remeber?.value=="not-rember"){
       
     }else{
            if (!request.nextUrl.pathname.includes("/login")) {
             const absoluteUrl = new URL("/auth/login", request.nextUrl.origin);
               return NextResponse.redirect(absoluteUrl.toString());
  } 
  }
    }
 
}

export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
   
    ],
  }