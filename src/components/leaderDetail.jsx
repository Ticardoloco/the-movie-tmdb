import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const LeaderDetail = () => {
    
  return (
    <div className='pt-5'>
      <ol className="w-full m-0 p-0 list-none list-inside flex flex-col  md:flex-row md:flex-wrap">
            <li className="md:pr-2.5 p-0 flex items-center w-full md:w-1/2 mb-5">
                <span className="min-w-14 w-14 h-14 mr-2.5">
                    <Link className='m-0 p-0 text-black font-normal ' href="/">
                      <Image
                      width={56}
                      height={56}
                      src="/enterprise.jpeg"
                      alt='enterprice'
                      className='w-full h-full rounded-[50%] border-0 m-0 p-0 outline-0 max-w-[inherit] block align-middle'
                      />
                    </Link>
                </span>
                
                <div className="flex-wrap w-full flex items-center content-center ">
                  <h3 className="text-[19.2px] leading-none m-0 p-0 text-black font-semibold ">
                    <Link className='m-0 p-0 text-black font-semibold decoration-[rgba(30,213,169,1)] hover:underline hover:text-[rgba(30,213,169,1)] ' href="/">enterpr1se</Link>
                  </h3>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                    <div className="w-[51.67%] bg-[linear-gradient(to_right,rgba(192,254,207,1)_0%,rgba(30,213,169,1))] h-full min-w-10 rounded-sm"></div>
                    <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">2,276,499</h4>
                  </div>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                      <div className="w-full bg-[linear-gradient(to_right,rgba(253,193,112,1)_0%,rgba(217,59,99,1))] h-full min-w-10 rounded-sm"></div>
                      <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">27,768</h4>
                  </div>
                </div>
            </li>

            <li className="md:pl-2.5 p-0 flex items-center w-full md:w-1/2 mb-5">
                <span className="min-w-14 w-14 h-14 mr-2.5">
                    <Link className='m-0 p-0 text-black font-normal ' href="/">
                      <Image
                      width={56}
                      height={56}
                      src="/shai.webp"
                      alt='enterprice'
                      className='w-full h-full rounded-[50%] border-0 m-0 p-0 outline-0 max-w-[inherit] block align-middle'
                      />
                    </Link>
                </span>
                
                <div className="flex-wrap w-full flex items-center content-center ">
                  <h3 className="text-[19.2px] leading-none m-0 p-0 text-black font-semibold ">
                    <Link className='m-0 p-0 text-black font-semibold decoration-[rgba(30,213,169,1)] hover:underline hover:text-[rgba(30,213,169,1)] ' href="/">Shei</Link>
                  </h3>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                    <div className="w-[56.12%] bg-[linear-gradient(to_right,rgba(192,254,207,1)_0%,rgba(30,213,169,1))] h-full min-w-10 rounded-sm"></div>
                    <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">2,472,720</h4>
                  </div>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                      <div className="w-[78.49%] bg-[linear-gradient(to_right,rgba(253,193,112,1)_0%,rgba(217,59,99,1))] h-full min-w-10 rounded-sm"></div>
                      <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">21,796</h4>
                  </div>
                </div>
            </li>

            <li className="md:pr-2.5 p-0 flex items-center w-full md:w-1/2 mb-5">
                <span className="min-w-14 w-14 h-14 mr-2.5">
                    <Link className='m-0 p-0 text-black font-normal ' href="/">
                      <span className="flex items-center justify-center w-full h-full rounded-[50%] bg-[rgba(210,144,1,1)] relative top-0 left-0 leading-12 text-center uppercase text-[18px] text-white ">R</span>
                    </Link>
                </span>
                
                <div className="flex-wrap w-full flex items-center content-center ">
                  <h3 className="text-[19.2px] leading-none m-0 p-0 text-black font-semibold ">
                    <Link className='m-0 p-0 text-black font-semibold decoration-[rgba(30,213,169,1)] hover:underline hover:text-[rgba(30,213,169,1)] ' href="/">RuiZafon</Link>
                  </h3>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                    <div className="w-[41.57%] bg-[linear-gradient(to_right,rgba(192,254,207,1)_0%,rgba(30,213,169,1))] h-full min-w-10 rounded-sm"></div>
                    <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">1,831,702</h4>
                  </div>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                      <div className="w-[56.18%] bg-[linear-gradient(to_right,rgba(253,193,112,1)_0%,rgba(217,59,99,1))] h-full min-w-10 rounded-sm"></div>
                      <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">15,601</h4>
                  </div>
                </div>
            </li>

            <li className="md:pl-2.5 p-0 flex items-center w-full md:w-1/2 mb-5">
                <span className="min-w-14 w-14 h-14 mr-2.5">
                    <Link className='m-0 p-0 text-black font-normal ' href="/">
                      <Image
                      width={56}
                      height={56}
                      src="/samara.webp"
                      alt='enterprice'
                      className='w-full h-full rounded-[50%] border-0 m-0 p-0 outline-0 max-w-[inherit] block align-middle'
                      />
                    </Link>
                </span>
                
                <div className="flex-wrap w-full flex items-center content-center ">
                  <h3 className="text-[19.2px] leading-none m-0 p-0 text-black font-semibold ">
                    <Link className='m-0 p-0 text-black font-semibold decoration-[rgba(30,213,169,1)] hover:underline hover:text-[rgba(30,213,169,1)] ' href="/">Samara
                  </Link>
                  </h3>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                    <div className="w-full bg-[linear-gradient(to_right,rgba(192,254,207,1)_0%,rgba(30,213,169,1))] h-full min-w-10 rounded-sm"></div>
                    <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">4,405,975</h4>
                  </div>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                      <div className="w-[48.01%] bg-[linear-gradient(to_right,rgba(253,193,112,1)_0%,rgba(217,59,99,1))] h-full min-w-10 rounded-sm"></div>
                      <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">13,332</h4>
                  </div>
                </div>
            </li>

            <li className="md:pr-2.5 p-0 flex items-center w-full md:w-1/2 mb-5">
                <span className="min-w-14 w-14 h-14 mr-2.5">
                    <Link className='m-0 p-0 text-black font-normal ' href="/">
                      <span className="flex items-center justify-center w-full h-full rounded-[50%] bg-[rgba(1,198,172,1)] relative top-0 left-0 leading-12 text-center uppercase text-[18px] text-white ">Q</span>
                    </Link>
                </span>
                
                <div className="flex-wrap w-full flex items-center content-center ">
                  <h3 className="text-[19.2px] leading-none m-0 p-0 text-black font-semibold ">
                    <Link className='m-0 p-0 text-black font-semibold decoration-[rgba(30,213,169,1)] hover:underline hover:text-[rgba(30,213,169,1)] ' href="/">qualitylover</Link>
                  </h3>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                    <div className="w-[23.27%] bg-[linear-gradient(to_right,rgba(192,254,207,1)_0%,rgba(30,213,169,1))] h-full min-w-10 rounded-sm"></div>
                    <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">1,025,342</h4>
                  </div>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                      <div className="w-[41.37%] bg-[linear-gradient(to_right,rgba(253,193,112,1)_0%,rgba(217,59,99,1))] h-full min-w-10 rounded-sm"></div>
                      <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">11,487</h4>
                  </div>
                </div>
            </li>

            <li className="md:pl-2.5 p-0 flex items-center w-full md:w-1/2 mb-5">
                <span className="min-w-14 w-14 h-14 mr-2.5">
                    <Link className='m-0 p-0 text-black font-normal ' href="/">
                      <Image
                      width={56}
                      height={56}
                      src="/roman.webp"
                      alt='enterprice'
                      className='w-full h-full rounded-[50%] border-0 m-0 p-0 outline-0 max-w-[inherit] block align-middle'
                      />
                    </Link>
                </span>
                
                <div className="flex-wrap w-full flex items-center content-center ">
                  <h3 className="text-[19.2px] leading-none m-0 p-0 text-black font-semibold ">
                    <Link className='m-0 p-0 text-black font-semibold decoration-[rgba(30,213,169,1)] hover:underline hover:text-[rgba(30,213,169,1)] ' href="/">Roman
                  </Link>
                  </h3>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                    <div className="w-[10.58%] bg-[linear-gradient(to_right,rgba(192,254,207,1)_0%,rgba(30,213,169,1))] h-full min-w-10 rounded-sm"></div>
                    <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">466,066</h4>
                  </div>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                      <div className="w-[36.03%] bg-[linear-gradient(to_right,rgba(253,193,112,1)_0%,rgba(217,59,99,1))] h-full min-w-10 rounded-sm"></div>
                      <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">9,889</h4>
                  </div>
                </div>
            </li>

            <li className="md:pr-2.5 p-0 flex items-center w-full md:w-1/2 mb-5">
                <span className="min-w-14 w-14 h-14 mr-2.5">
                    <Link className='m-0 p-0 text-black font-normal ' href="/">
                      <span className="flex items-center justify-center w-full h-full rounded-[50%] bg-[rgba(1,199,210,1)] relative top-0 left-0 leading-12 text-center uppercase text-[18px] text-white ">3</span>
                    </Link>
                </span>
                
                <div className="flex-wrap w-full flex items-center content-center ">
                  <h3 className="text-[19.2px] leading-none m-0 p-0 text-black font-semibold ">
                    <Link className='m-0 p-0 text-black font-semibold decoration-[rgba(30,213,169,1)] hover:underline hover:text-[rgba(30,213,169,1)] ' href="/">3298021</Link>
                  </h3>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                    <div className="w-[0.63%] bg-[linear-gradient(to_right,rgba(192,254,207,1)_0%,rgba(30,213,169,1))] h-full min-w-10 rounded-sm"></div>
                    <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">27,584</h4>
                  </div>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                      <div className="w-[29.34%] bg-[linear-gradient(to_right,rgba(253,193,112,1)_0%,rgba(217,59,99,1))] h-full min-w-10 rounded-sm"></div>
                      <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">8,053</h4>
                  </div>
                </div>
            </li>

             <li className="md:pl-2.5 p-0 flex items-center w-full md:w-1/2 mb-5">
                <span className="min-w-14 w-14 h-14 mr-2.5">
                    <Link className='m-0 p-0 text-black font-normal ' href="/">
                      <Image
                      width={56}
                      height={56}
                      src="/unforget.webp"
                      alt='enterprice'
                      className='w-full h-full rounded-[50%] border-0 m-0 p-0 outline-0 max-w-[inherit] block align-middle'
                      />
                    </Link>
                </span>
                
                <div className="flex-wrap w-full flex items-center content-center ">
                  <h3 className="text-[19.2px] leading-none m-0 p-0 text-black font-semibold ">
                    <Link className='m-0 p-0 text-black font-semibold decoration-[rgba(30,213,169,1)] hover:underline hover:text-[rgba(30,213,169,1)] ' href="/">UnforgetMemory
                  </Link>
                  </h3>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                    <div className="w-[0.71%] bg-[linear-gradient(to_right,rgba(192,254,207,1)_0%,rgba(30,213,169,1))] h-full min-w-10 rounded-sm"></div>
                    <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">31,133</h4>
                  </div>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                      <div className="w-[21.36%] bg-[linear-gradient(to_right,rgba(253,193,112,1)_0%,rgba(217,59,99,1))] h-full min-w-10 rounded-sm"></div>
                      <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">5,863</h4>
                  </div>
                </div>
            </li>

             <li className="md:pr-2.5 p-0 flex items-center w-full md:w-1/2 mb-5">
                <span className="min-w-14 w-14 h-14 mr-2.5">
                    <Link className='m-0 p-0 text-black font-normal ' href="/">
                      <Image
                      width={56}
                      height={56}
                      src="/dkmovie.webp"
                      alt='enterprice'
                      className='w-full h-full rounded-[50%] border-0 m-0 p-0 outline-0 max-w-[inherit] block align-middle'
                      />
                    </Link>
                </span>
                
                <div className="flex-wrap w-full flex items-center content-center ">
                  <h3 className="text-[19.2px] leading-none m-0 p-0 text-black font-semibold ">
                    <Link className='m-0 p-0 text-black font-semibold decoration-[rgba(30,213,169,1)] hover:underline hover:text-[rgba(30,213,169,1)] ' href="/">dkmovies</Link>
                  </h3>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                    <div className="w-[3.49%] bg-[linear-gradient(to_right,rgba(192,254,207,1)_0%,rgba(30,213,169,1))] h-full min-w-10 rounded-sm"></div>
                    <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">153,881</h4>
                  </div>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                      <div className="w-[26.36%] bg-[linear-gradient(to_right,rgba(253,193,112,1)_0%,rgba(217,59,99,1))] h-full min-w-10 rounded-sm"></div>
                      <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">7,235</h4>
                  </div>
                </div>
            </li>

            <li className="md:pl-2.5 p-0 flex items-center w-full md:w-1/2 mb-5">
                <span className="min-w-14 w-14 h-14 mr-2.5">
                    <Link className='m-0 p-0 text-black font-normal ' href="/">
                      <span className="flex items-center justify-center w-full h-full rounded-[50%] bg-[rgba(234,20,140,1)] relative top-0 left-0 leading-12 text-center uppercase text-[18px] text-white ">A</span>
                    </Link>
                </span>
                
                <div className="flex-wrap w-full flex items-center content-center ">
                  <h3 className="text-[19.2px] leading-none m-0 p-0 text-black font-semibold ">
                    <Link className='m-0 p-0 text-black font-semibold decoration-[rgba(30,213,169,1)] hover:underline hover:text-[rgba(30,213,169,1)] ' href="/">avicii123</Link>
                  </h3>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                    <div className="w-[0.49%] bg-[linear-gradient(to_right,rgba(192,254,207,1)_0%,rgba(30,213,169,1))] h-full min-w-10 rounded-sm"></div>
                    <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">21,662</h4>
                  </div>

                  <div className="h-2 mt-1.5 w-full flex items-center">
                      <div className="w-[56.22%] bg-[linear-gradient(to_right,rgba(253,193,112,1)_0%,rgba(217,59,99,1))] h-full min-w-10 rounded-sm"></div>
                      <h4 className="p-0 text-black ml-2.5 text-[14.4px] font-bold leading-none">15,430</h4>
                  </div>
                </div>
            </li>



      </ol>
    </div>
  )
}

export default LeaderDetail
