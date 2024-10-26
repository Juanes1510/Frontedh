'use server'
 
import { cookies } from 'next/headers'
 
 export async function createCookie(key:string ,value:string) {
  cookies().set(key, value)
  


}
