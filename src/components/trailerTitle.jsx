"use client"
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const TrailerTitle = ({text1, titleList, slide, setSlide, dropDown, setDropDown}) => {

 

const activeLabel = slide || titleList?.[0] || "";

  return (
    <div className=' flex px-5 lg:px-10  justify-start items-center relative z-2'>
      <h2 className="mr-5 whitespace-nowrap m-0 font-semibold text-2xl p-0 leading-none text-[#efefef]">{text1}</h2>
      <div className="box-border hidden lg:block">
        <div className="items-stretch border border-[#1ed5a9] rounded-[30px] flex justify-start ">
            {titleList?.map(cur=>(
              <div key={cur} onClick={()=>setSlide(cur)} className="relative top-0 left-0 z-1 ">
                <h3 className="text-base  mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0 "><Link className={`transition-colors  py-1 px-5 rounded-[30px]  duration-500  font-semibold ${slide===cur?"bg-[linear-gradient(to_right,#c0fecf_0%,#1ed5a9_100%)] text-[rgb(3,37,65)] ":"text-[#efefef]"}`} href="/">{cur}</Link></h3>
                
            </div>

            ))}
            
        </div>
      </div>

        <div className="w-full h-7.5 block lg:hidden relative top-0 left-0">
          <div className="bg-[linear-gradient(to_right,#c0fecf_0%,#1ed5a9_100%)] rounded-[15px] absolute top-0 left-0 block ml-0 w-auto items-stretch border border-[#1ed5a9]">
            <div onClick={()=> setDropDown(!dropDown)} className="block rounded-[30px] bg-[#1ed5a9]">
              <h3 className="text-base py-1 px-5 mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0">
               <div className="flex items-center">
                 <Link className="bg-[#1ed5a9] text-[rgb(3,37,65)] rounded-[30px]" href="/">{activeLabel} </Link>
                <span onClick={(e)=>{e.stopPropagation(); setDropDown(!dropDown);}} className="ml-1 opacity-[1] filter [invert(89%)_sepia(21%)_saturate(454%)_hue-rotate(75deg)_brightness(104%)_contrast(99%)] items-center font-normal min-w-4 w-4 min-h-4 h-4 leading-[inherit] inline-flex text-[rgb(3,37,65)]"><ChevronDown strokeWidth={4}/></span>
               </div>
              </h3>
            </div>

           {dropDown?
            <div>
              
                 {titleList?.map(cur=>(
                  <div key={cur} onClick={()=>{setSlide(cur); setDropDown(false);}} className={`${slide===cur?"block rounded-[30px] bg-[#1ed5a9]":""}`}>
                    {slide !== cur && (
                      <h3 className="text-base py-1 px-5 mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0">
                 <div className="flex items-center">
                 <Link className="text-[rgb(3,37,65)] transition-[color,-webkit-text-fill-color] duration-500 font-semibold outline-0 flex content-center items-center" href="/">{cur} </Link>
                <span onClick={(e)=>{e.stopPropagation(); setDropDown(!dropDown);}} className={` ml-1 opacity-[1] filter [invert(89%)_sepia(21%)_saturate(454%)_hue-rotate(75deg)_brightness(104%)_contrast(99%)] items-center font-normal min-w-4 w-4 min-h-4 h-4 leading-[inherit] ${slide===cur?"inline-flex":"hidden"} text-[rgb(3,37,65)] `}><ChevronDown strokeWidth={4}/></span>
               </div>
              </h3>
                    )}
            </div>
                 ))}

            </div>
           : null}


          </div>
        </div>
      
    </div>
  )
}

export default TrailerTitle
