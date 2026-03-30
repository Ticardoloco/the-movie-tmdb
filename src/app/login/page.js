"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const LogIn = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div className='mt-15 w-full max-w-350 '>
      <div className="flex items-start justify-center min-w-full ">
        <div className="max-w-350 w-full lg:p-[30px_40px] p-[30px_20px]  flex items-start ">
            <div className="w-full text-black">
                <h2 className="mb-4 font-semibold text-2xl m-[0_0_4px] p-0 leading-none">Login to your account</h2>
                <p className="text-base m-[0_0_16px] p-0">In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. <Link href="/signup" className='text-[rgba(1,180,228)] underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3px'>click here</Link> to get started.</p>

                <p className="text-base m-[0_0_16px] p-0">If you signed up but didn&apos;t get your verification email, <Link href="/signup" className='text-[rgba(1,180,228)] underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3px'>click here</Link> to have it resent.</p>

                <form action="/login" className='p-0 text-[#212529] border-0 text-base leading-normal mt-8 '>
                    <fieldset className='mt-0 p-0 m-0 border-0 '>
                        <input
                         type="hidden"
                         className='leading-normal text font-inherit m-0 p-0'
                         />
                         <label htmlFor="username" className="block mb-4 ">
                          <span>Username</span>
                          <span className="border-[rgba(33,37,41,0.2)] focus:border-[rgb(1,180,228)] text-[#212529]  bg-white text-base leading-normal m-0 p-0 w-full min-w-0 border border-solid font-normal text-start shadow-none items-stretch relative overflow-hidden truncate outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md ">
                            <input
                             type="text" 
                             value={userName}
                             onChange={(e)=>setUserName(e.target.value)}
                             className="w-full mt-0 py-1.5 px-3 border-0! outline-0 shadow-none border-[rgba(33,37,41,0.2)] flex-1 relative z-1 truncate m-0 p-0 inline-flex flex-row flex-nowrap align-middle rounded-md " />
                          </span>
                         </label>

                         <label htmlFor="password" className="mb-0 block">
                          <span>Password</span>
                          <span className="border-[rgba(33,37,41,0.2)] focus:border-[rgb(1,180,228)] text-[#212529]  bg-white text-base leading-normal m-0 p-0 w-full min-w-0 border border-solid font-normal text-start shadow-none items-stretch relative overflow-hidden truncate outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md">
                            <input
                             type="password"
                             value={password}
                             onChange={(e)=>setPassword(e.target.value)}
                             className="w-full mt-0 py-1.5 px-3 border-0! outline-0 shadow-none border-[rgba(33,37,41,0.2)] flex-1 relative z-1 truncate m-0 p-0 inline-flex flex-row flex-nowrap align-middle rounded-md " />
                          </span>
                         </label>
                    </fieldset>
                    <div className="mt-7.5 w-full flex gap-4 flex-col lg:flex-row justify-between items-center ">
                      <div className=" items-center flex justify-center lg:justify-start">
                      <input type="submit" value='Login' className="cursor-pointer border-[#dee2e6] text-[#212529] bg-[#dee2e6] py-1.5 px-3 text-base leading-normal border border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center gap-2 align-middle select-none outline-0 relative rounded-md " />
                      <p className="mb-0 ml-4 text-base m-[0_0_16px] p-0">
                        <Link href="/reset-password" className='text-[rgba(1,180,228)] underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3px'>Reset password</Link>
                      </p>
                    </div>

                    <div className="w-full lg:w-auto">
                      <input type="submit" value='Login with google' className="w-full lg:w-auto cursor-pointer border-[#dee2e6] text-[#212529] bg-[#dee2e6] py-1.5 px-3 text-base leading-normal border border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center gap-2 align-middle select-none outline-0 relative rounded-md " />
                    </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
