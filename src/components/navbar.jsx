import { Bell, Menu, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full items-center fixed top-0 left-0 bg-[#0d253f] h-16 max-w-[100vw] z-50 transition'>
      <div className="max-w-350 w-full flex justify-center items-center mx-auto">
        <div className=" max-w-full md:max-w-350 w-full h-16 grid grid-cols-3 md:flex justify-between px-5 md:px-10 items-center">
            <div className="hidden justify-start flex-nowrap items-center overflow-visible md:flex">
                <Link href="/">
                    <Image
                      width={154}
                      height={20}
                      src="./tmdb-desktop-logo.svg"
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
            <div className="block md:hidden text-white">
                <Menu size={22.40}/>
            </div>

             <Link href="/">
                    <Image
                      width={55}
                      height={39.64}
                      src="./tmdb-mobile-logo.svg"
                      alt='logo'
                      className='block md:hidden justify-self-center'
                    />
                </Link>

                <div className="justify-end flex flex-nowrap items-center">
                  <ul className="justify-end flex flex-nowrap items-center">
                    <li className="ml-7.5 items-center hidden md:flex"><Link href="/" className=' h-full inline-flex items-center text-white font-semibold'><Plus strokeWidth={4} size={22.4}/></Link></li>
                    <li className="ml-7.5 py-1 items-center content-center hidden md:flex"><div className="flex justify-center items-center w-7 h-6.5 border border-white rounded-[3px] py-0.75 px-1.25 transition text-white font-semibold text-[14.4px] uppercase bg-transparent hover:bg-white hover:text-[#0d253f] cursor-pointer">en</div></li>
                    <li className="ml-7.5 relative top-0 left-0 flex items-center">
                      <Link href="/" className='h-full inline-flex items-center text-white font-semibold'><Bell size={22.4}/></Link>
                      <div className="hidden absolute -right-1.25 w-3.75 h-3.75 rounded-full z-0 justify-center items-center bg-[#c61439] -top-1 font-bold">
                        <div className="flex items-center justify-center text-[9.6px] font-semibold text-white">2</div>
                      </div>
                    </li>
                    <li className="ml-3.5 md:ml-7.5 items-center flex"><Link href="/" className='py-1 items-center content-center text-white font-semibold'><span className="min-w-8 w-8 min-h-8 h-8 text-center uppercase rounded-full text-white text-[14.4px] font-semibold flex items-center justify-center bg-[#0177d2]">T</span></Link></li>
                    <li className="ml-3.5 md:ml-7.5 items-center flex"><Link href="/" className='text-[20.8px] h-full inline-flex items-center text-white font-semibold'><Image width={29.12} height={29.12} alt='search' src="./search-blue.svg" className='relative top-0 left-0 inline-flex min-w-[29.12] w-[29.12] min-h-[29.12] h-[29.12] items-center justify-center'/></Link></li>
                  </ul>
                </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
