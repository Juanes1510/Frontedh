'use server'
 
import { cookies } from 'next/headers'
 
 export async function createCookie(key:string ,value:string) {
  await cookies().set(key, value)

}
