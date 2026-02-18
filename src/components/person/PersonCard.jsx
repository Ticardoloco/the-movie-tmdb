import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PersonCard = ({id, image, name, title, title1, title2, title3, title4, title5}) => {
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
  return (
    <div className='flex items-stretch '>
      <div className="mt-5 lg:mt-7.5 text-black flex-wrap content-start w-[calc((100vw-40px-20px)/2)] lg:w-[calc((100vw-80px-60px)/4)] max-w-[calc((1400px-40px-20px)/2)] lg:max-w-[calc((1400px-80px-60px)/4)] overflow-hidden rounded-tl-lg rounded-tr-lg bg-white float-none mb-0 flex items-center justify-start shadow-[0_2px_8px_rgba(227,227,227,0.1)] border border-solid border-[rgba(227,227,227,1)]">
        <div className="w-full h-[calc((100vw-40px-20px)/2)] lg:h-[calc((100vw-80px-60px)/4)] max-h-[calc((1400px-40px-20px)/2)] lg:max-h-[calc((1400px-80px-60px)/4)] m-0 overflow-visible flex items-center rounded-none border-0 bg-[#dbdbdb] bg-size-[50%] relative top-0 left-0 min-w-4 min-h-4 leading-[inherit] bg-center bg-no-repeat text-inherit justify-center" style={{backgroundImage:`url("/person.svg")`}}>
          <Link href="/" className='w-full h-full block text-black font-normal leading-[inherit]'>
            <Image
            fill
            src={`${TMDB_IMAGE_BASE}/w235_and_h235_face${image}`}
            alt='person'
            className='w-full h-full block rounded-lg outline-0 border-0 '
            />
          </Link>
        </div>
        <div className="py-2 px-2.5 w-full text-black ">
          <p className="p-0 w-full leading-[19.2px] m-0 text-base ">
            <Link href="/" className='font-semibold text-[17.6px] text-black '>{name}</Link>
          </p>
          <p className="text-[14.4px] font-normal text-[rgba(0,0,0,0.6)] block mt-0 mb-0 p-0 w-full leading-[17.28px] m-0 ">{title}{title1}, {title2}{title3}, and {title4}{title5}</p>
        </div>
      </div>
    </div>
  )
}

export default PersonCard
