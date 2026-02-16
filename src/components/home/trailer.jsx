"use client"
import React, { useEffect, useState } from 'react'
import TrailerTitle from './trailerTitle';
import TrailerBox from './trailerBox';
import api from '@/services/httpService';
import config from '@/config';

const Trailer = () => {
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
  const [slideTrailer, setSlideTrailer] =useState("Popular")
  const [dropDown, setDropDown] = useState(false)
  const [trailerPopularDatas, setTrailerPopularDatas] = useState([]);
  const [trailerStreamingDatas, setTrailerStreamingDatas] = useState([]);
  const [trailerOntvDatas, setTrailerOntvDatas] = useState([]);
  const [trailerRentDatas, setTrailerRentDatas] = useState([])
  const [trailerTheaterDatas, setTrailerTheaterDatas] = useState([])
  const [activeBg, setActiveBg] = useState(null);

  const getTrailerPopularData = async ()=>{
    const trailerPopularData = await api.get(config.subUrl.trailer.popular);
    if (trailerPopularData.status === 200) {
      setTrailerPopularDatas(trailerPopularData.data.results)
    }
  };

  const getTrailerStreamingData = async ()=>{
    const trailerStreamingData = await api.get(config.subUrl.trailer.streaming);

    if (trailerStreamingData.status === 200) {
      setTrailerStreamingDatas(trailerStreamingData.data.results)
    }
  }

  const getTrailerOntvData = async ()=>{
    const trailerOntvData = await api.get(config.subUrl.trailer.on_tv);
    if (trailerOntvData.status === 200) {
      setTrailerOntvDatas(trailerOntvData.data.results)
    }
  }

  const getTrailerRentData = async ()=>{
    const trailerRentData = await api.get(config.subUrl.trailer.for_rent);

    if (trailerRentData.status === 200) {
      setTrailerRentDatas(trailerRentData.data.results);
    }
  }

  const getTrailerTheaterData = async ()=>{
    const trailerTheaterData = await api.get(config.subUrl.trailer.theater);

    if (trailerTheaterData.status === 200) {
      setTrailerTheaterDatas(trailerTheaterData.data.results);
    }
  }

  useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  getTrailerPopularData();
  getTrailerStreamingData();
  getTrailerOntvData();
  getTrailerRentData();
  getTrailerTheaterData();
}, []);

 useEffect(() => {
  if (slideTrailer === "Popular" && trailerPopularDatas.length > 0) {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveBg(trailerPopularDatas[0].backdrop_path);
  }

  if (slideTrailer === "Streaming" && trailerStreamingDatas.length > 0) {
    setActiveBg(trailerStreamingDatas[0].backdrop_path);
  }

  
  if (slideTrailer === "On TV" && trailerOntvDatas.length > 0) {
    setActiveBg(trailerOntvDatas[0].backdrop_path);
  }

  if (slideTrailer === "For Rent" && trailerRentDatas.length > 0) {
    setActiveBg(trailerRentDatas[0].backdrop_path);
  }

  if (slideTrailer === "In Theaters" && trailerTheaterDatas.length > 0) {
    setActiveBg(trailerTheaterDatas[0].backdrop_path);
  }


}, [slideTrailer,
   trailerPopularDatas,
    trailerStreamingDatas,
     trailerOntvDatas,
    trailerRentDatas,
    trailerTheaterDatas
    ]);
  return (
    <div className='bg-center bg-cover bg-no-repeat text-white transition-all duration-500 min-w-full max-w-350 w-full flex justify-center flex-wrap items-start content-start p-0 relative' style={activeBg ? { backgroundImage: `url(${TMDB_IMAGE_BASE}/w355_and_h200_multi_faces${activeBg})` }: {}}>
      <div className="w-full bg-[linear-gradient(to_right,rgba(3,37,65,0.75)_0%,rgba(3,37,65,0.75)_100%)] flex items-start justify-center min-w-full after:opacity-100 after:transition-all after:duration-300 after:ease-linear after:content-[''] after:w-10 lg:after:w-15 after:h-full after:absolute after:top-0 after:right-0 after:bg-[linear-gradient(to_right,rgba(255,255,255,0),#fff)] lg:after:bg-[linear-gradient(to_right,rgba(255,255,255,0)_0,#fff_100%)] after:will-change-opacity after:pointer-events-none">
        <div className="relative top-0 left-0 flex justify-center w-full min-w-full flex-wrap items-start content-start ">
          <div className=" flex-wrap max-w-screen w-full py-7.5  flex items-start content-start mb-0! pb-0!">
            <div className="w-full">
              <TrailerTitle titleList={["Popular", "Streaming", "On TV", "For Rent", "In Theaters"]} text1={"Latest Trailers"} slide={slideTrailer} setSlide={setSlideTrailer} dropDown={dropDown} setDropDown={setDropDown}/>
              
              <div className="min-h-0 h-auto w-full min-w-full max-w-350 overflow-x-scroll overflow-y-hidden custom-scroll transition-[height] duration-500 ease-linear flex justify-start items-start gap-5 px-5 lg:px-10 pt-5 pb-5">
                {slideTrailer==="Popular" && trailerPopularDatas.map((item)=>(
                   <TrailerBox key={item.id} id={item.id} title={item.title} description={item.original_title} image={item.backdrop_path} onHover={() => setActiveBg(item.backdrop_path)}/>
                ))}

                
                {slideTrailer==="Streaming" && trailerStreamingDatas.map((item)=>(
                   <TrailerBox key={item.id} id={item.id} title={item.name} description={item.original_name} image={item.backdrop_path} onHover={() => setActiveBg(item.backdrop_path)}/>
                ))}

                {slideTrailer==="On TV" && trailerOntvDatas.map((item)=>(
                   <TrailerBox key={item.id} id={item.id} title={item.name} description={item.original_name} image={item.backdrop_path} onHover={() => setActiveBg(item.backdrop_path)}/>
                ))}

                {slideTrailer==="For Rent" && trailerRentDatas.map((item)=>(
                   <TrailerBox key={item.id} id={item.id} title={item.name} description={item.original_name} image={item.backdrop_path} onHover={() => setActiveBg(item.backdrop_path)}/>
                ))}

                {slideTrailer==="In Theaters" && trailerTheaterDatas.map((item)=>(
                   <TrailerBox key={item.id} id={item.id} title={item.title} description={item.original_title} image={item.backdrop_path} onHover={() => setActiveBg(item.backdrop_path)}/>
                ))}



              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Trailer
