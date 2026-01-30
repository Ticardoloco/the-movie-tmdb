import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-full w-screen p-0 bg-[radial-gradient(at_30%_top,#031d33_0%,rgba(3,37,65,1)_70%)] bg-position-[center_top] bg-cover bg-no-repeat flex-wrap items-center content-between flex justify-start lg:justify-center '>
      <nav className="text-[14.4px] flex justify-start lg:gap-0 gap-8 flex-col lg:flex-row lg:justify-between ml-5 lg:ml-0 pt-20 pb-10 lg:pb-20 text-white">
        <div className="text-right relative -top-9 right-0 mr-10 min-w-0 ">
            <Image
            width={130}
            height={94}
            src="/tmdb-mobile-logo.svg"
            alt='logo'
            className='hidden lg:block absolute top-0 right-0 outline-0 border-0 max-w-[inherit] h-auto align-middle '
            />
            <Link className=' lg:relative md:top-35 border-white bg-white text-[rgba(1,180,228,1)] text-[18.72px] inline-block uppercase whitespace-normal font-bold border-2 rounded-[5px] py-2 px-4 transition-all duration-100 ease-linear' href='/'>Join The Community</Link>
        </div>

        <div className="mr-10 min-w-0 ">
            <h3 className="text-[20.16px] leading-[28.224px] text-white whitespace-nowrap font-bold uppercase m-0 ">the Basics</h3>
            <ul>
                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">About TMDB</Link>
                </li>

                
                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Contact Us</Link>
                </li>

                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Api Documentation</Link>
                </li>

                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Api for Business</Link>
                </li>

                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">System Status</Link>
                </li>


            </ul>
        </div>


        <div className="mr-10 min-w-0 ">
            <h3 className="text-[20.16px] leading-[28.224px] text-white whitespace-nowrap font-bold uppercase m-0 ">Get Involved</h3>
            <ul>
                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Contribution Bible</Link>
                </li>

                
                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Add New Movie</Link>
                </li>

                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Add New TV Show</Link>
                </li>

            </ul>
        </div>

        <div className="mr-10 min-w-0 ">
            <h3 className="text-[20.16px] leading-[28.224px] text-white whitespace-nowrap font-bold uppercase m-0 ">Community</h3>
            <ul>
                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Guildlines</Link>
                </li>

                
                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Discussions</Link>
                </li>

                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Leaderboard</Link>
                </li>

                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Support Forums</Link>
                </li>

            </ul>
        </div>

        <div className="mr-10 min-w-0 ">
            <h3 className="text-[20.16px] leading-[28.224px] text-white whitespace-nowrap font-bold uppercase m-0 ">Legal</h3>
            <ul>
                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Terms of Use</Link>
                </li>

                
                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Api Terms of Use</Link>
                </li>

                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">Privacy Policy</Link>
                </li>

                <li className="text-2xl leading-none max-w-65 whitespace-nowrap overflow-hidden text-ellipsis text-white">
                    <Link className='text-[17.28px] text-white font-normal' href="/">DMCA Policy</Link>
                </li>

            </ul>
        </div>
      </nav>
      <section className="w-full text-white opacity-[.1] text-[11.2px] flex justify-center py-3">Designed by Egbeleke Taiwo 2026</section>
    </div>
  )
}

export default Footer
