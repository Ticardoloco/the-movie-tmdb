'use client'
import { X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const SearchBar = () => {
    const [search, setSearch] = useState('');
  return (
    <div className='w-full absolute top-16 left-0 border-t border-b border-[#e3e3e3]'>
        <div className="w-full bg-white h-11 flex items-center justify-center ">
            <div className="max-w-full lg:max-w-350 w-full flex justify-between px-5 lg:px-10">
                <form className="w-full block">
                    <label>
                        <span className="text-[#212529] bg-white  transition-shadow duration-200 ease-in-out text-base leading-normal m-0 p-0 w-full min-w-0 font-normal text-start items-stretch relative overflow-hidden truncate outline-none inline-flex flex-row flex-nowrap align-middle rounded-md">
                            <span className="flex items-center w-full! border-0! transition-all! bg-transparent!">
                                <Image
                                    width={20}
                                    height={20}
                                    src='./search.svg'
                                    alt='search'
                                />
                                <input
                                    name='query'
                                    type='text'
                                    placeholder='Search for a movie, tv show, person...'
                                    value={search}
                                    onChange={(e)=>setSearch(e.target.value)}
                                    className='w-full h-11 border-0! italic text-[100%] text-[#acacac] indent-0 pr-0 py-1.5 px-3 flex-1 relative z-1 truncate outline-none'
                                />
                                <span className="w-auto py-1.5 px-1.5 box-content outline-0 flex-none self-center items-center cursor-pointer opacity-[.5] m-0 border border-[#efefef] hidden!">
                                    <span className="box-border w-4 h-4 outline-0 leading-none justify-center inline-flex flex-row flex-nowrap items-center align-middle relative border border-[#efefef]">
                                        <X size={28} strokeWidth={3} className='fill-[#212529] flex-1 overflow-hidden block align-middle '/>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </label>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default SearchBar
