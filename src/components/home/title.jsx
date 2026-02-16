"use client"
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Title = ({text1, text2, text3, text4, text5, text6, slide, setSlide, dropDown, setDropDown}) => {

  const slideLabelMap = {
  text2,
  text3,
  text4,
  text5,
  text6,
};

const activeLabel = slideLabelMap[slide] || text2;

  return (
    <div className=' flex px-5 lg:px-10 justify-start items-center relative z-2'>
      <h2 className="mr-5 whitespace-nowrap m-0 font-semibold text-2xl p-0 leading-none text-black">{text1}</h2>
      <div className="box-border hidden lg:block">
        <div className="items-stretch border border-[rgb(17,46,70)] rounded-[30px] flex justify-start ">
            <div onClick={()=>setSlide("text2")} className="relative top-0 left-0 z-1 ">
                <h3 className="text-base  mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0 "><Link className={`transition-colors  py-1 px-5 rounded-[30px]  duration-500  font-semibold ${slide==="text2"?"text-[#1ed5a9] bg-[rgb(3,37,65)] ":"text-[rgb(3,37,65)]"}`} href="/">{text2}</Link></h3>
                
            </div>

            <div onClick={()=>setSlide("text3")} className="relative top-0 left-0 z-1">
                 <h3 className="text-base mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0 "><Link className={`transition-colors  py-1 px-5 rounded-[30px]  duration-500  font-semibold ${slide==="text3"?"text-[#1ed5a9] bg-[rgb(3,37,65)] ":"text-[rgb(3,37,65)]"}`} href="/">{text3}</Link></h3>
            </div>

            
            {text4 && (
              <div onClick={()=>setSlide("text4")} className="relative top-0 left-0 z-1">
                 <h3 className="text-base  mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0 "><Link className={`transition-colors  py-1 px-5 rounded-[30px]  duration-500  font-semibold ${slide==="text4"?"text-[#1ed5a9] bg-[rgb(3,37,65)] ":"text-[rgb(3,37,65)]"}`} href="/">{text4}</Link></h3>
            </div>
            )}

            
            {text5 && (
              <div onClick={()=>setSlide("text5")} className="relative top-0 left-0 z-1">
                 <h3 className="text-base  mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0 "><Link className={`transition-colors  py-1 px-5 rounded-[30px]  duration-500  font-semibold ${slide==="text5"?"text-[#1ed5a9] bg-[rgb(3,37,65)] ":"text-[rgb(3,37,65)]"}`} href="/">{text5}</Link></h3>
            </div>
            )}

            
            {text6 && (
              <div onClick={()=>setSlide("text6")} className="relative top-0 left-0 z-1">
                 <h3 className="text-base  mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0 "><Link className={`transition-colors  py-1 px-5 rounded-[30px]  duration-500  font-semibold ${slide==="text6"?"text-[#1ed5a9] bg-[rgb(3,37,65)] ":"text-[rgb(3,37,65)]"}`} href="/">{text6}</Link></h3>
            </div>
            )}


            
        </div>
      </div>

        <div className="w-full h-7.5 block lg:hidden relative top-0 left-0">
          <div className="bg-[linear-gradient(to_right,#c0fecf_0%,#1ed5a9_100%)] rounded-[15px] absolute top-0 left-0 block ml-0 w-auto items-stretch border border-[rgb(3,37,65)]">
            <div onClick={()=> setDropDown(!dropDown)} className="block rounded-[30px] bg-[rgb(3,37,65)]">
              <h3 className="text-base py-1 px-5 mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0">
               <div className="flex items-center">
                 <Link className="text-[#1ed5a9] bg-[rgb(3,37,65)] rounded-[30px]" href="/">{activeLabel} </Link>
                <span onClick={(e)=>{e.stopPropagation(); setDropDown(!dropDown);}} className="ml-1 opacity-[1] filter [invert(89%)_sepia(21%)_saturate(454%)_hue-rotate(75deg)_brightness(104%)_contrast(99%)] items-center font-normal min-w-4 w-4 min-h-4 h-4 leading-[inherit] inline-flex text-[#1ed5a9]"><ChevronDown strokeWidth={4}/></span>
               </div>
              </h3>
            </div>

           {dropDown?
            <div>
              {slide!=="text2" &&(
                 <div onClick={()=>{setSlide('text2'); setDropDown(false);}} className={`${slide==="text2"?"block rounded-[30px] bg-[rgb(3,37,65)]":""}`}>
              <h3 className="text-base py-1 px-5 mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0">
                 <div className="flex items-center">
                 <Link className="text-[rgba(3,37,65,0.7)] transition-[color,-webkit-text-fill-color] duration-500 font-semibold outline-0 flex content-center items-center" href="/">{text2} </Link>
                <span onClick={(e)=>{e.stopPropagation(); setDropDown(!dropDown);}} className={` ml-1 opacity-[1] filter [invert(89%)_sepia(21%)_saturate(454%)_hue-rotate(75deg)_brightness(104%)_contrast(99%)] items-center font-normal min-w-4 w-4 min-h-4 h-4 leading-[inherit] ${slide==="text2"?"inline-flex":"hidden"} text-[#1ed5a9] `}><ChevronDown strokeWidth={4}/></span>
               </div>
              </h3>
            </div>
              )}

              {slide!=="text3" &&(
                 <div onClick={()=>{setSlide('text3'); setDropDown(false);}} className={`${slide==="text3"?"block rounded-[30px] bg-[rgb(3,37,65)]":""}`}>
              <h3 className="text-base py-1 px-5 mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0">
                 <div className="flex items-center">
                 <Link className="text-[rgba(3,37,65,0.7)] transition-[color,-webkit-text-fill-color] duration-500 font-semibold outline-0 flex content-center items-center" href="/">{text3} </Link>
                <span onClick={(e)=>{e.stopPropagation(); setDropDown(!dropDown);}} className={` ml-1 opacity-[1] filter [invert(89%)_sepia(21%)_saturate(454%)_hue-rotate(75deg)_brightness(104%)_contrast(99%)] items-center font-normal min-w-4 w-4 min-h-4 h-4 leading-[inherit] ${slide==="text3"?"inline-flex":"hidden"} text-[#1ed5a9] `}><ChevronDown strokeWidth={4}/></span>
               </div>
              </h3>
            </div>
              )}

            
             {slide!=="text4" && (
              <div>
                {text4 && (
              <div onClick={()=>{setSlide('text4'); setDropDown(false);}} className={`${slide==="text4"?"block rounded-[30px] bg-[rgb(3,37,65)]":""}`}>
              <h3 className="text-base py-1 px-5 mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0">
                 <div className="flex items-center">
                 <Link className="text-[rgba(3,37,65,0.7)] transition-[color,-webkit-text-fill-color] duration-500 font-semibold outline-0 flex content-center items-center" href="/">{text4} </Link>
                <span onClick={(e)=>{e.stopPropagation(); setDropDown(!dropDown);}} className={` ml-1 opacity-[1] filter [invert(89%)_sepia(21%)_saturate(454%)_hue-rotate(75deg)_brightness(104%)_contrast(99%)] items-center font-normal min-w-4 w-4 min-h-4 h-4 leading-[inherit] ${slide==="text4"?"inline-flex":"hidden"} text-[#1ed5a9] `}><ChevronDown strokeWidth={4}/></span>
               </div>
              </h3>
            </div>
             )}

              </div>
             )}

            {slide!=="text5" && (
              <div>
                {text5 && (
               <div onClick={()=>{setSlide('text5'); setDropDown(false);}} className={`${slide==="text5"?"block rounded-[30px] bg-[rgb(3,37,65)]":""}`}>
              <h3 className="text-base py-1 px-5 mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0">
                 <div className="flex items-center">
                 <Link className="text-[rgba(3,37,65,0.7)] transition-[color,-webkit-text-fill-color] duration-500 font-semibold outline-0 flex content-center items-center" href="/">{text5} </Link>
                <span onClick={(e)=>{e.stopPropagation(); setDropDown(!dropDown);}} className={` ml-1 opacity-[1] filter [invert(89%)_sepia(21%)_saturate(454%)_hue-rotate(75deg)_brightness(104%)_contrast(99%)] items-center font-normal min-w-4 w-4 min-h-4 h-4 leading-[inherit] ${slide==="text5"?"inline-flex":"hidden"} text-[#1ed5a9] `}><ChevronDown strokeWidth={4}/></span>
               </div>
              </h3>
            </div>
            )}
              </div>
            )}

             {slide!=="text6" && (
              <div>
                {text6 && (
              <div onClick={()=>{setSlide('text6'); setDropDown(false);}} className={`${slide==="text6"?"block rounded-[30px] bg-[rgb(3,37,65)]":""}`}>
              <h3 className="text-base py-1 px-5 mb-0 whitespace-nowrap inline-flex items-center justify-center font-semibold leading-5 m-0">
                <div className="flex items-center">
                 <Link className="text-[rgba(3,37,65,0.7)] transition-[color,-webkit-text-fill-color] duration-500 font-semibold outline-0 flex content-center items-center" href="/">{text6} </Link>
                <span onClick={(e)=>{e.stopPropagation(); setDropDown(!dropDown);}} className={` ml-1 opacity-[1] filter [invert(89%)_sepia(21%)_saturate(454%)_hue-rotate(75deg)_brightness(104%)_contrast(99%)] items-center font-normal min-w-4 w-4 min-h-4 h-4 leading-[inherit] ${slide==="text6"?"inline-flex":"hidden"} text-[#1ed5a9] `}><ChevronDown strokeWidth={4}/></span>
               </div>
              </h3>
            </div>
             )}
              </div>
             )}


            </div>
           : null}


          </div>
        </div>
      
    </div>
  )
}

export default Title
