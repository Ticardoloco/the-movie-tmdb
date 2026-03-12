import Link from 'next/link'
import React from 'react'

const SeasonTitle = () => {
  return (
    <div className='p-[0_20px] lg:p-0 flex items-start text-black'>
      <h3 className="font-semibold text-[22.4px] mb-5 m-[0_0_4px] leading-none "><span>Current Season</span></h3>
      <div className="relative top-0 left-0 ml-2.5 group">
        <ul className="p-[0_10px] absolute -top-0.75 left-0 z-1 m-0 cursor-pointer">
            <li className="whitespace-nowrap p-[5px_0] ">Original Air date</li>
            <li className="whitespace-nowrap p-[5px_0]">
                <ul className="hidden p-[0_10px]  bg-white shadow-[0_5px_8px_rgba(0,0,0,0.3)] absolute -top-0.75 left-0 z-1 m-0 group-hover:block">
                    <li className="whitespace-nowrap p-[5px_0] ">Original Air date</li>
                    <li className="whitespace-nowrap p-[5px_0] ">
                        <Link href="" className='text-black font-normal hover:underline hover:opacity-60'>Production Order(Production)</Link>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default SeasonTitle
