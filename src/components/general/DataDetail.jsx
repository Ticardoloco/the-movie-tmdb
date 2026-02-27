import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const DataDetail = ({poster, title, year, certification, date, country, genres, runtime, rating, play, tagline, overview}) => {
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
  const size = "/w300_and_h450_multi_faces_filter(blur)";
  const size2= "/w300_and_h450_face";
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
              <span className="pl-2 relative top-0 left-0  before:content-[''] before:text-[17.6px] before:leading-none before:w-full before:h-full before:absolute  before:top-0 before:left-1.75 before:inline-flex before:items-center before:-z-1">•
                {genres.map((item, index)=>{
                  const isLast = index === genres.length - 1;
                  const isSecondToLast = index === genres.length - 2;
                   return (
                      <span key={item.id}>
                        <Link
                          href=""
                          className="text-white font-normal hover:underline hover:opacity-60 ml-2"
                        >
                          {item.name}
                        </Link>

                        {!isLast && (
                          <span>
                            {isSecondToLast ? " and" : ","}
                          </span>
                        )}
                      </span>
                    );
                })}
                
              </span>
              <span className="pl-2 relative top-0 left-0  before:content-[''] before:text-[17.6px] before:leading-none before:w-full before:h-full before:absolute  before:top-0 before:left-1.75 before:inline-flex before:items-center before:-z-1">• {runtime} </span>
            </div>
          </div>

          <div className="flex-col flex ">
            <div className="mb-0!">
              <div className="items-center flex ">
                <div className="justify-center items-center flex mr-4 ">
                  <div className="justify-center items-center flex mr-0!">
                    <div className="w-17 h-17 inline-block transition-transform duration-200 transform hover:scale-105 cursor-pointer">
                      <div className="inline-block w-17 h-17 rounded-full p-1 bg-[#081c22]">
                        <div className={`relative rounded-full flex items-center justify-center w-15 h-15 text-center ${Math.round(rating*10) > 70 ?"bg-green-500":"bg-yellow-500"}`}>
                          <div className="w-13 h-13 relative rounded-full flex bg-[#081c22] items-center justify-center ">
                            <span className="text-white [speak:none] not-italic [font-variant:normal] font-semibold leading-none [-webkit-font-smoothing:antialiased] after:content-['*'] ">{Math.round(rating*10)}</span>
                          </div>
                          <canvas className="bg-transparent absolute top-0 left-0 inline-block align-baseline w-15 h-15"></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="font-bold ml-1 ">User<br />Score</div>
                      {Math.round(rating*10) > 70?(
                    <ul className="ml-4 flex items-center justify-between ">
                        <li className="ml-0! bg-[rgba(0,0,0,.9)] flex items-center justify-center cursor-pointer rounded-[9999px] transition duration-150 w-9 h-9 mr-0! hover:scale-120 ">
                        <Image
                        width={28}
                        height={28}
                        src="/emoji1.svg"
                        alt='emoji'
                        className='w-7 h-7 '
                        />
                      </li>

                      <li className="-ml-3! bg-[rgba(0,0,0,.9)] flex items-center justify-center cursor-pointer rounded-[9999px] transition duration-150 w-9 h-9 mr-0! hover:scale-120 ">
                        <Image
                        width={28}
                        height={28}
                        src="/emoji2.svg"
                        alt='emoji'
                        className='w-7 h-7 '
                        />
                      </li>

                      <li className="-ml-3! bg-[rgba(0,0,0,.9)] flex items-center justify-center cursor-pointer rounded-[9999px] transition duration-150 w-9 h-9 mr-0! hover:scale-120 ">
                        <Image
                        width={28}
                        height={28}
                        src="/emoji3.svg"
                        alt='emoji'
                        className='w-7 h-7 '
                        />
                      </li>
                    </ul>
                      ):null}
                  </div>
                </div>
                <div className="p-[8px_8px_8px_12px] ease-in-out duration-150 bg-[#032541] rounded-full justify-center items-center cursor-pointer transform transition flex hover:scale-104">
                  <div className="justify-center items-center flex ">
                    <div className="text-white font-bold items-center cursor-pointer transform-[translate(0,0)_rotate(0)_skewX(0)_skewY(0)_scaleX(1)_scaleY(1)] flex ">
                      <div className="whitespace-nowrap items-center flex-nowrap flex ">What&apos;s your <span className="flex underline pl-1 underline-offset-2 decoration-2 decoration-[#01b4e4]">Vibe</span>? <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-[inherit] bg-center bg-no-repeat color-inherit items-center justify-center ml-1 group" style={{backgroundImage:`url('/idot.svg')`}}></span></div>

                      <div className="hidden absolute left-full ml-4 w-72 text-white font-normal cursor-pointer opacity-0 group-hover:block group-hover:opacity-100 ease-in-out duration-200">
                        <p className="text-sm m-[0_0_16px] p-0 text-white">Welcome to vibes, TMDB&apos;s new rating system! for more information, visit the <span className="underline-offset-2 underline italic "><Link href="https://www.themoviedb.org/bible/general#65dd0c6c7314a13a50071ddb">contribution bible</Link></span>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mb-5 w-full h-17 flex items-center justify-start m-0 p-0">
              <li className="py-0.75 mr-5 ">
                <Link href="" className='bg-[rgba(3,37,65,1)] rounded-full h-11.5 w-11.5 inline-flex justify-center items-center font-normal duration-200 ease-in-out hover:scale-110'>
                <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center" style={{backgroundImage:`url("/thumbnails.svg")`}}></span>
                </Link>
              </li>

              <li className="py-0.75 mr-5 ">
                <Link href="" className='bg-[rgba(3,37,65,1)] rounded-full h-11.5 w-11.5 inline-flex justify-center items-center font-normal duration-200 ease-in-out hover:scale-110'>
                <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center" style={{backgroundImage:`url("/heart.svg")`}}></span>
                </Link>
              </li>

              <li className="py-0.75 mr-5 ">
                <Link href="" className='bg-[rgba(3,37,65,1)] rounded-full h-11.5 w-11.5 inline-flex justify-center items-center font-normal duration-200 ease-in-out hover:scale-110'>
                <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center" style={{backgroundImage:`url("/bookmark.svg")`}}></span>
                </Link>
              </li>

              <div className="hidden items-center ">
                 <li className="py-0.75 mr-0 justify-center items-center flex-col flex ">
                <Link href="" className='bg-[rgba(3,37,65,1)] rounded-full h-11.5 w-11.5 inline-flex justify-center items-center font-normal duration-200 ease-in-out hover:scale-110'>
                <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center" style={{backgroundImage:`url("/star.svg")`}}></span>
                </Link>
              </li>
                  <div className="hidden absolute left-full ml-4 w-72 text-white font-normal cursor-pointer opacity-0 group-hover:block group-hover:opacity-100 ease-in-out duration-200">
                        <p className="text-sm m-[0_0_16px] p-0 text-white">Welcome to vibes, TMDB&apos;s new rating system! for more information, visit the <span className="underline-offset-2 underline italic "><Link href="https://www.themoviedb.org/bible/general#65dd0c6c7314a13a50071ddb">contribution bible</Link></span>.</p>
                    </div>
              </div>
                
                <li className="mr-0 items-center flex ml-1 ">
                  <Link href={`${play}`} className='border-0 bg-[0_0] w-auto h-auto will-change-[opacity] font-semibold [transition:linear_.1s] rounded-full inline-flex justify-center items-center text-white hover:opacity-70'><span className="mr-1.25 text-[22.4px] relative top-0 left-0 inline-flex min-w-[22.4px] w-[22.4px] min-h-[22.4px] h-[22.4px] leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center filter-[invert(1)]" style={{backgroundImage:`url("/play.svg")`}}></span> Play Trailer</Link>
                </li>
              
            </ul>
          </div>

          <div className="w-full">
            <h3 className="mb-5 text-[19.2px] font-normal italic opacity-70 w-full m-[0_0_8px] p-0 leading-none ">{tagline}</h3>
            <h3 className="mt-2.5 w-full m-[0_0_8px] font-semibold text-[20.8px] leading-none p-0">Overview</h3>

            <div>
              <p className="mb-0 text-base leading-6 font-normal m-[0_0_16px] p-0">{overview}</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default DataDetail
