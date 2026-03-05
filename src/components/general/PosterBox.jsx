import Image from 'next/image'
import React from 'react'

const PosterBox = ({id, poster}) => {
    const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
    const size = "/w188_and_h282_face"
  return (
    <div className='rounded-tr-none rounded-br-none min-w-50 w-50 min-h-75 h-75 rounded-none border-0 bg-[#dbdbdb] bg-size-[50%] relative top-0 left-0 inline-flex leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center' style={{backgroundImage:`url('/img-card-bg.svg')`}}>
      <Image
      fill
      src={`${TMDB_IMAGE_BASE}${size}${poster}`}
      alt='poster'
      className='min-w-50 w-50 min-h-75 h-75 outline-0 border-0 max-w-[inherit] block align-middle'
      />
    </div>
  )
}

export default PosterBox
