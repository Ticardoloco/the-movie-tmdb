'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className='mb-5 mt-15 lg:mt-20 w-full '>
      <div className="w-full flex items-center justify-center ">
        <div className="max-w-350 w-full p-[0_20px] lg:p-[0_40px] ">
          <div className="flex items-start justify-center min-w-full flex-wrap lg:flex-nowrap ">
            <div className="m-0 block min-w-screen lg:min-w-65 w-65 border-t-none border-l-none border-r-none border border-solid border-[rgba(227,227,227,1)] rounded-none lg:rounded-lg overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,.1)] bg-white text-black">
              <h3 className="flex items-center justify-between m-0 font-semibold p-[10px_20px] lg:p-5 text-white bg-[rgba(1,180,228,1)] text-[19.2px] leading-none">Benefits of being a member</h3>
              <div>
                <ul className="overflow-visible p-[8px_0] m-0">
                  <li className="mt-0 px-5 whitespace-normal flex w-full text-base leading-[22.4px] m-0 ">
                    <span className="w-[19.2px] h-[19.2px] mr-2.5 top-0.5 relative left-0 inline-flex min-w-4 min-h-4 leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center" style={{ backgroundImage: `url('/mark-black.svg')` }}>
                    </span>
                    Find something to watch on your subscribed streaming services
                  </li>

                  <li className="mt-2.5 px-5 whitespace-normal flex w-full text-base leading-[22.4px] m-0 ">
                    <span className="w-[19.2px] h-[19.2px] mr-2.5 top-0.5 relative left-0 inline-flex min-w-4 min-h-4 leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center" style={{ backgroundImage: `url('/mark-black.svg')` }}>
                    </span>
                    Log the movies and TV shows you have watched
                  </li>

                  <li className="mt-2.5 px-5 whitespace-normal flex w-full text-base leading-[22.4px] m-0 ">
                    <span className="w-[19.2px] h-[19.2px] mr-2.5 top-0.5 relative left-0 inline-flex min-w-4 min-h-4 leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center" style={{ backgroundImage: `url('/mark-black.svg')` }}>
                    </span>
                    Keep track of your favourite movies and TV shows and get recommendations from them
                  </li>

                  <li className="mt-2.5 px-5 whitespace-normal flex w-full text-base leading-[22.4px] m-0 ">
                    <span className="w-[19.2px] h-[19.2px] mr-2.5 top-0.5 relative left-0 inline-flex min-w-4 min-h-4 leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center" style={{ backgroundImage: `url('/mark-black.svg')` }}>
                    </span>
                    Build and maintain a personal watchlist
                  </li>

                  <li className="mt-2.5 px-5 whitespace-normal flex w-full text-base leading-[22.4px] m-0 ">
                    <span className="w-[19.2px] h-[19.2px] mr-2.5 top-0.5 relative left-0 inline-flex min-w-4 min-h-4 leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center" style={{ backgroundImage: `url('/mark-black.svg')` }}>
                    </span>
                    Build custom mixed lists (movies and TV)
                  </li>

                  <li className="mt-2.5 px-5 whitespace-normal flex w-full text-base leading-[22.4px] m-0 ">
                    <span className="w-[19.2px] h-[19.2px] mr-2.5 top-0.5 relative left-0 inline-flex min-w-4 min-h-4 leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center" style={{ backgroundImage: `url('/mark-black.svg')` }}>
                    </span>
                    Take part in movie and TV discussions
                  </li>

                  <li className="mt-2.5 px-5 whitespace-normal flex w-full text-base leading-[22.4px] m-0 ">
                    <span className="w-[19.2px] h-[19.2px] mr-2.5 top-0.5 relative left-0 inline-flex min-w-4 min-h-4 leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center" style={{ backgroundImage: `url('/mark-black.svg')` }}>
                    </span>
                    Contribute to, and improve the information in our database
                  </li>
                </ul>
              </div>
            </div>
            <section className="mt-5 lg:mt-0 w-full text-black">
              <div className="p-0 lg:pl-7 5 w-full ">
                <h2 className="font-bold mb-0 text-2xl m-[0_0_4px] p-0">Sign up for an account</h2>
                <p className="mt-2.5 mb-0 p-0 text-base m-[0_0_16px] ">Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>
                <form action="/signup" className="p-0 text-[#212529] border-0 text-base leading-normal mt-8 ">
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
                          onChange={(e) => setUserName(e.target.value)}
                          className="w-full mt-0 py-1.5 px-3 border-0! outline-0 shadow-none border-[rgba(33,37,41,0.2)] flex-1 relative z-1 truncate m-0 p-0 inline-flex flex-row flex-nowrap align-middle rounded-md " />
                      </span>
                    </label>

                    <label htmlFor="password" className="mb-4 block">
                      <span>Password (4 characters minimum)</span>
                      <span className="border-[rgba(33,37,41,0.2)] focus:border-[rgb(1,180,228)] text-[#212529]  bg-white text-base leading-normal m-0 p-0 w-full min-w-0 border border-solid font-normal text-start shadow-none items-stretch relative overflow-hidden truncate outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full mt-0 py-1.5 px-3 border-0! outline-0 shadow-none border-[rgba(33,37,41,0.2)] flex-1 relative z-1 truncate m-0 p-0 inline-flex flex-row flex-nowrap align-middle rounded-md " />
                      </span>
                    </label>

                    <label htmlFor="password-confirm" className="mb-4 block">
                      <span>Password Confirm</span>
                      <span className="border-[rgba(33,37,41,0.2)] focus:border-[rgb(1,180,228)] text-[#212529]  bg-white text-base leading-normal m-0 p-0 w-full min-w-0 border border-solid font-normal text-start shadow-none items-stretch relative overflow-hidden truncate outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md">
                        <input
                          type="password"
                          value={passwordConfirm}
                          onChange={(e) => setPasswordConfirm(e.target.value)}
                          className="w-full mt-0 py-1.5 px-3 border-0! outline-0 shadow-none border-[rgba(33,37,41,0.2)] flex-1 relative z-1 truncate m-0 p-0 inline-flex flex-row flex-nowrap align-middle rounded-md " />
                      </span>
                    </label>

                    <label htmlFor="email" className="block mb-0 ">
                      <span>Email</span>
                      <span className="border-[rgba(33,37,41,0.2)] focus:border-[rgb(1,180,228)] text-[#212529]  bg-white text-base leading-normal m-0 p-0 w-full min-w-0 border border-solid font-normal text-start shadow-none items-stretch relative overflow-hidden truncate outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md ">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full mt-0 py-1.5 px-3 border-0! outline-0 shadow-none border-[rgba(33,37,41,0.2)] flex-1 relative z-1 truncate m-0 p-0 inline-flex flex-row flex-nowrap align-middle rounded-md " />
                      </span>
                    </label>
                  </fieldset>
                  <p className="mb-0 mt-7.5 p-0 text-base m-[0_0_16px]">By clicking the &quot;Sign up&quot; button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>

                  <div className="mt-7.5 w-full flex gap-4 flex-col lg:flex-row justify-between items-center">
                    <div className=" items-center flex justify-center lg:justify-start">
                      <input type="submit" value='Sign Up' className="cursor-pointer border-[#dee2e6] text-[#212529] bg-[#dee2e6] py-1.5 px-3 text-base leading-normal border border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center gap-2 align-middle select-none outline-0 relative rounded-md " />
                      <p className="mb-0 ml-4 text-base m-[0_0_16px] p-0">
                        <Link href="/cancel" className='text-[rgba(1,180,228)] underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3px'>Cancel</Link>
                      </p>
                    </div>
                    <div className="w-full lg:w-auto">
                      <input type="submit" value='Sign Up with google' className="w-full lg:w-auto cursor-pointer border-[#dee2e6] text-[#212529] bg-[#dee2e6] py-1.5 px-3 text-base leading-normal border border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center gap-2 align-middle select-none outline-0 relative rounded-md " />
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
