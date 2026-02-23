import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const DataDetail = ({poster, title, year, certification, date, country, genres}) => {
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
  const size = "/w300_and_h450_multi_faces_filter(blur)";
  const size2= "/w300_and_h450_face/";
  return (
    <div className='flex flex-nowrap '>
      <div className="border-0 min-w-75 w-75 h-112.5 overflow-hidden rounded-lg group ">
        <div className="block w-75 aspect-[auto_calc(2/3)] relative top-0 left-0 rounded-lg overflow-hidden ">
          <div className='w-full h-full'>
            <div className="w-full aspect-[auto_calc(2/3)] bg-position-[0_0] bg-cover " style={{backgroundImage:`url(${TMDB_IMAGE_BASE}${size}${poster})`}}>
              <Image
                fill
                src={`${TMDB_IMAGE_BASE}${size2}${poster}`}
                alt='movie-poster'
                className='block w-full min-w-full h-full min-h-full border-0 outline-0 align-middle '
              />
            </div>
          </div>
          
          <div className="w-75 aspect-[auto_calc(2/3)] bg-[rgba(0,0,0,.7)] absolute top-0 left-0 text-center rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 [transition:linear_.2s] [backdrop-filter:blur(20px)]">
          <Link href="" className='text-white w-full aspect-[auto_calc(2/3)] inline-flex items-center justify-center text-[20.8px] font-normal underline'><span className="mr-1.5 relative top-0 left-0 inline-flex w-4 min-w-4 h-4 min-h-4 bg-center bg-no-repeat text-inherit items-center justify-center " style={{backgroundImage:`url("/expand.svg")`}}></span>
          Expand</Link>
          </div>
        </div>
      </div>

      <div className="flex">
        <section className="flex flex-wrap items-start content-center pl-10 ">
          <div className="w-full mb-6 flex flex-wrap ">
            <h2 className="w-full m-0 p-0 text-[35.2px] font-semibold leading-none ">
              <Link href="" className='font-bold text-white '>{title}</Link>
              <span className="opacity-80 font-normal "> ({year})</span>
            </h2>
            <div className="flex mt-1 ">
              <span className="inline-flex whitespace-nowrap items-center p-[2.4px_4px_2.4px]! border solid border-white leading-none rounded-xs mr-1.75 ">{certification}</span>
              <span className="pl-0 relative top-0 left-0 before:content-[''] before:text-[17.6px] before:leading-none before:w-full before:h-full before:absolute  before:top-0 before:left-1.75 before:inline-flex before:items-center before:-z-1 ">{date} ({country})</span>
              <span className="ml-2 relative top-0 left-0  before:content-[''] before:text-[17.6px] before:leading-none before:w-full before:h-full before:absolute  before:top-0 before:left-1.75 before:inline-flex before:items-center before:-z-1">•
                <Link href='' className='text-white font-normal hover:underline hover:opacity-80  ml-2'>{genres[0].name}</Link>,
                <Link href='' className='text-white font-normal hover:underline hover:opacity-80 '> {genres[1].name}</Link>, and
                <Link href='' className='text-white font-normal hover:underline hover:opacity-80 '> {genres[2].name}</Link>


              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DataDetail
