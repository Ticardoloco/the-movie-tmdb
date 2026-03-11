import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ReviewBox = ({avatar, name, rating, date, content}) => {
    const size = "/w45_and_h45_face";
    const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
  return (
    <div className='w-full p-5 border text-black border-solid border-[rgba(227,227,227,1)] rounded-lg shadow-[0_2px_8px_rgba(0,0,0,.1)] bg-white '>
      <div className="w-full flex items-start lg:items-center ">
        <div className="w-12 mr-4 ">
            <Link href='' className='block text-black font-normal '>
            <Image
            width={45}
            height={45}
            src={`${TMDB_IMAGE_BASE}${size}${avatar}`}
            alt='avatar'
            className='min-w-11.25 w-11.25 min-h-11.25 h-11.25 block rounded-full outline-0 border-0 max-w-[inherit] align-middle '
            />
            </Link>
        </div>
        
        <div className="w-full ">
            <h3 className="-mt-1.5 inline-block mb-0 pb-0 text-[20.8px] font-bold m-[0_0_4px] p-0 leading-none ">A review by {name}</h3>
            <div className="flex items-center mt-0.5 ">
                <div className="flex items-start lg:items-center p-[0_8px_0_6px] font-semibold bg-[rgba(3,37,65,1)] justify-center text-white border-solid border border-[rgba(3,37,65,1)] rounded-md overflow-hidden text-[14.4px] mr-2 ">
                    <span className="mr-0.5 relative top-0 left-0 inline-flex min-w-[14.4px] w-[14.4px] min-h-[14.4px] h-[14.4px] leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center" style={{backgroundImage:`url('/star.svg')`}}></span>
                    {Math.round(rating*10)}
                    <span className="inline-flex items-start pb-px text-[10.4px]">%</span>
                </div>
                <h5 className="font-light text-[14.4px] mb-0 p-0 m-0 leading-none ">
                    Written by <Link href="" className='text-black font-normal mr-0.75'>{name}</Link>
                     on {date}
                </h5>
            </div>
        </div>
      </div>
      <div className="pt-5 before:clear-both before:content-[''] before:block ">
        <p className="mb-0 m-[0_0_16px] text-base ">{content}... <Link href='' className='underline decoration-[#666] decoration'>read the rest</Link></p>
      </div>
    </div>
  )
}

export default ReviewBox
