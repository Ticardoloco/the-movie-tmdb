"use client"
import React, { useEffect, useState } from 'react'
import FilterBox from '../general/FilterBox'
import api from '@/services/httpService';
import config from '@/config';

const MainContent = () => {
  const [genresDatas, setGenresDatas] = useState([]);

  const getGenresData = async ()=>{
    const genresData = await api.get(config.subUrl.genres.movie);
    if (genresData.status === 200) {
      setGenresDatas(genresData.data.genres);
    }
  }

  useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getGenresData()
  },[])

  return (
    <div className='w-full flex items-start '>
        <FilterBox text1={"37"} genresDatas={genresDatas}/>
      
    </div>
  )
}

export default MainContent
