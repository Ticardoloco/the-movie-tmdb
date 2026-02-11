"use client"
import React, { useEffect, useState } from 'react'
import FilterBox from '../general/FilterBox'
import api from '@/services/httpService';
import config from '@/config';

const MainContent = () => {
  const [genresDatas, setGenresDatas] = useState([]);
  const [sortDropDown, setSortDropDown] = useState(false);
    const [toWatchDropDown, setToWatchDropDown] = useState(false);
    const [select, setSelect] = useState(false);
    const [selectAdult, setSelectAdult] = useState(false);
    const [selectLanguage, setSelectLanguage] = useState(false);
    const [filterDropDown, setFilterDropDown] = useState(true);
    const [availability, setAvailability] = useState(true);
    const [stream, setStream] = useState(true);
    const [free, setFree] = useState(true);
    const [ads, setAds] = useState(true);
    const [rent, setRent] = useState(true);
    const [buy, setBuy] = useState(true);
    const [searchRelease, setSearchRelease] = useState(false);
    const [searchCountry, setSearchCountry] = useState(false);
    const [theatricalLimited, setTheatricalLimited] = useState(true);
    const [theatrical, setTheatrical] = useState(true);
    const [premiere, setPremiere] = useState(true);
    const [digital, setDigital] = useState(true);
    const [physical, setPhysical] = useState(true);
    const [tv, setTv] = useState(true);
    const [selectedSort, setSelectedSort] = useState("Popularity Decending");
    const [adultContent, setAdultContent] = useState("Exclude adult");
    const [language, setlanguage] = useState("No Language");

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
        <FilterBox text1={"37"} genresDatas={genresDatas} sortDropDown={sortDropDown} setSortDropDown={setSortDropDown} toWatchDropDown={toWatchDropDown} setToWatchDropDown={setToWatchDropDown} select={select} setSelect={setSelect} selectAdult={selectAdult} setSelectAdult={setSelectAdult} selectLanguage={selectLanguage} setSelectLanguage={setSelectLanguage} filterDropDown={filterDropDown} setFilterDropDown={setFilterDropDown} availability={availability} setAvailability={setAvailability} stream={stream} setStream={setStream} free={free} setFree={setFree} ads={ads} setAds={setAds} rent={rent} setRent={setRent} buy={buy} setBuy={setBuy} searchRelease={searchRelease} setSearchRelease={setSearchRelease} searchCountry={searchCountry} setSearchCountry={setSearchCountry} theatricalLimited={theatricalLimited} setTheatricalLimited={setTheatricalLimited} theatrical={theatrical} setTheatrical={setTheatrical} premiere={premiere} setPremiere={setPremiere} digital={digital} setDigital={setDigital} physical={physical} setPhysical={setPhysical} tv={tv} setTv={setTv} selectedSort={selectedSort} setSelectedSort={setSelectedSort} adultContent={adultContent} setAdultContent={setAdultContent} language={language} setlanguage={setlanguage} />
      
    </div>
  )
}

export default MainContent
