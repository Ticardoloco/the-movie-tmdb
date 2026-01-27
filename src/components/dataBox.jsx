import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DataBox = ({id, title, poster, rating, date}) => {
    const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
  return (
    <div className='w-37.5 min-w-37.5 bg-position-[0_0] border-0 shadow-none mt-0 overflow-visible relative top-0 left-0 flex flex-wrap content-start rounded-lg max-w-[calc((1400px-80px-260px-(30px*4))/4)]'>
      <div className="shadow-[0_2px_8px_rgba(0,0,0,0.1)] rounded-lg w-full min-h-56.25 h-56.25 bg-[#dbdbdb] overflow-hidden max-h-[calc((1400px-80px-260px-30px*4))]">
        <div className="w-full h-full relative top-0 left-0 inline-block bg-[#dbdbdb] bg-size-[50%] min-w-4 min-h-4 leading-[inherit] bg-center bg-no-repeat text-inherit items-center " style={{
            backgroundImage: `url('/img-card-bg.svg')`
    ,
          }}>
            <Link className='inline-block w-full h-full text-black bg-position-[0_0] font-normal ' href="/">
                <Image
                fill
                src={`${TMDB_IMAGE_BASE}/w220_and_h330_face${poster}`}
                alt='poster'
                className='inline-block w-full h-full outline-0 border-0 max-w-[inherit] '
                />
            </Link>
          </div>
          <div className="absolute top-2 right-2 z-4 opacity-[.6] ">
            <Link className='text-black bg-position-[0_0] font-normal' href="/">
                <div className="text-[25.6px] relative top-0 left-0">
                    <Image
                    width={26}
                    height={26}
                    src="/dotted.svg"
                    alt='dotted'
                    />
                </div>
            </Link>
          </div>
      </div>
      <div className="pb-0 w-full p-[26px_10px_12px] relative whitespace-normal flex content-start flex-wrap">
        <div className={`absolute -top-4.75 left-2.5 w-9.5 h-9.5 flex justify-center items-center rounded-[50%] transform scale-100 transition-transform duration-200 ${Math.round(rating)>=70?"bg-green-400":"bg-yellow-400"}`}>
          <div className="mr-0 w-8.5 h-8.5 p-0.5 inline-block rounded-[50%] bg-[#081c22]">
            <div className="relative inline-block w-full h-full text-center">
              <div className="w-full h-full flex items-center justify-center">
                <span className="pt-px pl-px text-[11px] text-white not-italic font-black normal-case leading-none after:content-['*']">{rating}</span>
              </div>
              <canvas className='h-8.5 w-8.5 bg-transparent absolute top-0 left-0'></canvas>
            </div>
          </div>
        </div>
          <h2 className="text-base leading-normal m-0 w-full wrap-break-word font-semibold p-0">
            <Link className='font-bold text-black decoration-solid hover:underline decoration-[#0177d2] hover:text-[#0177d2]' href="/">{title}</Link>
          </h2>
          <p className="text-base m-0 p-0 text-[rgba(0,0,0,0.6)]">{date}</p>
      </div>
      <div className="invisible absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-2xl w-full h-full rounded-lg z-5 transition-all duration-100 ease-linear opacity-0"></div>
    </div>
  )
}

export default DataBox
