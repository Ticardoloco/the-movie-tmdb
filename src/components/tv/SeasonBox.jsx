import Image from "next/image";
import Link from "next/link";
import React from "react";

const SeasonBox = ({ id, poster, season, rating, year, episode, overview, name, date }) => {
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
  const size = "/w130_and_h195_face";
  return (
    <div className="p-[0_20px] lg:p-0 border border-solid border-[rgba(227,227,227,1)] rounded-lg overflow-hidden flex flex-wrap shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-white text-black">
      <div className="flex">
        <div className="border-r border-solid border-r-[rgba(227,227,227,1)] ">
          <Link
            href=""
            className="block w-32.5 min-w-32.5 h-48.75 text-black font-normal"
          >
            <div
              className="rounded-none border-0 w-full h-full bg-[#dbdbdb] bg-size-[50%] relative top-0 left-0 inline-flex min-w-4 min-h-4 leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center"
              style={{ backgroundImage: `url("/img-card-bg.svg")` }}
            >
              <Image
                fill
                src={`${TMDB_IMAGE_BASE}${size}${poster}`}
                alt="poster"
                className="w-full h-full outline-0 border-0 max-w-[inherit] block align-middle"
              />
            </div>
          </Link>
        </div>

        <div className="w-full p-5 flex flex-wrap items-center">
          <div>
            <h2 className="mb-0 font-semibold text-2xl m-[0_0_4px] p-0 leading-none">
              <Link href="" className="text-black font-semibold ">
                Season {season}
              </Link>
            </h2>

            <div className="items-center mt-0.5 w-full flex flex-wrap justify-start">
              <div className="flex items-start lg:items-center p-[0_8px_0_6px] font-semibold bg-[rgba(3,37,65,1)] justify-center text-white border-solid border border-[rgba(3,37,65,1)] rounded-md overflow-hidden text-[14.4px] mr-2 ">
                <span
                  className="mr-0.5 relative top-0 left-0 inline-flex min-w-[14.4px] w-[14.4px] min-h-[14.4px] h-[14.4px] leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center"
                  style={{ backgroundImage: `url('/star.svg')` }}
                ></span>
                {Math.round(rating * 10)}
                <span className="inline-flex items-start pb-px text-[10.4px]">
                  %
                </span>
              </div>

              <h4 className="inline-flex items-center mt-0.5 mb-0 p-0 m-0 leading-none">{year} • {episode} Episodes</h4>
            </div>

            <div className="pt-5">
                <p className="mb-0 leading-[1.4] text-base m-[0_0_16px] p-0">{overview}</p>
            </div>

            <div className="pt-5 flex-wrap flex ">
                <p className="flex items-center mb-0 text-base m-[0_0_16px] p-0">
                    <span className="w-[20.8px] h-[20.8px] mr-1 relative top-0 left-0 inline-flex min-w-4 min-h-4 leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center" style={{backgroundImage:`url("/date.svg")`}}></span>
                    <Link href="" className="mr-1.5 underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3 text-black">{name}</Link>
                </p>
                <span className="flex items-center flex-wrap ">
                    <span className="mr-1.5">({season}X{episode} {date})</span>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonBox;
