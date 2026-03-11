import Link from 'next/link'
import React from 'react'

const MediaBox = ({poster}) => {
  return (
    <div className='min-w-62.5 lg:min-w-133.25 w-62.5 lg:w-133.25 min-h-35.25 lg:min-h-75 h-35.25 lg:h-75 border-0 mt-0 rounded-lg flex flex-wrap lg:flex-nowrap max-w-[calc(100vw-40px)] lg:max-w-none items-start shadow-[0_2px_8px_rgba(0,0,0,.1)] bg-white'>
      <div className="bg-size-[100%] min-w-62.5 lg:min-w-133.25 w-62.5 lg:w-133.25 min-h-35.25 lg:min-h-75 h-35.25 lg:h-75 bg-center bg-no-repeat overflow-hidden " style={{backgroundImage:`url(${poster})`}}>
      <Link href="" className='w-full h-full flex justify-center items-center text-black '>
      <div className="w-16.75 h-16.75 flex justify-center items-center rounded-full bg-[rgba(0,0,0,.7)] ">
        <span className="w-1/2 h-1/2 left-px [transition:opacity_200ms_linear] filter-[invert(1)] relative top-0 inline-flex min-w-0 min-h-0 leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center" style={{backgroundImage:`url('/play.svg')`}}></span>
      </div>
      </Link>
      </div>
    </div>
  )
}

export default MediaBox
