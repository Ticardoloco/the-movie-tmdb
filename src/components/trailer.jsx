"use client"
import React, { useEffect, useState } from 'react'
import TrailerTitle from './trailerTitle';
import TrailerBox from './trailerBox';

const Trailer = ({trailerData}) => {
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
  const [slideTrailer, setSlideTrailer] =useState("text2")
  const [dropDown, setDropDown] = useState(false)
  const [trailerDatas, setTrailerDatas] = useState([])
  const [activeBg, setActiveBg] = useState(null);
 useEffect(() => {
  if (Array.isArray(trailerData) && trailerData.length > 0) {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveBg(trailerData[0].backdrop_path);
    setTrailerDatas(trailerData);
  }
}, [trailerData]);
  return (
    <div className='bg-center bg-cover bg-no-repeat text-white transition-all duration-500 min-w-full max-w-350 w-full flex justify-center flex-wrap items-start content-start p-0 relative' style={activeBg ? { backgroundImage: `url(${TMDB_IMAGE_BASE}/w355_and_h200_multi_faces${activeBg})` }: {}}>
      <div className="w-full bg-[linear-gradient(to_right,rgba(3,37,65,0.75)_0%,rgba(3,37,65,0.75)_100%)] flex items-start justify-center min-w-full after:opacity-100 after:transition-all after:duration-300 after:ease-linear after:content-[''] after:w-10 lg:after:w-15 after:h-full after:absolute after:top-0 after:right-0 after:bg-[linear-gradient(to_right,rgba(255,255,255,0),#fff)] lg:after:bg-[linear-gradient(to_right,rgba(255,255,255,0)_0,#fff_100%)] after:will-change-opacity after:pointer-events-none">
        <div className="relative top-0 left-0 flex justify-center w-full min-w-full flex-wrap items-start content-start ">
          <div className=" flex-wrap max-w-screen w-full py-7.5  flex items-start content-start mb-0! pb-0!">
            <div className="w-full">
              <TrailerTitle text1={"Latest Trailers"} text2={"Popular"} text3={"Streaming"} text4={"On TV"} text5={"For Rent"} text6={"In Theaters"} slide={slideTrailer} setSlide={setSlideTrailer} dropDown={dropDown} setDropDown={setDropDown}/>
              
              <div className="min-h-0 h-auto w-full min-w-full max-w-350 overflow-x-scroll overflow-y-hidden custom-scroll transition-[height] duration-500 ease-linear flex justify-start items-start gap-5 px-5 lg:px-10 pt-5 pb-5">
                {slideTrailer==="text2" && trailerDatas.map((item)=>(
                   <TrailerBox key={item.id} id={item.id} title={item.title} description={item.description} image={item.backdrop_path} onHover={() => setActiveBg(item.backdrop_path)}/>
                ))}

                
                {slideTrailer==="text3" && trailerDatas.map((item)=>(
                   <TrailerBox key={item.id} id={item.id} title={item.title} description={item.description} image={item.backdrop_path} onHover={() => setActiveBg(item.backdrop_path)}/>
                ))}

                {slideTrailer==="text4" && trailerDatas.map((item)=>(
                   <TrailerBox key={item.id} id={item.id} title={item.title} description={item.description} image={item.backdrop_path} onHover={() => setActiveBg(item.backdrop_path)}/>
                ))}

                {slideTrailer==="text5" && trailerDatas.map((item)=>(
                   <TrailerBox key={item.id} id={item.id} title={item.title} description={item.description} image={item.backdrop_path} onHover={() => setActiveBg(item.backdrop_path)}/>
                ))}

                {slideTrailer==="text6" && trailerDatas.map((item)=>(
                   <TrailerBox key={item.id} id={item.id} title={item.title} description={item.description} image={item.backdrop_path} onHover={() => setActiveBg(item.backdrop_path)}/>
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
