import Link from 'next/link'
import React from 'react'

const ShortcutBar = () => {
  return (
    <div className='w-full justify-center bg-white flex items-center absolute z-2 top-16 left-0 '>
      <div className="w-auto! h-11.5! m-0 p-0 border-0 relative flex items-center">
        <span className="hidden text-[color-mix(in_srgb,#212529,#212529_50%,transparent)] p-1.5 border-transparent shadow-none! py-1.5 px-3 text-base leading-normal border border-solid font-normal text-center whitespace-nowrap items-center align-middle select-none cursor-pointer outline-0 appearance-none relative transition-colors ease-in-out">
          <span className="min-w-4 min-h-4 inline-flex items-center justify-center text-inherit self-center relative outline-0 w-4 h-4 leading-none flex-row flex-nowrap align-middle ">
           <svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="m160 256 192-128v256z"></path></svg>
          </span>
        </span>

        <ul className="overflow-visible h-11.5! bg-white font-semibold flex-nowrap p-0 py-2 visible w-[unset!important] border-[rgba(33,37,41,0.2)] text-[#212529] flex-row border-0 border-solid outline-0 text-base leading-normal flex items-center relative cursor-default [-webkit-tap-highlight-color:transparent] ">
          <li className="text-black font-normal border-0 outline-0 flex flex-col flex-nowrap flex-none relative select-none  group ">
            <span className="py-2 px-4 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex flex-row flex-nowrap flex-[1_1_auto] ">
              <span className="overflow-hidden truncate flex flex-row flex-nowrap flex-[1_1_auto] hover:text-[#999] ">OverView</span>
              <span className="-me-2 inline-flex flex-row flex-wrap items-center flex-none relative ">
                <span className="w-4 h-4 outline-0 leading-none justify-center inline-flex flex-row flex-nowrap items-center align-middle relative ">
                  <svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M256 352 128 160h256z"></path></svg>
                </span>
              </span>
            </span>
            <div className=" mt-9 max-h-[unset_!important] border-[rgba(33,37,41,0.2)] border absolute z-2 left-0 border-solid overflow-auto text-[#212529] bg-white shadow-[0px_6px_13px_rgba(0,0,0,0.125)] rounded-md m-0 p-0 text-base leadind-normal items-stretch invisible group-hover:opacity-100 group-hover:visible  ease-in-out">
              <ul className="bg-[0_0] p-0 relative text-[#212529] border-[rgba(33,37,41,0.2)] text-base leading-normal m-0 flex flex-col flex-nowrap ">
                <li className="mt-1.5 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Main</Link>
                </li>
  
                <li className="mt-0 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Alternative Titles</Link>
                </li>

                <li className="mt-0 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Awards</Link>
                </li>

                <li className="mt-0 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Cast & Crew</Link>
                </li>

                <li className="mt-0 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Released Date</Link>
                </li>

                <li className="mt-0 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Translations</Link>
                </li>

                <li className="mt-3.5 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Changes</Link>
                </li>

                <li className="mt-0 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Report</Link>
                </li>

                <li className="mt-0 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Edits</Link>
                </li>


              </ul>
            </div>
          </li>

          <li className=" ml-5 text-black font-normal border-0 outline-0 flex flex-col flex-nowrap flex-none relative select-none  group ">
            <span className="py-2 px-4 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex flex-row flex-nowrap flex-[1_1_auto] ">
              <span className="overflow-hidden truncate flex flex-row flex-nowrap flex-[1_1_auto] hover:text-[#999] ">Media</span>
              <span className="-me-2 inline-flex flex-row flex-wrap items-center flex-none relative ">
                <span className="w-4 h-4 outline-0 leading-none justify-center inline-flex flex-row flex-nowrap items-center align-middle relative ">
                  <svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M256 352 128 160h256z"></path></svg>
                </span>
              </span>
            </span>
            <div className="mt-9 max-h-[unset_!important] border-[rgba(33,37,41,0.2)] border absolute z-2 left-0 border-solid overflow-auto text-[#212529] bg-white shadow-[0px_6px_13px_rgba(0,0,0,0.125)] rounded-md m-0 p-0 text-base leadind-normal items-stretch invisible group-hover:opacity-100 group-hover:visible  ease-in-out">
              <ul className="bg-[0_0] p-0 relative text-[#212529] border-[rgba(33,37,41,0.2)] text-base leading-normal m-0 flex flex-col flex-nowrap ">
                <li className="mt-1.5 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Backdrops  <span className="pr-1 ms-4 -me-10 inline-flex flex-row flex-wrap items-center flex-none relative ">38</span></Link>
                 
                </li>
  
                <li className="mt-0 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Logos <span className="pr-1 ms-4 -me-10 inline-flex flex-row flex-wrap items-center flex-none relative ">27</span></Link>
                  
                </li>
  
                <li className="mt-0 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Posters <span className="pr-1 ms-4 -me-10 inline-flex flex-row flex-wrap items-center flex-none relative ">125</span></Link>
                  
                </li>
  
                <li className="mb-1.5 mt-0 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                 <span className="text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1]">
                  <span className="overflow-hidden truncate flex flex-row flex-nowrap flex-[1_1_auto] ">Videos</span>
                  <span className="pr-1 ms-4 -me-10 inline-flex flex-row flex-wrap items-center flex-none relative">
                    <span className="w-4 h4 outline-0 leading-none justify-center inline-flex flex-row flex-nowrap items-center align-middle relative "><svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M352 256 160 384V128z"></path></svg></span>
                  </span>
                 </span>
                  
                </li>
  
               


              </ul>
            </div>
          </li>

          <li className=" ml-5 text-black font-normal border-0 outline-0 flex flex-col flex-nowrap flex-none relative select-none  group ">
            <span className="py-2 px-4 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex flex-row flex-nowrap flex-[1_1_auto] ">
              <span className="overflow-hidden truncate flex flex-row flex-nowrap flex-[1_1_auto] hover:text-[#999] ">Fandom</span>
              <span className="-me-2 inline-flex flex-row flex-wrap items-center flex-none relative ">
                <span className="w-4 h-4 outline-0 leading-none justify-center inline-flex flex-row flex-nowrap items-center align-middle relative ">
                  <svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M256 352 128 160h256z"></path></svg>
                </span>
              </span>
            </span>
            <div className="mt-9 max-h-[unset_!important] border-[rgba(33,37,41,0.2)] border absolute z-2 left-0 border-solid overflow-auto text-[#212529] bg-white shadow-[0px_6px_13px_rgba(0,0,0,0.125)] rounded-md m-0 p-0 text-base leadind-normal items-stretch invisible group-hover:opacity-100 group-hover:visible  ease-in-out">
              <ul className="bg-[0_0] p-0 relative text-[#212529] border-[rgba(33,37,41,0.2)] text-base leading-normal m-0 flex flex-col flex-nowrap ">
                <li className="mt-1.5 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                 <span className="text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1]">
                  <span className="overflow-hidden truncate flex flex-row flex-nowrap flex-[1_1_auto] hover:text-[#999] ">Discussions</span>
                  <span className="pr-1 ms-4 -me-10 inline-flex flex-row flex-wrap items-center flex-none relative">
                    <span className="w-4 h4 outline-0 leading-none justify-center inline-flex flex-row flex-nowrap items-center align-middle relative "><svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M352 256 160 384V128z"></path></svg></span>
                  </span>
                 </span>
                 
                </li>
  
                <li className="mt-0 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Reviews</Link>
                  
                </li>
              </ul>
            </div>
          </li>

          <li className=" ml-5 text-black font-normal border-0 outline-0 flex flex-col flex-nowrap flex-none relative select-none  group ">
            <span className="py-2 px-4 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex flex-row flex-nowrap flex-[1_1_auto] ">
              <span className="overflow-hidden truncate flex flex-row flex-nowrap flex-[1_1_auto] hover:text-[#999] ">Share</span>
              <span className="-me-2 inline-flex flex-row flex-wrap items-center flex-none relative ">
                <span className="w-4 h-4 outline-0 leading-none justify-center inline-flex flex-row flex-nowrap items-center align-middle relative ">
                  <svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M256 352 128 160h256z"></path></svg>
                </span>
              </span>
            </span>
            <div className="mt-9 max-h-[unset_!important] border-[rgba(33,37,41,0.2)] border absolute z-2 left-0 border-solid overflow-auto text-[#212529] bg-white shadow-[0px_6px_13px_rgba(0,0,0,0.125)] rounded-md m-0 p-0 text-base leadind-normal items-stretch invisible group-hover:opacity-100 group-hover:visible  ease-in-out">
              <ul className="bg-[0_0] p-0 relative text-[#212529] border-[rgba(33,37,41,0.2)] text-base leading-normal m-0 flex flex-col flex-nowrap ">
                <li className="mt-1.5 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Share Link</Link>
                  
                </li>

                <li className=" w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Facebook</Link>
                  
                </li>

                <li className="mb-1.5 mt-0 w-full font-normal text-[14.4px] leading-normal outline-0 cursor-default border-0 flex flex-col flex-nowrap flex-none relative select-none ">
                  <Link href="" className='text-black font-normal flex justify-between w-full py-1 px-4 pe-12 outline-0 gap-2 items-center relative whitespace-nowrap cursor-pointer flex-row flex-nowrap flex-[1_1_auto] hover:bg-[#f1f1f1] '>Tweet</Link>
                  
                </li>


              </ul>
            </div>
          </li>


        </ul>

         <span className="hidden text-[color-mix(in_srgb,#212529,#212529_50%,transparent)] p-1.5 border-transparent shadow-none! py-1.5 px-3 text-base leading-normal border border-solid font-normal text-center whitespace-nowrap items-center align-middle select-none cursor-pointer outline-0 appearance-none relative transition-colors ease-in-out">
          <span className="min-w-4 min-h-4 inline-flex items-center justify-center text-inherit self-center relative outline-0 w-4 h-4 leading-none flex-row flex-nowrap align-middle ">
           <svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M352 256 160 384V128z"></path></svg>
          </span>
        </span>
      </div>
    </div>
  )
}

export default ShortcutBar
