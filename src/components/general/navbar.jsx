import { Bell, Menu, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = ({toggleBar, setToggleBar}) => {
  return (
    <div className='w-full items-center fixed top-0 left-0 bg-[#0d253f] h-16 max-w-[100vw] z-50 transition'>
      <div className="max-w-350 w-full flex justify-center items-center mx-auto">
        <div className=" max-w-full lg:max-w-350 w-full h-16 grid grid-cols-3 lg:flex justify-between px-5 lg:px-10 items-center">
            <div className="hidden justify-start flex-nowrap items-center overflow-visible lg:flex">
                <Link href="/">
                    <Image
                      width={154}
                      height={20}
                      src="/tmdb-desktop-logo.svg"
                      alt='logo'
                      className='mr-4'
                    />
                </Link>

                <ul className="flex flex-nowrap items-stretch text-base font-semibold flex-row p-0 py-2 text-white leading-normal  ">
                  <li className='text-black font-normal z-auto mr-3.75 flex flex-col flex-nowrap flex-none relative'><Link href="/movie" className='px-4 py-2 gap-2 items-center relative text-white whitespace-nowrap font-semibold '>Movies</Link></li>
                  <li className='text-black font-normal z-auto mr-3.75 flex flex-col flex-nowrap flex-none relative'><Link href="/tv" className='px-4 py-2 gap-2 items-center relative text-white whitespace-nowrap font-semibold '>TV Shows</Link></li>
                  <li className='text-black font-normal z-auto mr-3.75 flex flex-col flex-nowrap flex-none relative'><Link href="/person" className='px-4 py-2 gap-2 items-center relative text-white whitespace-nowrap font-semibold '>People</Link></li>
                  <li className='text-black font-normal z-auto mr-3.75 flex flex-col flex-nowrap flex-none relative'><Link href="/more" className='px-4 py-2 gap-2 items-center relative text-white whitespace-nowrap font-semibold '>More</Link></li>
                </ul>
            </div>
            <div onClick={()=> setToggleBar(!toggleBar)} className="block lg:hidden text-white">
                <Menu size={22.40}/>
            </div>

             <Link onClick={()=> setToggleBar(false)} href="/">
                    <Image
                      width={55}
                      height={39.64}
                      src="/tmdb-mobile-logo.svg"
                      alt='logo'
                      className='block lg:hidden justify-self-center'
                    />
                </Link>

                <div className="justify-end flex flex-nowrap items-center">
                  <ul className="justify-end flex flex-nowrap items-center">
                    <li className="ml-7.5 items-center hidden lg:flex"><Link href="/" className=' h-full inline-flex items-center text-white font-semibold'><Plus strokeWidth={4} size={22.4}/></Link></li>
                    <li className="ml-7.5 py-1 items-center content-center hidden lg:flex"><div className="flex justify-center items-center w-7 h-6.5 border border-white rounded-[3px] py-0.75 px-1.25 transition text-white font-semibold text-[14.4px] uppercase bg-transparent hover:bg-white hover:text-[#0d253f] cursor-pointer">en</div></li>
                    <li className="ml-7.5 hidden lg:flex items-center">
                      <Link href="/login" className='flex items-center text-white font-semibold'>Login</Link>
                    </li>
                    <li className="ml-3.5 lg:ml-7.5 items-center hidden lg:flex"><Link href="/signup" className='flex items-center text-white font-semibold'>Join TMDB</Link></li>

                    <li className="lg:hidden flex items-center ">
                      <Link href="/login" className='flex items-center text-white font-semibold'>
                      <span className="[filter:invert(1)] text-[22.4px] relative top-0 left-0 inline-flex min-w-[22.4px] w-[22.4px] min-h-[22.4px] h-[22.4px] leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center" style={{backgroundImage: `url('/user.svg')`}}></span>
                      </Link>
                    </li>

                    <li className="ml-3.5 lg:ml-7.5 items-center flex"><Link href="/" className='text-[20.8px] h-full inline-flex items-center text-white font-semibold'><Image width={29.12} height={29.12} alt='search' src="/search-blue.svg" className='relative top-0 left-0 inline-flex min-w-[29.12] w-[29.12] min-h-[29.12] h-[29.12] items-center justify-center'/></Link></li>
                  </ul>
                </div>

                {/* <div>
                  <div className="min-w-22.5 min-h-12.5 max-w-full w-full top-0 left-0 border-[rgba(33,37,41,0.2)] text-[#212529] bg-white shadow-none rounded-md p-0 border border-solid outline-0 text-base leading-normal z-[11500] ">
                    <div className="top-[43.1719px] z-[10002] left-100.75 mt-1.5 absolute overflow-visible! ">
                      <div className="w-45.25 h-21.25 [transform:translateZ(0px)] opacity-1 ">
                        <div className="w-45 bg-white text-black border border-solid border-[rgba(33,37,41,.15)] p-0 shadow-[0px_2px_7px_rgba(0,0,0,0.075)] rounded-md m-0 py-1 px-2 text-sm leading-normal flex flex-row flex-nowrap items-start absolute z-[12000] ">
                          <div className="self-strecth flex-[1_1_auto] overflow-hidden truncate ">
                            <div>
                              <div className="border-0"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
        </div>
      </div>
    </div>
  )
}

export default NavBar
