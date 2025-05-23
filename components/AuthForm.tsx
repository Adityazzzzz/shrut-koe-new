"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import Image from 'next/image'
import logo from '../public/logosaas.png'
import Link from 'next/link'
import { toast } from 'sonner'


const AuthformSchema = (type:FormType)=>{
  return z.object({
    name: type === 'sign-up'? z.string().min(3):z.string().optional(),
    email:z.string().email(),
    password:z.string().min(6),
  })
}

const AuthForm = ({type}:{type:FormType}) => {
  const formSchema = AuthformSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      password:"",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if(type==='sign-up'){
        console.log("SIGNUP", values);
      }
      else console.log("SIGNIN",values);
    }
    catch(error){
      console.log(error)
      toast.error(`There was an error: ${error}`)
    }
  }

  const isSignIn = type === 'sign-in'

  return (
    <div>
      <div>
        <div className='flex gap-2 justify-center'>
          <Image src={logo} alt='' height={40} width={40}/>
          <h2 className='text-gray-500'>Shrut-Koe</h2>
        </div>
        <h3 className='font-mona-sans font-medium p-4 text-gray-500'>Practice job interview with AI</h3>
      
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full mt-4 form">
            {!isSignIn && <p>Name</p>}
            <p>Email</p>
            <p>Password</p>
            <Button type="submit">{isSignIn? 'Sign-In': 'Create an Account'}</Button>
          </form>
        </Form>
        <p className='text-center mt-1'>{isSignIn? 'No account yet?':'Have an account already?'}
          <Link href={!isSignIn? '/sign-in':'/sign-up'} className=' font-medium text-user-primary ml-2'>{!isSignIn? 'Sign-in' : 'Sign-up'}</Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm