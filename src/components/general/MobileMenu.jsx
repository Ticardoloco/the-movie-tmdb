import Link from 'next/link'
import React from 'react'

const MobileMenu = ({toggleBar, setToggleBar}) => {
  return (
    <div className={`lg:hidden  inline-block fixed top-16 w-[80%]  h-full bg-[rgba(3,37,65,.9)] [backdrop-filter:blur(20px)] z-9999 [transition:ease_.3s] p-5 ${toggleBar ? "left-0":"-left-[80%]"}`}>
      <ul className="m-0 p-0 ">
        <li onClick={()=> setToggleBar(false)} className="pb-2.5 "><Link href="/movie" className='text-white font-semibold text-[20.8px] '>Movies</Link></li>

        <li onClick={()=> setToggleBar(false)} className="pb-2.5 "><Link href="/tv" className='text-white font-semibold text-[20.8px] '>TV Shows</Link></li>

        <li onClick={()=> setToggleBar(false)} className="pb-2.5 "><Link href="/person" className='text-white font-semibold text-[20.8px] '>People</Link></li>
      </ul>

      <ul className="mt-5 m-0 p-0">
        <li onClick={()=> setToggleBar(false)} className="pb-2.5">
            <Link href="" className='text-[rgba(255,255,255,.6)] text-base font-semibold '>Contribution Bible</Link>
        </li>

        <li onClick={()=> setToggleBar(false)} className="pb-2.5">
            <Link href="" className='text-[rgba(255,255,255,.6)] text-base font-semibold '>Discussions</Link>
        </li>

        <li onClick={()=> setToggleBar(false)} className="pb-2.5">
            <Link href="" className='text-[rgba(255,255,255,.6)] text-base font-semibold '>Leaderboard</Link>
        </li>

        <li onClick={()=> setToggleBar(false)} className="pb-2.5">
            <Link href="" className='text-[rgba(255,255,255,.6)] text-base font-semibold '>Api</Link>
        </li>

        <li onClick={()=> setToggleBar(false)} className="pb-2.5">
            <Link href="" className='text-[rgba(255,255,255,.6)] text-base font-semibold '>Support</Link>
        </li>

        <li onClick={()=> setToggleBar(false)} className="pb-2.5">
            <Link href="" className='text-[rgba(255,255,255,.6)] text-base font-semibold '>About</Link>
        </li>
      </ul>
      <ul className="mt-5 m-0 p-0 ">
        <li onClick={()=> setToggleBar(false)} className="pb-0 "><Link href="" className='text-[rgba(255,255,255,.6)] text-base font-semibold'>Logout</Link></li>
      </ul>
    </div>
  )
}

export default MobileMenu
