"use client"
import config from '@/config';
import api from '@/services/httpService';
import React, { useEffect, useState } from 'react'
import FilterBox from '../general/FilterBox';
import MovieBox from '../general/MovieBox';
import Link from 'next/link';

const MainContent = () => {
    const [genresDatas, setGenresDatas] =useState([]);
    const [tvPopularDatas, setPopularDatas] = useState([]);
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
        const genresData = await api.get(config.subUrl.genres.tv);
        if (genresData.status === 200) {
            setGenresDatas(genresData.data.genres)
        }
        
    }

    const getTvPopularData = async () =>{
        const tvPopularData = await api.get(config.subUrl.tv.popular);
        if (tvPopularData.status === 200) {
            setPopularDatas(tvPopularData.data.results)
        }
    }

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getGenresData()
        getTvPopularData()
    })
  return (
    <div className='w-full flex lg:flex-row flex-col items-start content-start lg:content-none'>
      <FilterBox text1={"27"} genresDatas={genresDatas} sortDropDown={sortDropDown} setSortDropDown={setSortDropDown} toWatchDropDown={toWatchDropDown} setToWatchDropDown={setToWatchDropDown} select={select} setSelect={setSelect} selectAdult={selectAdult} setSelectAdult={setSelectAdult} selectLanguage={selectLanguage} setSelectLanguage={setSelectLanguage} filterDropDown={filterDropDown} setFilterDropDown={setFilterDropDown} availability={availability} setAvailability={setAvailability} stream={stream} setStream={setStream} free={free} setFree={setFree} ads={ads} setAds={setAds} rent={rent} setRent={setRent} buy={buy} setBuy={setBuy} searchRelease={searchRelease} setSearchRelease={setSearchRelease} searchCountry={searchCountry} setSearchCountry={setSearchCountry} theatricalLimited={theatricalLimited} setTheatricalLimited={setTheatricalLimited} theatrical={theatrical} setTheatrical={setTheatrical} premiere={premiere} setPremiere={setPremiere} digital={digital} setDigital={setDigital} physical={physical} setPhysical={setPhysical} tv={tv} setTv={setTv} selectedSort={selectedSort} setSelectedSort={setSelectedSort} adultContent={adultContent} setAdultContent={setAdultContent} language={language} setlanguage={setlanguage}/>

      <div className="w-full lg:w-auto">
        <div className="lg:pl-7.5 bg-[0_0] pr-0 mt-5 lg:mt-0 w-[calc(100vw-40px)] lg:w-[calc(100vw-80px-268px)] max-w-screen lg:max-w-[calc(1400px-80px-268px)] h-auto flex flex-wrap p-0">
            <section className="pb-0 border-t-0 pt-0 w-full block">
                <div className="-mt-7.5">
                    <div className="w-full flex flex-row justify-between flex-wrap">
                        {tvPopularDatas.map((item)=>(
                            <MovieBox key={item.id} poster={item.poster_path} title={item.name} id={item.id} date={item.first_air_date} rating={item.vote_average} description={item.overview}/>
                        ))}

                        <div className="border-0 mt-0 h-0 shadow-none relative top-0 left-0 flex flex-wrap content-start rounded-lg overflow-hidden  w-[175.66px] max-w-[calc((1400px-80px-260px-(30px*4))/4)] bg-white"></div>
                        <div className="border-0 mt-0 h-0 shadow-none relative top-0 left-0 flex flex-wrap content-start rounded-lg overflow-hidden  w-[175.66px] max-w-[calc((1400px-80px-260px-(30px*4))/4)] bg-white"></div>
                        <div className="border-0 mt-0 h-0 shadow-none relative top-0 left-0 flex flex-wrap content-start rounded-lg overflow-hidden  w-[175.66px] max-w-[calc((1400px-80px-260px-(30px*4))/4)] bg-white"></div>

                        <div className="mt-7.5 p-0 max-w-full w-full h-12.5 justify-center rounded-lg flex items-center bg-[rgba(1,180,228,1)] text-black m-0 flex-wrap">
                            <div className="w-12.5 h-12.5 hidden!">
                                <div className="hidden w-full h-full relative transform -translate-y-5 ">
                                    <div className="bg-white rounded-full absolute -left-5 top-0 opacity-0 m-0 w-10 h-10"></div>
                                    <div className="bg-white rounded-full absolute -left-5 top-0 opacity-0 m-0 w-10 h-10"></div>
                                    <div className="bg-white rounded-full absolute -left-5 top-0 opacity-0 m-0 w-10 h-10"></div>
                                </div>
                            </div>
                            <p className="mb-0 justify-center w-full h-full text-center m-0 p-0 flex flex-wrap text-base ">
                                <Link href="/" className='text-2xl font-bold text-white w-full h-full [text-underline-offset:3px] justify-center flex items-center ml-1 mr-1 text-center'>Load More</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </div>
  )
}

export default MainContent
