"use client"
import React, { useEffect, useState } from 'react'
import Title from './title'
import DataBox from './dataBox';
import api from '@/services/httpService';
import config from '@/config';

const Popular = () => {
  const [slidePopular, setSlidePopular] = useState("text2");
  const [dropDown, setDropDown] = useState(false);
  const [popularStreamingDatas, setPopularStreamingDatas] = useState([]);
  const [popularOntvDatas, setPopularOntvDatas] = useState([]);
  const [popularRentDatas, setPopularRentDatas] = useState([]);
  const [popularTheaterDatas, setPopularTheaterDatas] = useState([]);

  const getPopularStreamingData = async ()=>{
    const popularStreamingData = await api.get(config.subUrl.popular.streaming);
    if (popularStreamingData.status === 200) {
      setPopularStreamingDatas(popularStreamingData.data.results);
    }
  }

  
  const getPopularOntvData = async ()=>{
    const popularOntvData = await api.get(config.subUrl.popular.on_tv);
    if (popularOntvData.status === 200) {
      setPopularOntvDatas(popularOntvData.data.results);
    }
  }

  const getPopularRentData = async ()=>{
    const popularRentData = await api.get(config.subUrl.popular.for_rent);
    if (popularRentData.status === 200) {
      setPopularRentDatas(popularRentData.data.results);
    }
  }

  const getPopularTheaterData = async ()=>{
    const popularTheaterData = await api.get(config.subUrl.popular.theater);
    if (popularTheaterData.status === 200) {
      setPopularTheaterDatas(popularTheaterData.data.results);
    }
  }


  useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getPopularStreamingData();
    getPopularOntvData();
    getPopularRentData();
    getPopularTheaterData();
  },[])
  return (
    <div className='min-w-full max-w-350 w-full flex justify-center flex-wrap items-start content-start bg-cover bg-no-repeat bg-position-[50%_50%] p-0 '>
        <div className="w-full flex items-start justify-center min-w-full after:opacity-100 after:transition-all after:duration-300 after:ease-linear after:content-[''] after:w-10 lg:after:w-15 after:h-full after:absolute after:top-0 after:right-0 after:bg-[linear-gradient(to_right,rgba(255,255,255,0),#fff)] lg:after:bg-[linear-gradient(to_right,rgba(255,255,255,0)_0,#fff_100%)] after:will-change-opacity after:pointer-events-none">
          <div className="pr-0 pl-0 max-w-350 w-full py-7.5 flex items-start content-start flex-wrap pb-0! mb-0!">
            <div className="w-full">
              <Title text1={"What's Popular"} text2={"Streaming"} text3={"On TV"} text4={"For Rent"} text5={"In Theaters"} slide={slidePopular} setSlide={setSlidePopular} dropDown={dropDown} setDropDown={setDropDown}/>

              <div className="relative top-0 left-0 flex justify-center w-full min-w-full flex-wrap items-start content-start ">
                <div className="min-h-0 h-auto w-full min-w-full max-w-screen overflow-x-scroll custom-scroll overflow-y-hidden transition-[height] duration-500 ease-linear flex justify-start gap-5 items-start py-5 lg:px-10 px-5 whitespace-nowrap">
                  {slidePopular==="text2" && popularStreamingDatas.map((item)=>(
                    <DataBox key={item.id} id={item.id} title={item.title} poster={item.poster_path} rating={item.vote_average} date={item.release_date}/>
                  ))}

                  {slidePopular==="text3" && popularOntvDatas.map((item)=>(
                    <DataBox key={item.id} id={item.id} title={item.name} poster={item.poster_path} rating={item.vote_average} date={item.first_air_date}/>
                  ))}

                  {slidePopular==="text4" && popularRentDatas.map((item)=>(
                    <DataBox key={item.id} id={item.id} title={item.title} poster={item.poster_path} rating={item.vote_average} date={item.release_date}/>
                  ))}

                  {slidePopular==="text5" && popularTheaterDatas.map((item)=>(
                    <DataBox key={item.id} id={item.id} title={item.title} poster={item.poster_path} rating={item.vote_average} date={item.release_date}/>
                  ))}


                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Popular
