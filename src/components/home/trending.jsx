"use client";
import React, { useEffect, useState } from "react";
import Title from "./title";
import DataBox from "./dataBox";
import api from "@/services/httpService";
import config from "@/config";

const Trending = () => {
  const [slideTrend, setSlideTrend] = useState("Today");
  const [dropDownTrend, setDropDownTrend] = useState(false);
  const [trendingDatas, setTrendingDatas] = useState([]);
  const [trendingWeekDatas, setTrendingWeekDatas] = useState([]);

  const getTrendingData = async () => {
    const trendingData = await api.get(config.subUrl.trending.movie.day);
    if (trendingData.status === 200) {
      setTrendingDatas(trendingData.data.results);
    }
  };

  const getTrendingWeekData = async () => {
    const trendingWeekData = await api.get(config.subUrl.trending.movie.week);
    if (trendingWeekData.status === 200) {
      setTrendingWeekDatas(trendingWeekData.data.results);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getTrendingData();
    getTrendingWeekData();
  }, []);
  return (
    <div
      className="bg-position-[50%_200px] bg-size-[1400px] bg-no-repeat min-w-full max-w-350 w-full flex box-border justify-center flex-wrap items-start content-start p-0"
      style={{
        backgroundImage: `url('/trending-bg.svg')`,
      }}
    >
      <div className="w-full flex items-start justify-center min-w-full after:opacity-100 after:transition-all after:duration-300 after:ease-linear after:content-[''] after:w-10 lg:after:w-15 after:h-full after:absolute after:top-0 after:right-0 after:bg-[linear-gradient(to_right,rgba(255,255,255,0),#fff)] lg:after:bg-[linear-gradient(to_right,rgba(255,255,255,0)_0,#fff_100%)] after:will-change-opacity after:pointer-events-none">
        <div className="max-w-screen w-full py-7.5  flex items-start content-start flex-wrap mb-0! pb-0!">
          <div className="w-full">
            <Title
              text1={"Trending"}
              titleList={["Today", "This Week"]}
              slide={slideTrend}
              setSlide={setSlideTrend}
              dropDown={dropDownTrend}
              setDropDown={setDropDownTrend}
            />

            <div className="relative top-0 left-0 flex justify-center w-full min-w-full flex-wrap items-start content-start ">
              <div className="min-h-0 h-auto w-full min-w-full max-w-350 overflow-x-scroll custom-scroll overflow-y-hidden transition-[height] duration-500 ease-linear flex gap-5 justify-start items-start py-5 px-5 lg:px-10 whitespace-normal ">
                {slideTrend === "Today" &&
                  trendingDatas.map((item) => (
                    <DataBox
                      key={item.id}
                      id={`/movie/${item.id}`}
                      poster={item.poster_path}
                      title={item.title}
                      rating={item.vote_average}
                      date={item.release_date}
                    />
                  ))}

                {slideTrend === "This Week" &&
                  trendingWeekDatas.map((item) => (
                    <DataBox
                      key={item.id}
                      id={item.id}
                      poster={item.poster_path}
                      title={item.title}
                      rating={item.vote_average}
                      date={item.release_date}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
