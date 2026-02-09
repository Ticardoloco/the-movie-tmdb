"use client";
import config from "@/config";
import api from "@/services/httpService";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FilterBox = ({ text1, genresDatas }) => {
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/original";
  const [sortDropDown, setSortDropDown] = useState(false);
  const [toWatchDropDown, setToWatchDropDown] = useState(false);
  const [select, setSelect] = useState(false);
  const [filterDropDown, setFilterDropDown] = useState(true);
  const [availability, setAvailability] = useState(false);
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
  const [watchProviderDatas, setWatchProviderDatas] = useState([]);
  const getWatchProviderData = async () => {
    const watchProviderData = await api.get(
      config.subUrl.provider.watch_provider,
    );
    if (watchProviderData.status === 200) {
      setWatchProviderDatas(watchProviderData.data.results.slice(3, 36));
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getWatchProviderData();
  });
  return (
    <div>
      <div className="min-w-65 w-65 border border-[#e3e3e3] rounded-lg flex flex-wrap justify-between overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white">
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

      <div className="mt-3 in-w-65 w-65 border border-[#e3e3e3] rounded-lg flex flex-wrap justify-between overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white">
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

      <div className="mt-3 in-w-65 w-65 border border-[#e3e3e3] rounded-lg flex flex-wrap justify-between overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white">
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
              className={`transform rotate-0 ${filterDropDown ? "rotate-90" : " rotate-0"}`}
              onClick={() => setFilterDropDown(!filterDropDown)}
            />
          </span>
        </div>

        <div
          className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "block" : "hidden"}`}
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
          className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "block" : "hidden"}`}
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

        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "block" : "hidden"}`}>
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

        <div className={`w-full border-t border-t-[#eee] pt-3.5 px-4 pb-4 ${filterDropDown ? "block" : "hidden"}`}>
            <h3 className="inline-flex items-center w-full text-base font-light mb-2.5 m-0 p-0">Genres</h3>

            <ul className="-mt-2 m-0 p-0 ">
                {Array.isArray(genresDatas) && genresDatas.map((item)=>(
                    <li key={item.id} className=""></li>
                ))}
            </ul>
        </div>

      </div>
    </div>
  );
};

export default FilterBox;
