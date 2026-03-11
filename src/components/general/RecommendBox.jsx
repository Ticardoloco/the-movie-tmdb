import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecommendBox = ({id, poster, date, name, rating}) => {
    const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
    const size = "/w500_and_h282_face";
  return (
    <div className='inline-block w-62.5 m-[0_15px_0_0]'>
      <div className="w-62.5 h-35.25 overflow-hidden bg-size-[30%] bg-[#dbdbdb] rounded-md lg:rounded-lg relative top-0 left-0 inline-flex min-w-4 min-h-4 bg-center bg-no-repeat text-inherit items-center justify-center " style={{backgroundImage:`url("/img-card-bg.svg")`}}>
        <Link href={id} className='font-normal text-base text-black w-full h-full block group '>
        <Image
        fill
        src={`${TMDB_IMAGE_BASE}${size}${poster}`}
        alt='recommendation'
        className='top-0 left-0 w-62.5 h-35.25 rounded-md lg:rounded-lg relative outline-0 border-0 max-w-[inherit] block align-middle group'
        />
        <div className="invisible bg-[rgba(255,255,255,.9)] absolute bottom-0 left-0 h-10 w-full z-1 px-2.5 flex items-center justify-between group-hover:visible duration-200  transition ">
            <span className="text-base inline-flex items-center ">
                <span className="mr-1 relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center" style={{backgroundImage:`url('/date.svg')`}}></span>
                {date}
            </span>
            <span className="inline-flex">
                <span className="mr-1 top-0 pl-1 text-black leading-0 relative left-0 inline-flex min-w-4 w-4 min-h-4 h-4 bg-center bg-no-repeat items-center justify-center float-right" style={{backgroundImage:`url('/star-black.svg')`}}></span>

                <span className="mr-1 top-0  text-black leading-[inherit] relative left-0 inline-flex min-w-4 w-4 min-h-4 h-4 bg-center bg-no-repeat items-center justify-center float-right" style={{backgroundImage:`url('/heart-black.svg')`}}></span>

                <span className="mr-1 top-0  text-black leading-[inherit] relative left-0 inline-flex min-w-4 w-4 min-h-4 h-4 bg-center bg-no-repeat items-center justify-center float-right" style={{backgroundImage:`url('/bookmark-black.svg')`}}></span>
            </span>
        </div>
        </Link>
      </div>
      <p className="text-black flex justify-between mb-0 p-0 w-full leading-[19.2px] m-0 text-base ">
        <Link href={id} className='font-normal text-base whitespace-nowrap overflow-hidden truncate inline-block pr-5 underline-offset-3 text-black decoration-[#666] hover:underline hover:opacity-60'>
        <span>{name}</span>
        </Link>
        <span className="mt-0 mr-0 inline-flex items-center ">{Math.round(rating*10)} <span>%</span></span>
      </p>
    </div>
  )
}

export default RecommendBox
