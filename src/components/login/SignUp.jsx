'use client'
import { loginUser } from '@/app/api/utils/login';
import React, { useContext, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation';
import AuthContext from '@/app/AuthContext';


const SignUp = () => {
    const router = useRouter()
    const setUser = useContext(AuthContext)
  const [loginData, setLoginData] = useState({
    name:"",
    email: "",
    password: "",
  });
  // 
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async(e) => {
    try {
      e.preventDefault()
      console.log(loginData);
      const res = await loginUser(loginData)
      if(res){
        Cookies.set('accessToken',res?.token)
        setUser(res?.user)
        router.push('/')
        router.refresh()
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className='min-h-screen p-8 flex flex-col'>
        <form className="flex flex-col gap-2 " onSubmit={handleSubmit}>
          <input
            className="text-black"
            type="text"
            placeholder="Enter name"
            value={loginData.name}
            onChange={(e) => {
              setLoginData({
                ...loginData,
                name: e.target.value,
              });
            }}
          />
          <input
            className="text-black"
            type="email"
            placeholder="Enter email"
            value={loginData.email}
            onChange={(e) => {
              setLoginData({
                ...loginData,
                email: e.target.value,
              });
            }}
          />
          <input
            className="text-black"
            type="password"
            placeholder="Enter password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                password: e.target.value,
              })
            }
          />
          <button type='submit' >Submit</button>
        </form>
      </div>
  )
}

export default SignUp


