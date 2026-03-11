import Link from 'next/link'
import React from 'react'

const MediaTitle = ({media, setMedia, videoTotal, backdropTotal, posterTotal}) => {
  return (
   <div className="w-full">
     <div className='hidden w-full lg:flex items-baseline '>
      <h3 className="inline-block mr-12.5 text-black font-semibold text-[22.4px] mb-1.25 m-[0_0_4px] leading-none ">Media</h3>
      <ul className="w-full text-black">
        <li onClick={()=>setMedia("Most Popular")} className={`inline-block mr-6 pb-0.75 text-[17.6px]  ${media === 'Most Popular' ? "border-b-black border-b-4 border-b-solid": ""}`}>
          <Link href='' className='text-black font-semibold '>Most Popular</Link>
        </li>

        <li onClick={()=>setMedia("Videos")} className={`inline-block mr-6 pb-0.75 text-[17.6px]  ${media === 'Videos' ? "border-b-black border-b-4 border-b-solid": ""}`}>
          <Link href='' className='text-black font-semibold '>Videos <span className="inline-flex items-center opacity-60 font-semibold ">{videoTotal}</span></Link>
        </li>

        <li onClick={()=>setMedia("Backdrops")} className={`inline-block mr-6 pb-0.75 text-[17.6px]  ${media === 'Backdrops' ? "border-b-black border-b-4 border-b-solid": ""}`}>
          <Link href='' className='text-black font-semibold '>Backdrops <span className="inline-flex items-center opacity-60 font-semibold ">{backdropTotal}</span></Link>
        </li>

        <li onClick={()=>setMedia("Posters")} className={`inline-block mr-6 pb-0.75 text-[17.6px]  ${media === 'Posters' ? "border-b-black border-b-4 border-b-solid": ""}`}>
          <Link href='' className='text-black font-semibold '>Posters <span className="inline-flex items-center opacity-60 font-semibold ">{posterTotal}</span></Link>
        </li>
      </ul>
    </div>

     <div className='mb-3 relative top-0 left-0 p-0 justify-between w-full flex lg:hidden items-baseline '>
      <h3 className="inline-block mr-0 lg:mr-12.5 text-black font-semibold p-[0_20px] lg:p-0 text-[19.2px] lg:text-[22.4px] mb-1.25 m-[0_0_4px] leading-none ">Media</h3>
      <ul className="pr-5 flex flex-row-reverse flex-wrap items-start w-auto m-0 p-0 text-black">
        <li onClick={()=>setMedia("Most Popular")} className={`inline-block  mr-0 ml-6 text-right pb-0.75 text-base  ${media === 'Most Popular' ? "border-b-black mb-1.25 border-b-4 border-b-solid": ""}`}>
          <Link href='' className='text-black font-semibold '>Most Popular</Link>
        </li>

        <li onClick={()=>setMedia("Videos")} className={`inline-block  mr-0 ml-6 text-right pb-0.75 text-base ${media === 'Videos' ? "border-b-black border-b-4 mb-1.25 border-b-solid": ""}`}>
          <Link href='' className='text-black font-semibold '>Videos <span className="inline-flex items-center opacity-60 font-semibold ">{videoTotal}</span></Link>
        </li>

        <li onClick={()=>setMedia("Backdrops")} className={`inline-block  mr-0 ml-6 text-right pb-0.75 text-base  ${media === 'Backdrops' ? "border-b-black border-b-4 mb-1.25 border-b-solid": ""}`}>
          <Link href='' className='text-black font-semibold '>Backdrops <span className="inline-flex items-center opacity-60 font-semibold ">{backdropTotal}</span></Link>
        </li>

        <li onClick={()=>setMedia("Posters")} className={`inline-block  mr-0 ml-6 text-right pb-0.75 text-base ${media === 'Posters' ? "border-b-black border-b-4 mb-1.25 border-b-solid": ""}`}>
          <Link href='' className='text-black font-semibold '>Posters <span className="inline-flex items-center opacity-60 font-semibold ">{posterTotal}</span></Link>
        </li>
      </ul>
    </div>
   </div>
  )
}

export default MediaTitle
