import Link from 'next/link'
import React from 'react'

const Join = () => {
  return (
    <div className='bg-center bg-cover bg-no-repeat text-white transition-[all_.5s] min-w-full max-w-screen lg:max-w-350 w-full flex justify-center flex-wrap items-start content-start' 
     style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(32, 5, 60, 0.95),
            rgba(80, 0, 120, 0.9)
          ),
          url('https://image.tmdb.org/t/p/original/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg')
        `,
        backgroundBlendMode: 'multiply' // try multiply, overlay, soft-light
      }}
    >
        <div className="w-full flex items-start flex-wrap lg:flex-nowrap justify-center min-w-full max-w-full lg:max-w-none">
            <div className="max-w-screen lg:max-w-350 w-full p-[30px_20px] lg:p-[30px_40px] flex items-start content-start flex-wrap">
                <div className="w-full">
                    <div className="flex justify-start items-center ">
                        <h2 className="font-bold text-[32px] mr-5 whitespace-nowrap m-0 leading-none">Join Today</h2>
                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap justify-start items-start py-5 ">
                        <div className="w-full! lg:w-[65%] mr-0! lg:mr-10 m-0 ">
                            <p className="m-0 text-[19.2px] p-0">Get access to maintain your own <em className='opacity-70'>custom personal lists</em>, <em className='opacity-70'>track what you&apos;ve seen</em> and search and filter for <em className='opacity-70'>what to watch next</em>—regardless if it&apos;s in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, FlixOlé, Zee5, and Sun Nxt.</p>
                            <p className="mb-2.5 mt-7.5 m-0 text-[19.2px] p-0">
                                <Link href="/signup" className='text-white text-[17.28px] font-semibold bg-[rgba(129,91,231,1)] border-[#805be7] underline-offset-3px border border-solid rounded-[5px] p-[8px_16px] '>Sign Up</Link>
                            </p>
                        </div>
                        <div className="w-full lg:w-auto mt-7.5 lg:mt-0 m-0 ">
                            <ul className="[list-style-type:disc] [list-style-position:outside] lg:ml-5 m-0 p-0">
                                <li className="opacity-80 m-0 flex justify-start items-center gap-2"><span>•</span> <span>Enjoy TMDB ad free</span></li>
                                <li className="opacity-80 m-0 flex justify-start items-center gap-2"><span>•</span> <span>Maintain a personal watchlist</span></li>
                                <li className="opacity-80 m-0 flex justify-start items-center gap-2"><span>•</span> <span>Filter by your subscribed streaming services and find something to watch</span></li>
                                <li className="opacity-80 m-0 flex justify-start items-center gap-2"><span>•</span> <span>Log the movies and TV shows you&apos;ve seen</span></li>
                                <li className="opacity-80 m-0 flex justify-start items-center gap-2"><span>•</span> <span>Build custom lists</span></li>
                                <li className="opacity-80 m-0 flex justify-start items-center gap-2"><span>•</span> <span>Contribute to and improve our database</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Join
