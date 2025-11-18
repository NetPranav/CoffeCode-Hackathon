"use client"
import React from 'react'
import {signOut} from 'next-auth/react'
// import { redirect } from 'next/dist/server/api-utils'

export default function signOutButton() {
  return (
    <div>
      <button className='bg-orange-300 rounded-md p-2 mt-100' 
      onClick={()=> signOut({callbackUrl:'/login',redirect:true}) 
      }>signOut</button>
    </div>
  )
}


