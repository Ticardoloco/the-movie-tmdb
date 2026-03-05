import Link from 'next/link'
import React from 'react'

const MediaTitle = ({media, setMedia, videoTotal, backdropTotal, posterTotal}) => {
  return (
    <div className='w-full flex items-baseline '>
      <h3 className="inline-block mr-12.5 text-black font-semibold text-[22.4px] mb-5 m-[0_0_4px] leading-none ">Media</h3>
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
  )
}

export default MediaTitle
