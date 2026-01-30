"use client"
import React, { useEffect, useState } from 'react'
import Title from './title'
import DataBox from './dataBox';

const Watch = ({watchData}) => {
    const [slideWatch, setSlideWatch] = useState("text2");
    const [dropDown, setDropDown] = useState(false);
    const [watchDatas, setWatchDatas] = useState([]);
    useEffect(()=>{
        setWatchDatas(watchData)
    },[watchData])
  return (
    <div className='min-w-full max-w-350 w-full flex justify-center flex-wrap items-start content-start bg-cover bg-no-repeat bg-position-[50%_50%] p-0 '>
      <div className="w-full flex items-start justify-center min-w-full after:opacity-100 after:transition-all after:duration-300 after:ease-linear after:content-[''] after:w-10 lg:after:w-15 after:h-full after:absolute after:top-0 after:right-0 after:bg-[linear-gradient(to_right,rgba(255,255,255,0),#fff)] lg:after:bg-[linear-gradient(to_right,rgba(255,255,255,0)_0,#fff_100%)] after:will-change-opacity after:pointer-events-none">
        <div className="pr-0 pl-0 max-w-350 w-full py-7.5  flex items-start content-start flex-wrap pb-0! mb-0!">
            <div className="w-full">
                <Title text1={"Free To Watch"} text2={"Movies"} text3={"TV"}slide={slideWatch} setSlide={setSlideWatch} dropDown={dropDown} setDropDown={setDropDown}/>

                <div className="relative top-0 left-0 flex justify-center w-full min-w-full flex-wrap items-start content-start">
                    <div className="min-h-0 h-auto w-full min-w-full max-w-screen overflow-x-scroll custom-scroll overflow-y-hidden transition-[height] duration-500 ease-linear flex justify-start gap-5 items-start py-5 lg:px-10 px-5 whitespace-nowrap">
                        {slideWatch === "text2" && watchDatas.map((item)=>(
                            <DataBox key={item.id} id={item.id} title={item.title} rating={item.rating} date={item.releaseDate} poster={item.poster}/>
                        ))}

                        
                        {slideWatch === "text3" && watchDatas.map((item)=>(
                            <DataBox key={item.id} id={item.id} title={item.title} rating={item.rating} date={item.releaseDate} poster={item.poster}/>
                        ))}


                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Watch
