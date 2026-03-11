import Link from 'next/link'
import React from 'react'

const BackdropBox = ({poster}) => {
  return (
    <div className='min-w-62.5 lg:min-w-133.25 w-62.5 lg:w-133.25 min-h-35.25 lg:min-h-75 h-35.25 lg:h-75 border-0 mt-0 rounded-lg flex flex-wrap lg:flex-nowrap max-w-[calc(100vw-40px)] lg:max-w-none items-start shadow-[0_2px_8px_rgba(0,0,0,.1)] bg-white'>
      <div className="bg-size-[100%] min-w-62.5 lg:min-w-133.25 w-62.5 lg:w-133.25 min-h-35.25 lg:min-h-75 h-35.25 lg:h-75 bg-center bg-no-repeat overflow-hidden " style={{backgroundImage:`url(${poster})`}}>
      <Link href="" className='w-full h-full flex justify-center items-center text-black '>
      
      </Link>
      </div>
    </div>
  )
}

export default BackdropBox
