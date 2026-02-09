"use client"
import config from '@/config'
import api from '@/services/httpService'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const FilterBox = ({text1}) => {
    const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/original";
    const [sortDropDown, setSortDropDown] = useState(false);
    const [toWatchDropDown, setToWatchDropDown] = useState(false);
    const [select, setSelect] = useState(false);
    const [filterDropDown, setFilterDropDown] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Popularity Decending");
    const [watchProviderDatas, setWatchProviderDatas] = useState([]);
    const getWatchProviderData = async ()=>{
        const watchProviderData = await api.get(config.subUrl.provider.watch_provider);
        if (watchProviderData.status === 200) {
            setWatchProviderDatas(watchProviderData.data.results.slice(3,36));
        }
    }

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getWatchProviderData()
    })
  return (
    <div>
      <div className="min-w-65 w-65 border border-[#e3e3e3] rounded-lg flex flex-wrap justify-between overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white">
        <div className="w-full flex justify-between flex-nowrap items-center py-3.5 px-4">
            <h2 className="inline-flex text-[17.6px] justify-between pr-2.5 w-full p-0 m-0 font-semibold ">Sort</h2>
            <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leadind-[inherit] items-center justify-center cursor-pointer ">
                <Image
                width={16}
                height={16}
                src="/dropdown.svg"
                alt='dropdown'
                className={`transform rotate-0 ${sortDropDown ? "rotate-90":" rotate-0"}`}
                onClick={()=> setSortDropDown(!sortDropDown)}
                />
            </span>
        </div>
        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${sortDropDown ? "block":"hidden"}`}>
            <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">Sort results by</h3>
            <span className="text-[14.4px] w-full text-[#212529] bg-white border-[rgba(33,37,41,0.2)] leading-normal cursor-pointer m-0 p-0 min-w-0 border font-normal text-start shadow-none items-stretch relative overflow-hidden truncate appearance-none outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md ">
                <span className="py-1.5 px-3 whitespace-nowrap flex flex-row flex-nowrap items-center w-full border-0 outline-0 text-inherit font-[inherit] grow shrink basis-[0%] relative z-1 overflow-hidden truncate appearance-none m-0 cursor-pointer ">
                    <span className="grow shrink basis-[0%] overflow-hidden truncate whitespace-nowrap text-inherit font-[inherit] text-sm cursor-pointer text-start ">{selectedSort}</span>
                </span>
                <button className="py-1.5 px-1.5 text-inherit bg-[0_0] border-transparent p-1.5 w-auto border-0 [border-inline-start-width:1px] flex-none aspect-auto shadow-none m-0 text-base gap-0 leading-normal border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center align-middle select-none  cursor-pointer outline-0 appearance-none relative transition-colors duration-200 ease-in-out overflow-visible">
                    <span onClick={()=>setSelect(!select)} className="min-h-4 inline-flex items-center justify-center min-w-auto! text-inherit self-center relative w-4 h-4 outline-0 leading-none flex-row flex-nowrap align-middle ">
                        <svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M256 352 128 160h256z"></path></svg>
                    </span>
                </button>
                <select value={selectedSort} onChange={(e)=>{setSelectedSort(e.target.value); setSelect(false);}} name='sort_by' className={`text-[13px] w-full m-0 text-inherit leading-[inherit] ${select ? "block":"hidden"}`}>
                    <option value="Popular Descending">Popular Descending</option>
                    <option value="Popular Ascending">Popular Ascending</option>
                    <option value="Rating Descending">Rating Descending</option>
                    <option value="Rating Ascending">Rating Ascending</option>
                    <option value="Released Date Descending">Released Date Descending</option>
                    <option value="Released Date Ascending">Released Date Ascending</option>
                    <option value="Title (A-Z)">Title (A-Z)</option>
                    <option value="Title (Z-A)">Title (Z-A)</option>
                </select>
            </span>
        </div>
      </div>

      <div className="mt-3 in-w-65 w-65 border border-[#e3e3e3] rounded-lg flex flex-wrap justify-between overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white">
        <div className="w-full flex justify-between flex-nowrap items-center py-3.5 px-4">
            <h2 className="inline-flex text-[17.6px] justify-between pr-2.5 w-full p-0 m-0 font-semibold ">Where To Watch <span className="bg-[rgba(0,0,0,0.08)] rounded-lg inline-flex items-center px-2.5 text-[14.8px] font-light">{text1}</span></h2>
            <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leadind-[inherit] items-center justify-center cursor-pointer ">
                <Image
                width={16}
                height={16}
                src="/dropdown.svg"
                alt='dropdown'
                className={`transform rotate-0 ${toWatchDropDown ? "rotate-90":" rotate-0"}`}
                onClick={()=> setToWatchDropDown(!toWatchDropDown)}
                />
            </span>
        </div>
        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${toWatchDropDown?"block":"hidden"}`}>
            <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">My Service <Link className="inline-flex items-center text-black font-semibold text-base" href="/">
             <span className="ml-1.5 opacity-[0.4] font-normal relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leadind-[inherit] items-center justify-center cursor-pointer ">
                <Image
                width={16}
                height={16}
                src="/glyphicon.svg"
                alt='glyphicon'
                />
            </span>
            </Link></h3>
            <label className="inline-flex items-center w-full mb-[unset]">
                <input type="checkbox" className="p-0 w-4 h-4 border-[rgba(33,37,41,0.2)] bg-white m-0 leading-[initial] border outline-0 bg-center bg-no-repeat bg-contain inline-block flex-none align-middle relative cursor-pointer appearance-none before:content-[''] before:block before:w-full before:h-full before:mask-no-repeat"  />
                <label className='inline ml-2 items-center m-0 p-0 cursor-pointer align-middle relative leading-none'>Restrict searches to my subscribed services?</label>
            </label>
        </div>

        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${toWatchDropDown?"block":"hidden"}`}>
            <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">Country</h3>
            <span className="text-[14.4px] w-full text-[#212529] bg-white border-[rgba(33,37,41,0.2)] leading-normal cursor-pointer m-0 p-0 min-w-0 border font-normal text-start shadow-none items-stretch relative overflow-hidden truncate appearance-none outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md">
                <span className="py-1.5 px-3 whitespace-nowrap flex flex-row flex-nowrap items-center w-full border-0 outline-0 text-inherit font-[inherit] grow shrink basis-[0%] relative z-1 overflow-hidden truncate appearance-none m-0 cursor-pointer">
                    <span className="grow shrink basis-[0%] overflow-hidden truncate whitespace-nowrap text-inherit font-[inherit] text-sm cursor-pointer text-start before:content-[''] before:w-0 before:overflow-hidden before:inline-block before:align-top">
                        <span className="inline-block align-middle w-6 h-6 mr-1.25 ">
                            <Image
                            width={24}
                            height={24}
                            src={`/country.png`}
                            alt='country'
                            />
                        </span>
                        <span>Nigeria</span>
                    </span>
                </span>
                <button className="py-1.5 px-1.5 text-inherit bg-[0_0] border-transparent p-1.5 w-auto border-0 [border-inline-start-width:1px] flex-none aspect-auto shadow-none m-0 text-base gap-0 leading-normal border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center align-middle select-none  cursor-pointer outline-0 appearance-none relative transition-colors duration-200 ease-in-out overflow-visible">
                    <span className="min-h-4 inline-flex items-center justify-center min-w-auto! text-inherit self-center relative w-4 h-4 outline-0 leading-none flex-row flex-nowrap align-middle">
                        <svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M256 352 128 160h256z"></path></svg>
                    </span>
                </button>
                <div className="w-full hidden text-[13px] m-0 text-[#212529] leading-normal cursor-pointer font-normal text-start "></div>
            </span>
            <span className="flex ">
                <ul className="mb-0 gap-y-1.5 my-3.5 flex flex-wrap justify-between gap-x-1.5 ">
                    {watchProviderDatas.map((item)=>(
                        <li key={item.provider_id} className="inline-flex w-12.5 ">
                            <Link className='text-black block leading-0 w-12.5 h-12.5 ' href="/">
                                <Image
                                width={50}
                                height={50}
                                src={`${TMDB_IMAGE_BASE}${item.logo_path}`}
                                alt='logo'
                                className='relative  top-0 left-0 rounded-lg w-12.5 h-12.5 outline-0'
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </span>
        </div>
      </div>

      <div className="mt-3 in-w-65 w-65 border border-[#e3e3e3] rounded-lg flex flex-wrap justify-between overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white">
        <div className="w-full flex justify-between flex-nowrap items-center py-3.5 px-4">
            <h2 className="inline-flex text-[17.6px] justify-between pr-2.5 w-full p-0 m-0 font-semibold">Filters</h2>
            <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leadind-[inherit] items-center justify-center cursor-pointer ">
                <Image
                width={16}
                height={16}
                src="/dropdown.svg"
                alt='dropdown'
                className={`transform rotate-0 ${filterDropDown ? "rotate-90":" rotate-0"}`}
                onClick={()=> setFilterDropDown(!filterDropDown)}
                />
            </span>
        </div>
        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown?"block":"hidden"}`}>
            <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">Show Me</h3>
            <label className="inline-flex items-center w-full mb-[unset]">
            <input type="radio" value="everything" className="border-[#01b3e4] text-white bg-[#01b3e4] w-4 h-4 rounded-[50%] border border-solid outline-0 flex items-center justify-center align-middle relative cursor-pointer appearance-none before:content-[''] before:block before:w-[50%] before:h-[50%] before:bg-white before:rounded-full" />
            <label className="inline ml-2 items-start m-0 p-0 cursor-pointer align-middle relative leading-none">Everything</label>
            </label>

            <label className="inline-flex items-center w-full mb-[unset]">
                <input type="radio" value='unwatched' className="border-[rgba(33,37,41,0.2)] text-white bg-white w-4 h-4 rounded-[50%] border border-solid outline-0 flex items-center justify-center align-middle relative cursor-pointer appearance-none" />
                <label className="inline ml-2 items-start m-0 p-0 cursor-pointer align-middle relative leading-none">Movie I Haven&apos;t seen</label>
            </label>

            <label className="inline-flex items-center w-full mb-[unset]">
                <input type="radio" value='watched' className="border-[rgba(33,37,41,0.2)] text-white bg-white w-4 h-4 rounded-[50%] border border-solid outline-0 flex items-center justify-center align-middle relative cursor-pointer appearance-none" />
                <label className="inline ml-2 items-start m-0 p-0 cursor-pointer align-middle relative leading-none">Movie I Have seen</label>
            </label>
        </div>
      </div>
    </div>
  )
}

export default FilterBox
