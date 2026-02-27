"use client"
import DataDetail from '@/components/general/DataDetail'
import MobileDetail from '@/components/general/MobileDetail'
import ShortcutBar from '@/components/general/ShortcutBar'
import config from '@/config'
import api from '@/services/httpService'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const {id} = useParams()
    const size = "/w1920_and_h800_multi_faces";
    const smallSize = "/w1000_and_h450_multi_faces";
    const size1 = "/w220_and_h330_multi_faces_filter(blur)";
    const size2= "/w220_and_h330_face";
    const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
    const [isMobile, setIsMobile] = useState(false);
    const [movieDetailDatas, setMovieDetailDatas] = useState(null);
    const [certificationDatas, setCertificationDatas] = useState(null);

    const getMovieDetailData = async () =>{
    try{
       const movieDetailData = await api.get(`${config.subUrl.details.movie_list}/${id}`)
        
        if (movieDetailData.status === 200) {
          setMovieDetailDatas(movieDetailData.data)
        }
    } catch(error){
      console.error("Couldn't fetch data", error);
      
    }
    }

    const getCertificationData = async ()=>{
      try {
        const certificationData = await api.get(`${config.subUrl.details.movie_list}/${id}/release_dates`)

        if (certificationData.status === 200) {
          const results = certificationData.data.results;

           const usRelease = results.find(
        (item) => item.iso_3166_1 === "US"
      );

      if (usRelease) {
        const certification = usRelease.release_dates.find(
          (r) => r.certification !== ""
        )?.certification;
        setCertificationDatas(certification);
      }
        }
      } catch(error){
        console.error("Could't fetch data", error);
        
      }
    }

      const formattedDate = movieDetailDatas?.release_date
  ? (() => {
      const [year, month, day] =
        movieDetailDatas.release_date.split("-");
      return `${month}-${day}-${year}`;
    })()
  : null;

  const formattedRuntime = movieDetailDatas?.runtime
  ? (() => {
      const hours = Math.floor(movieDetailDatas.runtime / 60);
      const minutes = movieDetailDatas.runtime % 60;
      return `${hours}h ${minutes}m`;
    })()
  : null;



    useEffect(()=>{
     getMovieDetailData()
     getCertificationData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    useEffect(()=>{
      const handleResize = ()=>{
        setIsMobile(window.innerWidth < 1024);
      }

      handleResize()
      window.addEventListener("resize", handleResize);
      return ()=> window.removeEventListener("resize", handleResize);
    },[])

    const backdropSize = isMobile ? smallSize : size;

    if(!movieDetailDatas){
      return <div>loading...</div>
    }

    
  
  return (
    <div className='w-full flex justify-center flex-wrap items-start bg-cover bg-no-repeat bg-position-[50%_50%] '>
      <ShortcutBar/>
      <div className="hidden lg:block mt-27.5 border-b border-solid border-[rgb(220.5,220.5,220.5)] bg-position-[left_calc((50vw-170px)-340px)_top] bg-cover  w-full relative z-1 bg-[linear-gradient(to_bottom_right,rgba(221,221,221,1),rgba(221,221,221,0.84))] border" style={{backgroundImage:`url(${TMDB_IMAGE_BASE}${size}${movieDetailDatas?.backdrop_path})`}}>
        <div className="bg-[rgba(0,0,0,0.7)] flex justify-center flex-wrap ">
          <div className="py-7.5 px-10 max-w-350 w-full z-0 ">
            <DataDetail poster={movieDetailDatas.poster_path} title={movieDetailDatas.title} year={movieDetailDatas.release_date.slice(0,4)} certification={certificationDatas} date={formattedDate} country={movieDetailDatas.origin_country} genres={movieDetailDatas.genres} runtime={formattedRuntime} rating={movieDetailDatas.vote_average} play={movieDetailDatas.homepage} tagline={movieDetailDatas.tagline} overview={movieDetailDatas.overview}/>
          </div>
        </div>
      </div>

      <div className="block lg:hidden mt-27.5 w-full relative z-1 border-b border-solid bg-[rgba(227,227,227,1)] bg-[linear-gradient(to_bottom_right,rgba(220.5,220.5,220.5,1),rgba(220.5,220.5,220.5,0.84))] ">
        <div className="bg-[linear-gradient(to_right,rgba(220.5,220.5,220.5,1)_0,rgba(220.5,220.5,220.5,0.96)_100%)] flex justify-center flex-wrap">
          <div className="bg-transparent pt-0 pb-0 pl-0 pr-0 max-w-full w-full z-0 ">
            <section className="h-auto block ">
              <div className="shadow-none min-w-screen w-screen h-auto rounded-none border-0 overflow-hidden ">
                <div className="w-full h-[calc(100vw/2.222222)] block aspect-[auto_calc(2/3)] relative top-0 left-0 rounded-md overflow-hidden">
                <div className="bg-position-[calc((((100vw/2.222222)-20px)/1.5)/2)_0] bg-cover bg-no-repeat w-full h-full " style={{backgroundImage:`url(${TMDB_IMAGE_BASE}${smallSize}${movieDetailDatas?.backdrop_path})`}}>
                <div className="bg-[linear-gradient(to_right,rgba(220.5,220.5,220.5,1)_20%,rgba(220.5,220.5,220.5,0)_50%)] w-full h-full absolute top-0 left-0 ">
                  <div className="absolute top-5 left-5 w-[calc(((100vw/2.222222)-40px)/1.5)] min-w-[calc(((100vw/2.222222)-40px)/1.5)] h-[calc((100vw/2.222222)-40px)] min-h-[calc((100vw/2.222222)-40px)] rounded-md z-4 overflow-hidden aspect-[auto_calc(2/3)] bg-position-[0_0] bg-cover " style={{backgroundImage:`url(${TMDB_IMAGE_BASE}${size1}${movieDetailDatas.poster_path})`}}>
                  <Image
                  fill
                  src={`${TMDB_IMAGE_BASE}${size2}${movieDetailDatas.poster_path}`}
                  alt='poster'
                  className='block w-full h-full min-w-full min-h-full border-0 outline-0 '
                  />
                  </div>
                </div>
                <div className="w-75 aspect-[auto_calc(2/3)] bg-[rgba(0,0,0,.7)] absolute top-0 left-0 text-center rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 [transition:linear_.2s] [backdrop-filter:blur(20px)]">
                <Link href="" className='text-white w-full aspect-[auto_calc(2/3)] inline-flex items-center justify-center text-[20.8px] font-normal underline'><span className="mr-1.5 relative top-0 left-0 inline-flex w-4 min-w-4 h-4 min-h-4 bg-center bg-no-repeat text-inherit items-center justify-center " style={{backgroundImage:`url("/expand.svg")`}}></span> Expand</Link>
                </div>
                </div>
                </div>

                <div className="w-full max-w-full min-h-0 flex ">
                  <MobileDetail title={movieDetailDatas.title} year={movieDetailDatas.release_date.slice(0,4)} certification={certificationDatas} date={formattedDate} country={movieDetailDatas.origin_country} genres={movieDetailDatas.genres} runtime={formattedRuntime} rating={movieDetailDatas.vote_average} play={movieDetailDatas.homepage} tagline={movieDetailDatas.tagline} overview={movieDetailDatas.overview}/>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
