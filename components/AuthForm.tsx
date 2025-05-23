"use client"
import React from 'react'
import {z} from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const AuthForm = ({type}:any) => {
  return (
    <div>AuthForm</div>
  )
}

export default AuthForm