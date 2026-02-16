"use client"
import React, { useEffect, useState } from 'react'
import Title from './title'
import DataBox from './dataBox';
import api from '@/services/httpService';
import config from '@/config';

const Watch = () => {
    const [slideWatch, setSlideWatch] = useState("Movies");
    const [dropDown, setDropDown] = useState(false);
    const [watchMovieDatas, setWatchMovieDatas] = useState([]);
    const [watchTvDatas, setWatchTvDatas] = useState([]);

    const getWatchMovieData = async ()=>{
        const watchMovieData = await api.get(config.subUrl.watch.movie);
        if (watchMovieData.status === 200) {
            setWatchMovieDatas(watchMovieData.data.results);
        }
    }

    const getWatchTvData = async ()=>{
        const watchTvData = await api.get(config.subUrl.watch.tv);
        if (watchTvData.status === 200) {
            setWatchTvDatas(watchTvData.data.results);
        }
    }

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getWatchMovieData()
        getWatchTvData()
    },[])
  return (
    <div className='min-w-full max-w-350 w-full flex justify-center flex-wrap items-start content-start bg-cover bg-no-repeat bg-position-[50%_50%] p-0 '>
      <div className="w-full flex items-start justify-center min-w-full after:opacity-100 after:transition-all after:duration-300 after:ease-linear after:content-[''] after:w-10 lg:after:w-15 after:h-full after:absolute after:top-0 after:right-0 after:bg-[linear-gradient(to_right,rgba(255,255,255,0),#fff)] lg:after:bg-[linear-gradient(to_right,rgba(255,255,255,0)_0,#fff_100%)] after:will-change-opacity after:pointer-events-none">
        <div className="pr-0 pl-0 max-w-350 w-full py-7.5  flex items-start content-start flex-wrap pb-0! mb-0!">
            <div className="w-full">
                <Title text1={"Free To Watch"} titleList={["Movies","TV"]} slide={slideWatch} setSlide={setSlideWatch} dropDown={dropDown} setDropDown={setDropDown}/>

                <div className="relative top-0 left-0 flex justify-center w-full min-w-full flex-wrap items-start content-start">
                    <div className="min-h-0 h-auto w-full min-w-full max-w-screen overflow-x-scroll custom-scroll overflow-y-hidden transition-[height] duration-500 ease-linear flex justify-start gap-5 items-start py-5 lg:px-10 px-5 whitespace-nowrap">
                        {slideWatch === "Movies" && watchMovieDatas.map((item)=>(
                            <DataBox key={item.id} id={item.id} title={item.name} rating={item.vote_average} date={item.first_air_date} poster={item.poster_path}/>
                        ))}

                        
                        {slideWatch === "TV" && watchTvDatas.map((item)=>(
                            <DataBox key={item.id} id={item.id} title={item.name} rating={item.vote_average} date={item.first_air_date} poster={item.poster_path}/>
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
