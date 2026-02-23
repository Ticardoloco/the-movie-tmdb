import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MovieBox = ({id, title, poster, rating, date, description}) => {
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
  return (
    <div className='relative top-0 left-0 flex lg:flex-wrap content-start border border-solid border-[rgb(227,227,227,1)] lg:border-[rgb(227,227,227)] rounded-md lg:rounded-lg overflow-hidden mt-7.5 w-full lg:w-[175.66px]  lg:min-w-[175.66px] lg:max-w-[calc((1400px-80px-260px-(30px*4))/4)] shadow-[0_2px_8px_rgba(0,0,0,.1)] bg-white '>
      <div className=" max-w-[calc(100vw-42px)] flex lg:max-w-none lg:w-full h-auto lg:h-[266.5px] lg:min-h-[266.5px] max-h-[calc((1400px-80px-260px-30px*4)/4*1.5)]">
      <div className="w-23.5 lg:w-full h-35.25 lg:h-full relative top-0 left-0 rounded-none border-0 bg-[#dbdbdb] bg-size-[50%] inline-flex min-w-23.5 lg:min-w-4 min-h-4 leading-[inherit] bg-position-[center_center] bg-no-repeat text-inherit items-center justify-center" style={{
            backgroundImage: `url('/img-card-bg.svg')`
          }}>
            <Link href={id} className='inline-block w-full h-full text-black '>
            <Image
            fill  
            src={`${TMDB_IMAGE_BASE}/w220_and_h330_face${poster}`}
            alt='poster'
            className='inline-block w-full h-full outline-0 border-0 text-black font-normal'
            />
            </Link>
          </div>

          <div className="hidden lg:block absolute top-2 right-2 z-4 opacity-60">
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
      <div className="w-full p-3.5 lg:p-[26px_10px_12px] relative whitespace-normal flex content-start flex-wrap items-start ">
        <div className={`hidden absolute -top-4.75 left-2.5 w-9.5 h-9.5 lg:flex justify-center items-center rounded-[50%] transform scale-100 transition-transform duration-200 ${Math.round(rating*10)>=70?"bg-green-400":"bg-yellow-400"}`}>
          <div className="mr-0 w-8.5 h-8.5 p-0.5 inline-block rounded-[50%] bg-[#081c22]">
            <div className="relative inline-block w-full h-full text-center">
              <div className="w-full h-full flex items-center justify-center">
                <span className="pt-px pl-px text-[11px] text-white not-italic font-black normal-case leading-none after:content-['*']">{Math.round(rating*10)}</span>
              </div>
              <canvas className='h-8.5 w-8.5 bg-transparent absolute top-0 left-0'></canvas>
            </div>
          </div>
        </div>

        <h2 className="hidden lg:block text-base leading-normal m-0 w-full wrap-break-word font-semibold p-0 ">
          <Link href="/" className='font-bold text-black text-base leading-normal wrap-break-word hover:underline decoration-[#0177d2] hover:text-[#0177d2]'>{title}</Link>
        </h2>
        <p className="hidden lg:block text-base m-0 p-0 text-[rgba(0,0,0,.6)] ">{date}</p>

        <div className="lg:hidden flex w-full items-start">
          <div className="flex-wrap w-full items-baseline overflow-hidden">
            <div className="leading-[100%]">
              <Link href="/" className='whitespace-nowrap overflow-hidden truncate text-black font-normal'>
              <h2 className="block text-base m-0 whitespace-normal overflow-visible text-clip leading-normal w-full">{title}</h2>
              </Link>
            </div>
            <span className="ml-0 text-[14.4px] w-full whitespace-nowrap text-[#999]">{date}</span>
          </div>
        </div>
        <div className="block lg:hidden max-h-[51.2px]  h-auto mt-5 ">
          <p className="w-full text-[14.4px] leading-[17.28px] [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] whitespace-pre-wrap truncate overflow-hidden m-0 text-black pl-0 pr-0">{description}</p>
        </div>
      </div>
      <div className="invisible absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-2xl w-full h-full rounded-lg z-5 transition-all duration-100 ease-linear opacity-0"></div>
    </div>
  )
}

export default MovieBox
