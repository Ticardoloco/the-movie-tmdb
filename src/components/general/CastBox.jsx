import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CastBox = ({id, profile, name, character, episode}) => {
    const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
    const size = "/w138_and_h175_face";
  return (
    <div className='mb-2.5 first:ml-7.5 lg:first:ml-0 ml-2.5 mr-1 border border-solid border-[rgba(227,227,227,1)] pb-2.5 rounded-lg overflow-hidden inline-block lg:block min-w-28 lg:min-w-35 w-28 lg:w-35 text-left bg-white shadow-[0_2px_8px_rgba(0,0,0,.1)]'>
      <Link href='' className='min-w-28 lg:min-w-34.5 w-28 lg:w-34.5 h-33.75 lg:h-43.75 block text-black bg-[0_0] font-normal '>
      <div className="w-auto flex content-center items-center flex-wrap overflow-hidden truncate rounded-none border-0 h-full bg-[#dbdbdb] bg-size-[50%] relative top-0 left-0 min-w-4  min-h-4 leading-[inherit] bg-center bg-no-repeat text-inherit justify-center " style={{backgroundImage:`url('/person.svg')`}}>
      <Image
      fill
      src={`${TMDB_IMAGE_BASE}${size}${profile}`}
      alt='profile'
      className='w-full h-full outline-0 border-0 max-w-inherit block align-middle'
      />
      </div>
      </Link>
      <p className="pt-2.5 px-2.5 text-base m-0 overflow-visible lg:overflow-hidden text-clip whitespace-normal [word-wrap:break-word] lg:truncate ">
        <Link href='' className='text-black font-semibold underline-offset-3'>{name}</Link>
      </p>
      <p className="mb-0 px-2.5 text-[14.4px] text-black m-0 overflow-visible lg:overflow-hidden whitespace-normal text-clip [word-wrap:break-word] lg:truncate ">{character}</p>
      {episode && (<p className="p-[0_10px] text-[14.4px] text-[rgba(0,0,0,.5)] overflow-hidden truncate">{episode} Episodes</p>)}
    </div>
  )
}

export default CastBox
