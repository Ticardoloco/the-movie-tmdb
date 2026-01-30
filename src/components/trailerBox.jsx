import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TrailerBox = ({id, title, description, image, onHover}) => {
    const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
  return (
    <div className='flex flex-wrap w-75 min-w-75 max-w-75 h-auto border-0 shadow-none rounded-lg items-start'>
      <div className="min-w-75 w-75 h-[calc(300px/1.78)] transition-all duration-200 ease-in-out transform scale-100 hover:scale-105 overflow-hidden">
      <div className="block rounded-lg overflow-hidden relative top-0 left-0 min-w-full w-full h-full bg-center bg-no-repeat bg-[#dbdbdb] bg-size-[50%] min-h-4 leading-none text-inherit items-center" style={{
            backgroundImage: `url('/img-card-bg.svg')`
          }}>
                <Link className='w-full h-full block items-center text-black font-normal' onMouseEnter={onHover} href="/">
                    <Image
                    width={300}
                    height={168.53}
                    src={`${TMDB_IMAGE_BASE}/w355_and_h200_multi_faces${image}`}
                    alt='trailer img'
                    className='w-full h-full block outline-none border-0 max-w-[inherit] align-middle'
                    />
                    <div className="w-75 h-[calc(300px/1.78)] absolute top-0 left-0 flex justify-center items-center text-[64px] ">
                        <Image
                        width={64}
                        height={64}
                        src="./play.svg"
                        alt='play'
                        className='transition-all duration-200 transform scale-100 hover:scale-105 ease-in-out invert relative top-0 left-0 inline-flex  leading-[inherit] text-inherit items-center justify-center [--tw-invert:invert(100%)]'
                        />
                    </div>
                </Link>
          </div>
          <div className="absolute top-2 right-2 z-4 opacity-[0.6]">
            <Link className='text-black font-normal ' href="/">
                <div className="text-[25.6px] relative top-0 left-0 inline-flex  leading-[inherit] text-inherit items-center justify-center">
                    <Image
                    width={26}
                    height={26}
                    src="./dotted.svg"
                    alt='dotted'
                    />
                </div>
            </Link>
          </div>
      </div>
      <div className="whitespace-normal flex content-start justify-center flex-wrap p-0 mt-2.5 w-full items-start">
        <h2 className="text-[19.2px] w-full text-center mb-0 m-0 font-semibold p-0 leading-none">
            <Link className='text-white font-semibold hover:underline decoration-white ' href="/">{title}</Link>
        </h2>
        <h3 className="text-base font-normal text-center mb-0 m-0 p-0 leading-none">{description}</h3>
      </div>
    </div>
  )
}

export default TrailerBox
