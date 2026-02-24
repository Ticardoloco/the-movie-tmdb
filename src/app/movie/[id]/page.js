"use client"
import DataDetail from '@/components/general/DataDetail'
import ShortcutBar from '@/components/general/ShortcutBar'
import config from '@/config'
import api from '@/services/httpService'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const {id} = useParams()
    const size = "/w1920_and_h800_multi_faces";
    const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
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
    if(!movieDetailDatas){
      return <div>loading...</div>
    }

  
  return (
    <div className='w-full flex justify-center flex-wrap items-start bg-cover bg-no-repeat bg-position-[50%_50%] '>
      <ShortcutBar/>
      <div className="mt-27.5 border-b border-solid border-[rgb(220.5,220.5,220.5)] bg-[position:left_calc((50vw-170px)-340px)_top bg-cover bg-no-repeat w-full relative z-1 border-none bg-[linear-gradient(to_bottom_right,rgba(221,221,221,1),rgba(221,221,221,0.84))] border" style={{backgroundImage:`url(${TMDB_IMAGE_BASE}${size}${movieDetailDatas?.backdrop_path})`}}>
        <div className="bg-[rgba(0,0,0,0.7)] flex justify-center flex-wrap ">
          <div className="py-7.5 px-10 max-w-350 w-full z-0 ">
            <DataDetail poster={movieDetailDatas.poster_path} title={movieDetailDatas.title} year={movieDetailDatas.release_date.slice(0,4)} certification={certificationDatas} date={formattedDate} country={movieDetailDatas.origin_country} genres={movieDetailDatas.genres} runtime={formattedRuntime} rating={movieDetailDatas.vote_average}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
