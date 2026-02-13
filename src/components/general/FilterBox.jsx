"use client";
import config from "@/config";
import api from "@/services/httpService";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FilterBox = ({ text1, genresDatas, sortDropDown, setSortDropDown, toWatchDropDown, setToWatchDropDown, select, setSelect, selectAdult, setSelectAdult, selectLanguage, setSelectLanguage, filterDropDown, setFilterDropDown, availability, setAvailability, stream, setStream, free, setFree, ads, setAds, rent, setRent, buy, setBuy, searchRelease, setSearchRelease, searchCountry, setSearchCountry, theatricalLimited, setTheatricalLimited, theatrical, setTheatrical, premiere, setPremiere, digital, setDigital, physical, setPhysical, tv, setTv, selectedSort, setSelectedSort, adultContent, setAdultContent, language, setlanguage }) => {
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/original";
  
  const [watchProviderDatas, setWatchProviderDatas] = useState([]);
  const [languageDatas, setLanguageDatas] = useState([])
  const getWatchProviderData = async () => {
    const watchProviderData = await api.get(
      config.subUrl.provider.watch_provider,
    );
    if (watchProviderData.status === 200) {
      setWatchProviderDatas(watchProviderData.data.results.slice(3, 36));
    }
  };

  const getLanguageData = async ()=>{
    const languageData = await api.get(config.subUrl.configuration.Language);
    if (languageData.status === 200) {
      setLanguageDatas(languageData.data)
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getWatchProviderData();
    getLanguageData()
  },[]);
  return (
    <div className="lg:w-auto w-full">
      <div className="min-w-full lg:min-w-65 w-full lg:w-65 border border-[#e3e3e3] rounded-lg flex flex-wrap justify-between overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white">
        <div className="w-full flex justify-between flex-nowrap items-center py-3.5 px-4">
          <h2 className="inline-flex text-[17.6px] justify-between pr-2.5 w-full p-0 m-0 font-semibold ">
            Sort
          </h2>
          <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leadind-[inherit] items-center justify-center cursor-pointer ">
            <Image
              width={16}
              height={16}
              src="/dropdown.svg"
              alt="dropdown"
              className={`transform rotate-0 ${sortDropDown ? "rotate-90" : " rotate-0"}`}
              onClick={() => setSortDropDown(!sortDropDown)}
            />
          </span>
        </div>
        <div
          className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${sortDropDown ? "block" : "hidden"}`}
        >
          <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">
            Sort results by
          </h3>
          <span className="text-[14.4px] w-full text-[#212529] bg-white border-[rgba(33,37,41,0.2)] leading-normal cursor-pointer m-0 p-0 min-w-0 border font-normal text-start shadow-none items-stretch relative overflow-hidden truncate appearance-none outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md ">
            <span className="py-1.5 px-3 whitespace-nowrap flex flex-row flex-nowrap items-center w-full border-0 outline-0 text-inherit font-[inherit] grow shrink basis-[0%] relative z-1 overflow-hidden truncate appearance-none m-0 cursor-pointer ">
              <span className="grow shrink basis-[0%] overflow-hidden truncate whitespace-nowrap text-inherit font-[inherit] text-sm cursor-pointer text-start ">
                {selectedSort}
              </span>
            </span>
            <button className="py-1.5 px-1.5 text-inherit bg-[0_0] border-transparent p-1.5 w-auto border-0 [border-inline-start-width:1px] flex-none aspect-auto shadow-none m-0 text-base gap-0 leading-normal border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center align-middle select-none  cursor-pointer outline-0 appearance-none relative transition-colors duration-200 ease-in-out overflow-visible">
              <span
                onClick={() => setSelect(!select)}
                className="min-h-4 inline-flex items-center justify-center min-w-auto! text-inherit self-center relative w-4 h-4 outline-0 leading-none flex-row flex-nowrap align-middle "
              >
                <svg
                  viewBox="0 0 512 512"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 352 128 160h256z"></path>
                </svg>
              </span>
            </button>
            <select
              value={selectedSort}
              onChange={(e) => {
                setSelectedSort(e.target.value);
                setSelect(false);
              }}
              name="sort_by"
              className={`text-[13px] w-full m-0 text-inherit leading-[inherit] ${select ? "block" : "hidden"}`}
            >
              <option value="Popular Descending">Popular Descending</option>
              <option value="Popular Ascending">Popular Ascending</option>
              <option value="Rating Descending">Rating Descending</option>
              <option value="Rating Ascending">Rating Ascending</option>
              <option value="Released Date Descending">
                Released Date Descending
              </option>
              <option value="Released Date Ascending">
                Released Date Ascending
              </option>
              <option value="Title (A-Z)">Title (A-Z)</option>
              <option value="Title (Z-A)">Title (Z-A)</option>
            </select>
          </span>
        </div>
      </div>

      <div className="mt-3 min-w-full lg:min-w-65 w-full lg:w-65 border border-[#e3e3e3] rounded-lg flex flex-wrap justify-between overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white">
        <div className="w-full flex justify-between flex-nowrap items-center py-3.5 px-4">
          <h2 className="inline-flex text-[17.6px] justify-between pr-2.5 w-full p-0 m-0 font-semibold ">
            Where To Watch{" "}
            <span className="bg-[rgba(0,0,0,0.08)] rounded-lg inline-flex items-center px-2.5 text-[14.8px] font-light">
              {text1}
            </span>
          </h2>
          <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leadind-[inherit] items-center justify-center cursor-pointer ">
            <Image
              width={16}
              height={16}
              src="/dropdown.svg"
              alt="dropdown"
              className={`transform rotate-0 ${toWatchDropDown ? "rotate-90" : " rotate-0"}`}
              onClick={() => setToWatchDropDown(!toWatchDropDown)}
            />
          </span>
        </div>
        <div
          className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${toWatchDropDown ? "block" : "hidden"}`}
        >
          <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">
            My Service{" "}
            <Link
              className="inline-flex items-center text-black font-semibold text-base"
              href="/"
            >
              <span className="ml-1.5 opacity-[0.4] font-normal relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leadind-[inherit] items-center justify-center cursor-pointer ">
                <Image
                  width={16}
                  height={16}
                  src="/glyphicon.svg"
                  alt="glyphicon"
                />
              </span>
            </Link>
          </h3>
          <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              className="p-0 w-4 h-4 border-[rgba(33,37,41,0.2)] bg-white m-0 leading-[initial] border outline-0 bg-center bg-no-repeat bg-contain inline-block flex-none align-middle relative cursor-pointer appearance-none before:content-[''] before:block before:w-full before:h-full before:mask-no-repeat"
            />
            <label className="inline ml-2 items-center m-0 p-0 cursor-pointer align-middle relative leading-none">
              Restrict searches to my subscribed services?
            </label>
          </label>
        </div>

        <div
          className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${toWatchDropDown ? "block" : "hidden"}`}
        >
          <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">
            Country
          </h3>
          <span className="text-[14.4px] w-full text-[#212529] bg-white border-[rgba(33,37,41,0.2)] leading-normal cursor-pointer m-0 p-0 min-w-0 border font-normal text-start shadow-none items-stretch relative overflow-hidden truncate appearance-none outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md">
            <span className="py-1.5 px-3 whitespace-nowrap flex flex-row flex-nowrap items-center w-full border-0 outline-0 text-inherit font-[inherit] grow shrink basis-[0%] relative z-1 overflow-hidden truncate appearance-none m-0 cursor-pointer">
              <span className="grow shrink basis-[0%] overflow-hidden truncate whitespace-nowrap text-inherit font-[inherit] text-sm cursor-pointer text-start before:content-[''] before:w-0 before:overflow-hidden before:inline-block before:align-top">
                <span className="inline-block align-middle w-6 h-6 mr-1.25 ">
                  <Image
                    width={24}
                    height={24}
                    src={`/country.png`}
                    alt="country"
                  />
                </span>
                <span>Nigeria</span>
              </span>
            </span>
            <button className="py-1.5 px-1.5 text-inherit bg-[0_0] border-transparent p-1.5 w-auto border-0 [border-inline-start-width:1px] flex-none aspect-auto shadow-none m-0 text-base gap-0 leading-normal border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center align-middle select-none  cursor-pointer outline-0 appearance-none relative transition-colors duration-200 ease-in-out overflow-visible">
              <span className="min-h-4 inline-flex items-center justify-center min-w-auto! text-inherit self-center relative w-4 h-4 outline-0 leading-none flex-row flex-nowrap align-middle">
                <svg
                  viewBox="0 0 512 512"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 352 128 160h256z"></path>
                </svg>
              </span>
            </button>
            <div className="w-full hidden text-[13px] m-0 text-[#212529] leading-normal cursor-pointer font-normal text-start "></div>
          </span>
          <span className="flex ">
            <ul className="mb-0 gap-y-1.5 my-3.5 flex flex-wrap justify-between gap-x-1.5 ">
              {watchProviderDatas.map((item) => (
                <li key={item.provider_id} className="inline-flex w-12.5 ">
                  <Link
                    className="text-black block leading-0 w-12.5 h-12.5 "
                    href="/"
                  >
                    <Image
                      width={50}
                      height={50}
                      src={`${TMDB_IMAGE_BASE}${item.logo_path}`}
                      alt="logo"
                      className="relative  top-0 left-0 rounded-lg w-12.5 h-12.5 outline-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </span>
        </div>
      </div>

      <div className="mt-3 min-w-full lg:min-w-65 w-full lg:w-65 border border-[#e3e3e3] rounded-lg flex flex-wrap justify-between overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white">
        <div className="w-full flex justify-between flex-nowrap items-center py-3.5 px-4">
          <h2 className="inline-flex text-[17.6px] justify-between pr-2.5 w-full p-0 m-0 font-semibold">
            Filters
          </h2>
          <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leadind-[inherit] items-center justify-center cursor-pointer ">
            <Image
              width={16}
              height={16}
              src="/dropdown.svg"
              alt="dropdown"
              className={`transform rotate-0 ${filterDropDown ? "rotate-0 lg:rotate-90" : " rotate-90 lg:rotate-0"}`}
              onClick={() => setFilterDropDown(!filterDropDown)}
            />
          </span>
        </div>

        <div
          className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "hidden lg:block" : "block lg:hidden"}`}
        >
          <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">
            Show Me
          </h3>
          <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="radio"
              value="everything"
              className="border-[#01b3e4] text-white bg-[#01b3e4] w-4 h-4 rounded-[50%] border border-solid outline-0 flex items-center justify-center align-middle relative cursor-pointer appearance-none before:content-[''] before:block before:w-[50%] before:h-[50%] before:bg-white before:rounded-full"
            />
            <label className="inline ml-2 items-start m-0 p-0 cursor-pointer align-middle relative leading-none">
              Everything
            </label>
          </label>

          <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="radio"
              value="unwatched"
              className="border-[rgba(33,37,41,0.2)] text-white bg-white w-4 h-4 rounded-[50%] border border-solid outline-0 flex items-center justify-center align-middle relative cursor-pointer appearance-none"
            />
            <label className="inline ml-2 items-start m-0 p-0 cursor-pointer align-middle relative leading-none">
              Movie I Haven&apos;t seen
            </label>
          </label>

          <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="radio"
              value="watched"
              className="border-[rgba(33,37,41,0.2)] text-white bg-white w-4 h-4 rounded-[50%] border border-solid outline-0 flex items-center justify-center align-middle relative cursor-pointer appearance-none"
            />
            <label className="inline ml-2 items-start m-0 p-0 cursor-pointer align-middle relative leading-none">
              Movie I Have seen
            </label>
          </label>
        </div>

        <div
          className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "hidden lg:block" : "block lg:hidden"}`}
        >
          <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">
            Availability
          </h3>
          <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={availability}
              onChange={() => setAvailability(!availability)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${availability ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {availability && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Search All Availabilities?
            </label>
          </label>
          <div className={`mt-1.5 % ${availability?"hidden":"block"}`}>
            <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={stream}
              onChange={() => setStream(!stream)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${stream ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {stream && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Stream
            </label>
          </label>

          
            <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={free}
              onChange={() => setFree(!free)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${free ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {free && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Free
            </label>
          </label>

            <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={ads}
              onChange={() => setAds(!ads)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${ads ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {ads && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Ads
            </label>
          </label>

            <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={rent}
              onChange={() => setRent(!rent)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${rent ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {rent && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Rent
            </label>
          </label>

            <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={buy}
              onChange={() => setBuy(!buy)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${buy ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {buy && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Buy
            </label>
          </label>


          </div>
        </div>

        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "hidden lg:block" : "block lg:hidden"}`}>
        <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">Released Date</h3>

         <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={searchRelease}
              onChange={() => setSearchRelease(!searchRelease)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${searchRelease ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {searchRelease && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Search all releases?
            </label>
          </label>

          <div className={`mt-1.5 ${searchRelease?"block":"hidden"}`}>
           <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={searchCountry}
              onChange={() => setSearchCountry(!searchCountry)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${searchCountry ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {searchCountry && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Search all countries?
            </label>
          </label>

          <div className={` my-1.5 ${searchCountry?"block":"hidden"}`}>
             <span className="text-[14.4px] w-full text-[#212529] bg-white border-[rgba(33,37,41,0.2)] leading-normal cursor-pointer m-0 p-0 min-w-0 border font-normal text-start shadow-none items-stretch relative overflow-hidden truncate appearance-none outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md">
            <span className="py-1.5 px-3 whitespace-nowrap flex flex-row flex-nowrap items-center w-full border-0 outline-0 text-inherit font-[inherit] grow shrink basis-[0%] relative z-1 overflow-hidden truncate appearance-none m-0 cursor-pointer">
              <span className="grow shrink basis-[0%] overflow-hidden truncate whitespace-nowrap text-inherit font-[inherit] text-sm cursor-pointer text-start before:content-[''] before:w-0 before:overflow-hidden before:inline-block before:align-top">
                <span className="inline-block align-middle w-6 h-6 mr-1.25 ">
                  <Image
                    width={24}
                    height={24}
                    src={`/country.png`}
                    alt="country"
                  />
                </span>
                <span>Nigeria</span>
              </span>
            </span>
            <button className="py-1.5 px-1.5 text-inherit bg-[0_0] border-transparent p-1.5 w-auto border-0 [border-inline-start-width:1px] flex-none aspect-auto shadow-none m-0 text-base gap-0 leading-normal border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center align-middle select-none  cursor-pointer outline-0 appearance-none relative transition-colors duration-200 ease-in-out overflow-visible">
              <span className="min-h-4 inline-flex items-center justify-center min-w-auto! text-inherit self-center relative w-4 h-4 outline-0 leading-none flex-row flex-nowrap align-middle">
                <svg
                  viewBox="0 0 512 512"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 352 128 160h256z"></path>
                </svg>
              </span>
            </button>
            <div className="w-full hidden text-[13px] m-0 text-[#212529] leading-normal cursor-pointer font-normal text-start "></div>
          </span>
          </div>
            
            <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={theatricalLimited}
              onChange={() => setTheatricalLimited(!theatricalLimited)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${theatricalLimited ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {theatricalLimited && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Theatrical (limited)
            </label>
          </label>

          <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={theatrical}
              onChange={() => setTheatrical(!theatrical)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${theatrical ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {theatrical && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Theatrical
            </label>
          </label>

          <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={premiere}
              onChange={() => setPremiere(!premiere)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${premiere ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {premiere && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Premiere
            </label>
          </label>

          <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={digital}
              onChange={() => setDigital(!digital)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${digital ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {digital && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Digital
            </label>
          </label>

          <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={physical}
              onChange={() => setPhysical(!physical)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${physical ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {physical && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              Physical
            </label>
          </label>

          <label className="inline-flex items-center w-full mb-[unset]">
            <input
              type="checkbox"
              checked={tv}
              onChange={() => setTv(!tv)}
              className="sr-only"
            />

            <span
              className={`w-4 h-4 border border-[rgba(33,37,41,0.2)] flex items-center justify-center
      ${tv ? "bg-[#01b3e4]" : "bg-white"}`}
            >
              {tv && (
                <svg
                  viewBox="0 0 20 20"
                  className="w-3 h-3 text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 10l3 3l6-6" />
                </svg>
              )}
            </span>

            <label className="inline ml-2 items-center aling-middle relative cursor-pointer">
              TV
            </label>
          </label>



          </div>

          <div className="flex justify-between mt-2 ">
            <span className="w-25 text-[#a4a4a4] inline-flex items-center text-[14.4px] ">from</span>
            <span className="w-full text-[14.4px] border-[rgba(33,37,41,0.2)] text-[#212529] bg-white leading-normal m-0 p-0 min-w-0 border border-solid font-normal text-start shadow-none items-stretch relative overflow-hidden truncate appearance-none outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md">
            <input type="text" className="text-[12.96px] py-1.5 px-3 w-full border-0 outline-0 text-inherit font-[inherit] flex-1 relative z-1 truncate appearance-none m-0" />
            <button className="py-1.5 px-1.5 w-auto border-0 border-l flex-none aspect-auto shadow-none m-0 border-[#dee2e6] text-[#212529] bg-[#dee2e6] bg-none text-[16px] leading-normal gap-0 border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center align-center select-none cursor-pointer outline-0 appearance-none relative  ">
                <span className="min-h-4 inline-flex items-center justify-center min-w-auto! text-inherit self-center relative w-4 h-4 outline-0 leading-none flex-row flex-nowrap align-middle text-base font-normal whitespace-nowrap select-none cursor-pointer">
                <svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z"></path></svg>
                </span>
            </button>
            </span>
          </div>

          <div className="flex justify-between mt-2 ">
            <span className="w-25 text-[#a4a4a4] inline-flex items-center text-[14.4px] ">to</span>
            <span className="w-full text-[14.4px] border-[rgba(33,37,41,0.2)] text-[#212529] bg-white leading-normal m-0 p-0 min-w-0 border border-solid font-normal text-start shadow-none items-stretch relative overflow-hidden truncate appearance-none outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md">
            <input type="text" className="text-[12.96px] py-1.5 px-3 w-full border-0 outline-0 text-inherit font-[inherit] flex-1 relative z-1 truncate appearance-none m-0" />
            <button className="py-1.5 px-1.5 w-auto border-0 border-l flex-none aspect-auto shadow-none m-0 border-[#dee2e6] text-[#212529] bg-[#dee2e6] bg-none text-[16px] leading-normal gap-0 border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center align-center select-none cursor-pointer outline-0 appearance-none relative  ">
                <span className="min-h-4 inline-flex items-center justify-center min-w-auto! text-inherit self-center relative w-4 h-4 outline-0 leading-none flex-row flex-nowrap align-middle text-base font-normal whitespace-nowrap select-none cursor-pointer">
                <svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z"></path></svg>
                </span>
            </button>
            </span>
          </div>
          

        </div>

        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "hidden lg:block" : "block lg:hidden"}`}>
            <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">Genres</h3>

            <ul className="-mt-2 m-0 p-0 ">
                {Array.isArray(genresDatas) && genresDatas.map((item)=>(
                    <li key={item.id} className="inline-flex border border-solid border-[#9e9e9e] rounded-[14px] py-1 px-3 text-[14.4px] mr-1.5 mt-2 ">
                        <Link href="/" className="text-black text-[12.96px] ">{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>

        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "hidden lg:block" : "block lg:hidden"}`}>
          <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">Certification</h3>
          <ul className="-mt-2 m-0 p-0"></ul>
        </div>

        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "hidden lg:block" : "block lg:hidden"}`}>
            <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">Adult Content</h3>

            <span className="text-[14.4px] w-full text-[#212529] bg-white border-[rgba(33,37,41,0.2)] leading-normal cursor-pointer m-0 p-0 min-w-0 border font-normal text-start shadow-none items-stretch relative overflow-hidden truncate appearance-none outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md ">
            <span className="py-1.5 px-3 whitespace-nowrap flex flex-row flex-nowrap items-center w-full border-0 outline-0 text-inherit font-[inherit] grow shrink basis-[0%] relative z-1 overflow-hidden truncate appearance-none m-0 cursor-pointer ">
              <span className="grow shrink basis-[0%] overflow-hidden truncate whitespace-nowrap text-inherit font-[inherit] text-sm cursor-pointer text-start ">
                {adultContent}
              </span>
            </span>
            <button className="py-1.5 px-1.5 text-inherit bg-[0_0] border-transparent p-1.5 w-auto border-0 [border-inline-start-width:1px] flex-none aspect-auto shadow-none m-0 text-base gap-0 leading-normal border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center align-middle select-none  cursor-pointer outline-0 appearance-none relative transition-colors duration-200 ease-in-out overflow-visible">
              <span
                onClick={() => setSelectAdult(!selectAdult)}
                className="min-h-4 inline-flex items-center justify-center min-w-auto! text-inherit self-center relative w-4 h-4 outline-0 leading-none flex-row flex-nowrap align-middle "
              >
                <svg
                  viewBox="0 0 512 512"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 352 128 160h256z"></path>
                </svg>
              </span>
            </button>
            <select
              value={selectedSort}
              onChange={(e) => {
                setAdultContent(e.target.value);
                setSelectAdult(false);
              }}
              name="sort_by"
              className={`text-[13px] w-full m-0 text-inherit leading-[inherit] ${selectAdult ? "block" : "hidden"}`}
            >
              <option value="Exclude adult">Exclude adult</option>
              <option value="Incude adult">Incude adult</option>
            </select>
          </span>
        </div>

        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "hidden lg:block" : "block lg:hidden"}`}>
          <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">Language <span className="ml-1.5 opacity-[0.4] font-normal inline-flex items-center relative top-0 left-0 min-w-4 w-4 min-h-4 h-4 justify-center">
            <Image
            width={16}
            height={16}
            src="/qmark.svg"
            alt="qmark"
            />
            </span></h3>
               <span className="text-[14.4px] w-full text-[#212529] bg-white border-[rgba(33,37,41,0.2)] leading-normal cursor-pointer m-0 p-0 min-w-0 border font-normal text-start shadow-none items-stretch relative overflow-hidden truncate appearance-none outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md ">
            <span className="py-1.5 px-3 whitespace-nowrap flex flex-row flex-nowrap items-center w-full border-0 outline-0 text-inherit font-[inherit] grow shrink basis-[0%] relative z-1 overflow-hidden truncate appearance-none m-0 cursor-pointer ">
              <span className="grow shrink basis-[0%] overflow-hidden truncate whitespace-nowrap text-inherit font-[inherit] text-sm cursor-pointer text-start ">
                {language}
              </span>
            </span>
            <button className="py-1.5 px-1.5 text-inherit bg-[0_0] border-transparent p-1.5 w-auto border-0 [border-inline-start-width:1px] flex-none aspect-auto shadow-none m-0 text-base gap-0 leading-normal border-solid font-normal text-center whitespace-nowrap inline-flex items-center justify-center align-middle select-none  cursor-pointer outline-0 appearance-none relative transition-colors duration-200 ease-in-out overflow-visible">
              <span
                onClick={() => setSelectLanguage(!selectLanguage)}
                className="min-h-4 inline-flex items-center justify-center min-w-auto! text-inherit self-center relative w-4 h-4 outline-0 leading-none flex-row flex-nowrap align-middle "
              >
                <svg
                  viewBox="0 0 512 512"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 352 128 160h256z"></path>
                </svg>
              </span>
            </button>
            <select
              value={language}
              onChange={(e) => {
                setlanguage(e.target.value);
                setSelectLanguage(false);
              }}
              name="sort_by"
              className={`text-[13px] w-full m-0 text-inherit leading-[inherit] ${selectLanguage ? "block" : "hidden"}`}
            >
              {languageDatas.map((item)=>(
                <option key={item.iso_639_1} value={`${item.english_name}`}>{item.english_name}</option>
              ))}
              
            </select>
          </span>

        </div>

        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "hidden lg:block" : "block lg:hidden"}`}>
          <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">User Score</h3>
          <div className="pb-4 w-full text-[#212529] flex-row flex-nowrap h-fit gap-2 border-0 outline-0 text-base leading-normal bg-[0_0] inline-flex items-center relative ">
            <div className="h-6.5 grow shrink basis-auto flex relative touch-none text-[#212529]">
              <ul className="m-0 p-0 grow shrink basis-full flex justify-between select-none border-0 outline-0 ">
                <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">0</span>
                </li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>
              
                 <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">5</span>
                </li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>
                
                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">10</span>
                </li>

              </ul>

              <div className="w-full bg-[rgba(33,37,41,0.34)] rounded-md h-2 start-0 -mt-[calc(0.8px/2)] top-1/2 -translate-y-1/2 cursor-pointer m-0 p-0 absolute text-[#212529]">
                <div className="w-56.5 -left-px start-0 bg-[#01b3e4] rounded-md h-2 -mt-[calc(0.8px/2)]"></div>
                <span className="-left-2 top-1/2 -translate-y-1/2 absolute border-[#01b3e4] text-white rounded-full bg-[#01b3e4] bg-no-repeat border-solid border outline-0 text-center w-4 h-4"></span>

                <span className="left-55 top-1/2 -translate-y-1/2 absolute border-[#01b3e4] text-white rounded-full bg-[#01b3e4] bg-no-repeat border-solid border outline-0 text-center w-4 h-4"></span>
              </div>
              <div className="hidden pb-4 w-full text-[#212529] ">
                <input type="text" className="leading-normal text-inherit font-[inherit] m-0 " />
                <input type="text" className="leading-normal text-inherit font-[inherit] m-0 " />
              </div>
            </div>
          </div>
        </div>

        
        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "hidden lg:block" : "block lg:hidden"}`}>
          <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">Minimum User Votes</h3>
          <div className="pb-4 w-full text-[#212529] flex-row flex-nowrap h-fit gap-2 border-0 outline-0 text-base leading-normal bg-[0_0] inline-flex items-center relative ">
            <div className="h-6.5 grow shrink basis-auto flex relative touch-none text-[#212529]">
              <ul className="m-0 p-0 grow shrink basis-full flex justify-between select-none border-0 outline-0 ">
                <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">0</span>
                </li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">100</span>
                </li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                 <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">200</span>
                </li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                 <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">300</span>
                </li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>
                
                 <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">400</span>
                </li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">500</span>
                </li>

              </ul>

              <div className="w-full bg-[rgba(33,37,41,0.34)] rounded-md h-2 start-0 -mt-[calc(0.8px/2)] top-1/2 -translate-y-1/2 cursor-pointer m-0 p-0 absolute text-[#212529]">
                <div className="w-56.5 hidden -left-px start-0 bg-[#01b3e4] rounded-md h-2 -mt-[calc(0.8px/2)]"></div>
                <span className="-left-2 top-1/2 -translate-y-1/2 absolute border-[#01b3e4] text-white rounded-full bg-[#01b3e4] bg-no-repeat border-solid border outline-0 text-center w-4 h-4"></span>

                <span className="left-55 hidden top-1/2 -translate-y-1/2 absolute border-[#01b3e4] text-white rounded-full bg-[#01b3e4] bg-no-repeat border-solid border outline-0 text-center w-4 h-4"></span>
              </div>
              <div className="hidden pb-4 w-full text-[#212529] ">
                <input type="text" className="leading-normal text-inherit font-[inherit] m-0 " />
                <input type="text" className="leading-normal text-inherit font-[inherit] m-0 " />
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "hidden lg:block" : "block lg:hidden"}`}>
          <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">Runtime</h3>
          <div className="pb-4 w-full text-[#212529] flex-row flex-nowrap h-fit gap-2 border-0 outline-0 text-base leading-normal bg-[0_0] inline-flex items-center relative ">
            <div className="h-6.5 grow shrink basis-auto flex relative touch-none text-[#212529]">
              <ul className="m-0 p-0 grow shrink basis-full flex justify-between select-none border-0 outline-0 ">
                <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">0</span>
                </li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>
              
                 <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">120</span>
                </li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>
                
                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">240</span>
                </li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

               <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

               <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

               <li className="bg-position-[0_-2px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}>
                  <span className="start-0 text-[#b7b7b7] bottom-[-1.2em] transform -translate-x-[50%] w-auto text-[14.72px] leading-none whitespace-nowrap absolute cursor-pointer">360</span>
                </li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>

                <li className="bg-position-[center_-92px] grow-0 shrink-0 basis-px bg-transparent bg-no-repeat m-0 p-0 relative cursor-pointer  " style={{backgroundImage:`url('/ver-line.gif')`}}></li>
 
              </ul>

              <div className="w-full bg-[rgba(33,37,41,0.34)] rounded-md h-2 start-0 -mt-[calc(0.8px/2)] top-1/2 -translate-y-1/2 cursor-pointer m-0 p-0 absolute text-[#212529]">
                <div className="w-56.5 -left-px start-0 bg-[#01b3e4] rounded-md h-2 -mt-[calc(0.8px/2)]"></div>
                <span className="-left-2 top-1/2 -translate-y-1/2 absolute border-[#01b3e4] text-white rounded-full bg-[#01b3e4] bg-no-repeat border-solid border outline-0 text-center w-4 h-4"></span>

                <span className="left-55 top-1/2 -translate-y-1/2 absolute border-[#01b3e4] text-white rounded-full bg-[#01b3e4] bg-no-repeat border-solid border outline-0 text-center w-4 h-4"></span>
              </div>
              <div className="hidden pb-4 w-full text-[#212529] ">
                <input type="text" className="leading-normal text-inherit font-[inherit] m-0 " />
                <input type="text" className="leading-normal text-inherit font-[inherit] m-0 " />
              </div>
            </div>
          </div>
        </div>


        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "hidden lg:block" : "block lg:hidden"}`}>
          <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">Keywords</h3>
          <span className="text-[14.4px] w-full h-9.5 border-[rgba(33,37,41,0.2)] text-[#212529] bg-white leading-normal m-0 p-0 min-w-0 border border-solid font-[inherit] font-normal text-start shadow-none items-stretch relative overflow-hidden truncate appearance-none outline-0 inline-flex flex-row flex-nowrap align-middle rounded-md ">
            <select  className="hidden text-[12.98px] w-full m-0 "></select>
            <div className="p-0.75 gap-0.75 cursor-text min-w-0 w-full flex flex-row flex-wrap items-center m-0 ">
              <div className="contents min-w-0 items-center relative "></div>
              <input type="text" placeholder="Filter by keywords..." className="-m-0.75 py-1.5 px-3 w-full border-0 outline-0 text-inherit bg-[0_0] flex-1 relative z-1 truncate appearance-none " />
            </div>

            <span className="py-1.5 px-1.5 outline-0 flex-none self-center items-center cursor-pointer opacity-[0.5] m-0 hidden! ">
              <span className="w-4 h-4 outline-0 leading-none justify-center inline-flex flex-row flex-nowrap items-center align-middle relative cursor-pointer ">
                <svg viewBox="0 0 512 512" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z"></path></svg>
              </span>
            </span>
            <span className="text-[14.4px] font-stretch-100% font-normal tracking-[normal] leading-[21.6px] absolute invisible -top-833.25 -left-833.25 m-0"></span>
          </span>
        </div>
        

      </div>

      <div className="bg-[rgba(228,228,228,.7)] backdrop-blur-[10px] w-full mt-5 flex justify-center items-center rounded-[20px] h-11 ">
        <div className="hidden! ">
          <div className="relative transform -translate-y-5 ">
            <div className="bg-white absolute rounded-full -left-5 top-0 opacity-0 m-0 w-10 h-10 "></div>
            <div className="bg-white absolute rounded-full -left-5 top-0 opacity-0 m-0 w-10 h-10 "></div>
            <div className="bg-white absolute rounded-full -left-5 top-0 opacity-0 m-0 w-10 h-10 "></div>
          </div>
        </div>
        <p className="inline-flex items-center w-full h-full m-0 p-0 text-base ">
          <Link href="/" className="text-[rgba(0,0,0,.5)] inline-flex items-center text-[19.2px] leading-none font-semibold w-full h-full justify-center underline-offset-[3px]">Search</Link>
        </p>
      </div>
    </div>
  );
};

export default FilterBox;
