import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isToken = request.cookies.get("token");
  
  {

  }
  console.log({ isToken });

  if (!isToken) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }
  const parts = isToken.value.split('.');
  if (parts.length !== 3) {
    
    return NextResponse.rewrite(new URL("/login", request.url));//
  }
  
    return NextResponse.next();
   

  } 
  
  

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/"],
};

