"use client";
import BackdropBox from "@/components/general/BackdropBox";
import CastBox from "@/components/general/CastBox";
import ContentScore from "@/components/tv/ContentScore";
import DataDetail from "@/components/general/DataDetail";
import MediaBox from "@/components/general/MediaBox";
import MediaTitle from "@/components/general/MediaTitle";
import MobileDetail from "@/components/general/MobileDetail";
import PosterBox from "@/components/general/PosterBox";
import RecommendBox from "@/components/general/RecommendBox";
import ReviewBox from "@/components/general/ReviewBox";
import ShortcutBar from "@/components/general/ShortcutBar";
import TitleMenu from "@/components/general/TitleMenu";
import KeyWord from "@/components/tv/KeyWord";
import SeasonBox from "@/components/tv/SeasonBox";
import SeasonTitle from "@/components/tv/SeasonTitle";
import config from "@/config";
import api from "@/services/httpService";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const size = "/w1920_and_h800_multi_faces";
  const smallSize = "/w1000_and_h450_multi_faces";
  const size1 = "/w220_and_h330_multi_faces_filter(blur)";
  const size2 = "/w220_and_h330_face";
  const size3 = "/w533_and_h300_face";
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
  const [social, setSocial] = useState("Reviews");
  const [media, setMedia] = useState("Most Popular");
  const [tvDetailDatas, setTvDetailDatas] = useState(null);
  const [contentRateDatas, setContentRateDatas] = useState([]);
  const [castDatas, setCastDatas] = useState([]);
  const [reviewDatas, setReviewDatas] = useState(null);
  const [randomReview, setRandomReview] = useState(null);
  const [videoDatas, setVideoDatas] = useState([]);
  const [backDropDatas, setBackDropDatas] = useState([]);
  const [posterDatas, setPosterDatas] = useState([]);
  const [recommendDatas, setRecommendDatas] = useState([]);
  const [keyWordDatas, setKeyWordDatas] = useState([]);
  const [contentScore, setContentScore] = useState(0);

  const getTvDetailData = async () => {
    try {
      const tvDetailData = await api.get(
        `${config.subUrl.details.tv_series}/${id}`,
      );

      if (tvDetailData.status === 200) {
        setTvDetailDatas(tvDetailData.data);
      }
    } catch (error) {
      console.error("Couldn't fetch data", error);
    }
  };

  const getContentRateData = async () => {
    try {
      const contentRateData = await api.get(
        `${config.subUrl.details.tv_series}/${id}/content_ratings`,
      );

      if (contentRateData.status === 200) {
        setContentRateDatas(contentRateData.data.results)
      }
    } catch (error) {
      console.error("Could't fetch data", error);
    }
  };

 

  const getCastData = async () => {
    try {
      const castData = await api.get(
        `${config.subUrl.details.tv_series}/${id}/aggregate_credits`,
      );
      if (castData.status === 200) {
        setCastDatas(castData.data.cast);
      }
    } catch (error) {
      console.error("Data couldn't fetch", error);
    }
  };

  const getReviewData = async () => {
    try {
      const reviewData = await api.get(
        `${config.subUrl.details.tv_series}/${id}/reviews`,
      );
      if (reviewData.status === 200) {
        setReviewDatas(reviewData.data);

        const reviews = reviewData.data.results;

        if (reviews && reviews.length > 0) {
          const randomIndex = Math.floor(Math.random() * reviews.length);
          setRandomReview(reviews[randomIndex]);
        }
      }
    } catch (error) {
      console.error("Data couldn't fetch", error);
    }
  };

  const formattedReviewDate = randomReview?.created_at
    ? new Date(randomReview.created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : null;


  const getVideoData = async () => {
    try {
      const videoData = await api.get(
        `${config.subUrl.details.tv_series}/${id}/videos`,
      );
      if (videoData.status === 200) {
        setVideoDatas(videoData.data.results);
      }
    } catch (error) {
      console.error("Data couldn't fetch", error);
    }
  };

  const getBackDropData = async () => {
    try {
      const backDropData = await api.get(
        `${config.subUrl.details.tv_series}/${id}/images`,
      );
      if (backDropData.status === 200) {
        setBackDropDatas(backDropData.data.backdrops);
      }
    } catch (error) {
      console.error("Data couldn't fetch", error);
    }
  };

  const getPosterData = async () => {
    try {
      const posterData = await api.get(
        `${config.subUrl.details.tv_series}/${id}/images`,
      );
      if (posterData.status === 200) {
        setPosterDatas(posterData.data.posters);
      }
    } catch (error) {
      console.error("Data couldn't fetch", error);
    }
  };

  const getRecommendData = async () => {
    try {
      const recommendData = await api.get(
        `${config.subUrl.details.tv_series}/${id}/recommendations`,
      );
      if (recommendData.status === 200) {
        setRecommendDatas(recommendData.data.results);
      }
    } catch (error) {
      console.error("Data couldn't fetch", error);
    }
  };

  const getKeyWordData = async () => {
    try {
      const keyWordData = await api.get(
        `${config.subUrl.details.tv_series}/${id}/keywords`,
      );
      if (keyWordData.status === 200) {
        setKeyWordDatas(keyWordData.data.results);
      }
    } catch (error) {
      console.error("Data couldn't fetch", error);
    }
  };


  const currentSeason = tvDetailDatas?.seasons.at(-1)

   const formattedSeasonDate = currentSeason?.air_date
    ? new Date(currentSeason.air_date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
    : null;

  useEffect(() => {
    getTvDetailData();
    getContentRateData();
    getCastData();
    getReviewData();
    getVideoData();
    getBackDropData();
    getPosterData();
    getRecommendData();
    getKeyWordData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
     let score = 0;

  if (tvDetailDatas?.overview) score += 20;
  if (tvDetailDatas?.poster_path) score += 15;
  if (tvDetailDatas?.backdrop_path) score += 15;
  if (tvDetailDatas?.genres?.length) score += 10;
  if (tvDetailDatas?.episode_run_time?.length > 0) score += 10;
  if (tvDetailDatas?.vote_average) score += 10;

  if (castDatas?.length > 0) score += 5;
  if (videoDatas?.length > 0) score += 5;
  if (posterDatas?.length > 0) score += 5;
  if (backDropDatas?.length > 0) score += 3;
  if (keyWordDatas?.length > 0) score += 2;

  setContentScore(score);
  }, [tvDetailDatas, castDatas, videoDatas, posterDatas, backDropDatas, keyWordDatas]);

  if (!tvDetailDatas) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full flex justify-center flex-wrap items-start bg-cover bg-no-repeat bg-position-[50%_50%] overflow-hidden">
      <ShortcutBar />
      <div
        className="hidden lg:block mt-27.5 border-b border-solid border-[rgb(220.5,220.5,220.5)] bg-position-[left_calc((50vw-170px)-340px)_top] bg-cover w-full relative z-1 bg-[linear-gradient(to_bottom_right,rgba(221,221,221,1),rgba(221,221,221,0.84))] border"
        style={{
          backgroundImage: `url(${TMDB_IMAGE_BASE}${size}${tvDetailDatas?.backdrop_path})`,
        }}
      >
        <div className="bg-[rgba(0,0,0,0.7)] flex justify-center flex-wrap ">
          <div className="py-7.5 px-10 max-w-350 w-full z-0 ">
            <DataDetail
              poster={tvDetailDatas.poster_path}
              title={tvDetailDatas.name}
              year={tvDetailDatas.first_air_date.slice(0, 4)}
              certification={contentRateDatas[0]?.rating}
              genres={tvDetailDatas.genres}
              rating={tvDetailDatas.vote_average}
              tagline={tvDetailDatas.tagline}
              overview={tvDetailDatas.overview}
            />
          </div>
        </div>
      </div>

      <div className="block lg:hidden mt-27.5 w-full relative z-1 border-b border-solid bg-[rgba(227,227,227,1)] bg-[linear-gradient(to_bottom_right,rgba(220.5,220.5,220.5,1),rgba(220.5,220.5,220.5,0.84))] ">
        <div className="bg-[linear-gradient(to_right,rgba(220.5,220.5,220.5,1)_0,rgba(220.5,220.5,220.5,0.96)_100%)] flex justify-center flex-wrap">
          <div className="bg-transparent pt-0 pb-0 pl-0 pr-0 max-w-full w-full z-0 ">
            <section className="h-auto block ">
              <div className="shadow-none min-w-screen w-screen h-auto rounded-none border-0 overflow-hidden ">
                <div className="w-full h-[calc(100vw/2.222222)] block aspect-[auto_calc(2/3)] relative top-0 left-0 rounded-md overflow-hidden">
                  <div
                    className="bg-position-[calc((((100vw/2.222222)-20px)/1.5)/2)_0] bg-cover bg-no-repeat w-full h-full "
                    style={{
                      backgroundImage: `url(${TMDB_IMAGE_BASE}${smallSize}${tvDetailDatas?.backdrop_path})`,
                    }}
                  >
                    <div className="bg-[linear-gradient(to_right,rgba(220.5,220.5,220.5,1)_20%,rgba(220.5,220.5,220.5,0)_50%)] w-full h-full absolute top-0 left-0 ">
                      <div
                        className="absolute top-5 left-5 w-[calc(((100vw/2.222222)-40px)/1.5)] min-w-[calc(((100vw/2.222222)-40px)/1.5)] h-[calc((100vw/2.222222)-40px)] min-h-[calc((100vw/2.222222)-40px)] rounded-md z-4 overflow-hidden aspect-[auto_calc(2/3)] bg-position-[0_0] bg-cover "
                        style={{
                          backgroundImage: `url(${TMDB_IMAGE_BASE}${size1}${tvDetailDatas.poster_path})`,
                        }}
                      >
                        <Image
                          fill
                          src={`${TMDB_IMAGE_BASE}${size2}${tvDetailDatas.poster_path}`}
                          alt="poster"
                          className="block w-full h-full min-w-full min-h-full border-0 outline-0 "
                        />
                      </div>
                    </div>
                    <div className="w-75 aspect-[auto_calc(2/3)] bg-[rgba(0,0,0,.7)] absolute top-0 left-0 text-center rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 [transition:linear_.2s] [backdrop-filter:blur(20px)]">
                      <Link
                        href=""
                        className="text-white w-full aspect-[auto_calc(2/3)] inline-flex items-center justify-center text-[20.8px] font-normal underline"
                      >
                        <span
                          className="mr-1.5 relative top-0 left-0 inline-flex w-4 min-w-4 h-4 min-h-4 bg-center bg-no-repeat text-inherit items-center justify-center "
                          style={{ backgroundImage: `url("/expand.svg")` }}
                        ></span>{" "}
                        Expand
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-full min-h-0 flex ">
                  <MobileDetail
                    poster={tvDetailDatas.poster_path}
                    title={tvDetailDatas.name}
                    year={tvDetailDatas.first_air_date.slice(0, 4)}
                    certification={contentRateDatas[0]?.rating}
                    genres={tvDetailDatas.genres}
                    rating={tvDetailDatas.vote_average}
                    tagline={tvDetailDatas.tagline}
                    overview={tvDetailDatas.overview}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="my-0 bg-white w-full flex justify-center min-w-full flex-wrap items-start content-start ">
        <div className="flex flex-wrap lg:flex-nowrap max-w-full lg:max-w-none items-start justify-center content-start lg:content-none min-w-full ">
          <div className="flex-wrap lg:flex-nowrap max-w-screen p-0  lg:max-w-350 w-full lg:py-7.5 lg:px-10 flex items-start content-start lg:content-none">
            <div>
              <div className="bg-white w-full lg:w-[calc(100vw-80px-268px)] max-w-screen lg:max-w-[calc(1400px-80px-268px)] h-auto min-h-0 justify-start lg:justify-normal p-0 flex flex-wrap lg:pr-7.5 ">

                <section className="border-t-none pt-0 w-screen p-5 block lg:hidden">
                  <div className="mb-0 mt-5 w-full min-h-12.5! ">
                    <span >
                      <div className="pt-0">
                        <div className="cursor-pointer max-w-[320px]! min-w-75! w-full! h-12.5! bg-[#f0f0f0]! flex! justify-between! border! border-solid! border-transparent! rounded-[5px]! m-[0_auto]! p-0! ">
                          <div className="flex! items-center! pl-2.5! ">
                            <button className="w-auto h-auto! cursor-pointer bg-[#57afd5] text-white text-sm! font-bold! border-none! py-1.25! px-2.5! rounded-[5px]! flex! items-center! shadow-[0px_3px_6px_rgba(0,0,0,0.3)] [-webkit-appearance:button] overflow-visible bg-none ">
                              <svg className="heart-beat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: "20px", height: "20px", marginRight: "10px" }}>        <path d="M6 4l15 8-15 8z" fill="#ffffff"></path>      </svg>
                              Watch Now
                            </button>
                          </div>
                          <div className="flex! flex-col! justify-center! items-end! pr-2.5!">
                            <div className="leading-[16.8px]! text-black! text-sm! font-normal! p-0! ">Severance</div>
                            <div className="leading-[14.4px]! text-black! text-[12px] font-extralight! p-0!">on Apple TV</div>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                </section>

                <section className="border-t border-solid border-t-[#d7d7d7] lg:border-t-[none]  w-screen lg:w-full block p-[20px_0] lg:p-[30px_0] ">
                  <h3 className="font-semibold text-black text-[19.2px] lg:text-[22.4px] mb-5 m-[0_0_4px] p-[0_20px] lg:p-0 leading-none ">
                    Series Cast
                  </h3>
                  <div className="relative top-0 left-0 after:[transition:linear_.3s] after:opacity-90 after:content-[''] after:w-15 after:h-full after:absolute after:top-0 after:right-0 after:bg-[linear-gradient(to_right,rgba(255,255,255,0)0,#fff_100%)] after:will-change-[opacity] after:pointer-events-none ">
                    <div className="w-[calc(100vw+10px)] lg:w-full overflow-y-hidden overflow-x-scroll custom-scroll whitespace-nowrap lg:whitespace-normal -ml-2.5 -mt-2.5 pb-0 lg:pb-2.5 relative top-0 left-0 p-0 m-0 flex ">
                      {castDatas.slice(0, 9).map((item) => (
                        <CastBox
                          key={item.id}
                          id={item.id}
                          profile={item.profile_path}
                          name={item.name}
                          character={item.roles[0].character}
                          episode={item.total_episode_count}
                        />
                      ))}
                      <div className="mr-0 ml-2.5 bg-transparent flex items-center m-0 p-0 min-w-35 w-35 ">
                        <p className="mb-0 px-2.5 flex items-center m-0 text-base overflow-hidden truncate">
                          <Link
                            href=""
                            className="flex items-center m-0 p-0 text-black font-bold underline-offset-3 "
                          >
                            View More{" "}
                            <span
                              className="relative top-0 left-0 inline-flex min-w-[17.6px] w-[17.6px] min-h-[17.6px] h-[17.6px] leading-[inherit] bg-center bg-no-repeat text-inherit items-center justify-center "
                              style={{
                                backgroundImage: `url("/right-arrow.svg")`,
                              }}
                            ></span>
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className=""></div>
                  </div>
                  <p className="mt-0 mb-0 m-[20px_0_0] inline-block text-base p-[0_20px] lg:p-0 ">
                    <Link
                      href=""
                      className="underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3 text-black font-semibold text-[17.6px] "
                    >
                      Full Cast & Crew
                    </Link>
                  </p>
                </section>

                <section className="w-full block p-[30px_0] border-t border-solid border-t-[#d7d7d7]">
                    <SeasonTitle/>
                    <SeasonBox poster={currentSeason?.poster_path} season={currentSeason?.season_number} rating={currentSeason?.vote_average} year={currentSeason?.air_date?.slice(0,4)} episode={currentSeason?.episode_count} overview={currentSeason?.overview} name={tvDetailDatas?.next_episode_to_air?.name} date={formattedSeasonDate}/>
                    

                </section>

                <section className="w-screen lg:w-full p-5 lg:p-0 block lg:py-7.5 border-t border-t-solid border-t-[#d7d7d7] ">
                  <section className="block ">
                    <TitleMenu
                      social={social}
                      setSocial={setSocial}
                      reviewTotal={reviewDatas?.total_results || 0}
                      discussionTotal={1}
                    />

                    <div className="h-auto flex w-full rounded-none lg:rounded-lg ">
                      <div className="w-full">
                        <div className="flex flex-wrap items-center w-full ">
                          <div className="w-full h-auto flex rounded-none lg:rounded-lg ">
                            <div className="w-full ">
                              <div className="w-full flex rounded-lg">
                                <div className="w-full">
                                  {social === "Reviews" && randomReview ? (
                                    <ReviewBox
                                      name={randomReview.author}
                                      avatar={
                                        randomReview.author_details.avatar_path
                                      }
                                      date={formattedReviewDate}
                                      rating={
                                        randomReview.author_details.rating
                                      }
                                      content={randomReview.content.slice(
                                        0,
                                        820,
                                      )}
                                    />
                                  ) : null}

                                  {social === "Discussions" ? (
                                    <div className="flex w-full rounded-lg ">
                                      <div className="w-full">
                                        <div>
                                          <p className="text-black text-base">
                                            Want to be notified when someone
                                            makes the first post?{" "}
                                            <Link
                                              href=""
                                              className="underline decoration-[#666]"
                                            >
                                              Yes, notify me
                                            </Link>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  ) : null}
                                </div>
                              </div>

                              <p className="mb-0 font-base m-[20px_0_0] inline-block p-0">
                                <Link
                                  href=""
                                  className="underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3 text-black font-semibold text-[17.6px]"
                                >
                                  {social === "Reviews"
                                    ? "Read All Reviews"
                                    : "Go to Discussions"}
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>

                <section className="w-screen lg:w-full block p-[20px_0] lg:p-[30px_0] border-t border-t-solid border-t-[#d7d7d7] ">
                  <MediaTitle
                    media={media}
                    setMedia={setMedia}
                    videoTotal={videoDatas.length}
                    backdropTotal={backDropDatas.length}
                    posterTotal={posterDatas.length}
                  />

                  <div className="relative top-0 left-0 lg:after:[transition:linear_.3s] lg:after:opacity-90 lg:after:content-[''] lg:after:w-15 lg:after:h-full lg:after:absolute lg:after:top-0 lg:after:right-0 lg:after:bg-[linear-gradient(to_right,rgba(255,255,255,0)0,#fff_100%)] lg:after:will-change-[opacity] lg:after:pointer-events-none">
                    <div className="flex w-full rounded-none lg:rounded-lg h-35.25 lg:h-75 overflow-x-scroll overflow-y-hidden no-scrollbar whitespace-nowrap [font-size:0] pb-2.5 ">
                      <div className="flex w-full rounded-none lg:rounded-lg h-35.25 lg:h-75 overflow-x-scroll overflow-y-hidden no-scrollbar whitespace-nowrap [font-size:0] pb-2.5 ">
                        {media === "Most Popular" &&
                          videoDatas
                            .slice(-3)
                            .reverse()
                            .map((item) => (
                              <MediaBox
                                key={item.id}
                                poster={`https://img.youtube.com/vi/${item.key}/hqdefault.jpg`}
                              />
                            ))}

                        {media === "Videos" &&
                          videoDatas
                            .slice(-5)
                            .reverse()
                            .map((item) => (
                              <MediaBox
                                key={item.id}
                                poster={`https://img.youtube.com/vi/${item.key}/hqdefault.jpg`}
                              />
                            ))}

                        {media === "Backdrops" &&
                          backDropDatas
                            .slice(0, 6)
                            .map((item, index) => (
                              <BackdropBox
                                key={index}
                                poster={`${TMDB_IMAGE_BASE}${size3}${item.file_path}`}
                              />
                            ))}

                        {media === "Posters" &&
                          posterDatas
                            .slice(0, 10)
                            .map((item, index) => (
                              <PosterBox key={index} poster={item.file_path} />
                            ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="pb-0 w-screen p-[0_20px] lg:p-0 lg:w-full block py-5 lg:py-7.5 border-t border-solid border-t-[#d7d7d7]">
                  <div>
                    <h3 className="font-semibold text-[19.2px] lg:text-[22.4px] mb-5 m-[0_0_4px] leading-none text-black">
                      Recommendations
                    </h3>
                    <div className="relative top-0 left-0 ">
                      <div className="overflow-y-hidden overflow-x-scroll w-screen lg:w-full pr-5 lg:px-0 whitespace-nowrap pb-2.5 custom-scroll">
                        {recommendDatas.length > 0 ? (
                          recommendDatas
                            .slice(0, 19)
                            .map((item) => (
                              <RecommendBox
                                key={item.id}
                                id={`/tv/${item.id}`}
                                name={item.name}
                                poster={item.poster_path}
                                date={item.first_air_date}
                                rating={item.vote_average}
                              />
                            ))
                        ) : (
                          <p className="-ml-5 text-gray-500 whitespace-break-spaces">
                            We don&apos;t have enough data to suggest any movies based on Passage of Venus. You can help by rating movies you&apos;ve seen.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="max-w-screen lg:max-w-none w-full min-w-65 lg:min-w-65 lg:w-65 h-auto min-h-0 lg:min-h-auto justify-start lg:justify-normal  flex flex-wrap">
              <div>
                <section className="flex flex-wrap w-full max-w-full lg:max-w-75 ">
                  <div className="w-full ">
                    <KeyWord status={tvDetailDatas.status}  language={tvDetailDatas.original_language} network={tvDetailDatas.networks[0].logo_path} type={tvDetailDatas.type} keyword={keyWordDatas} />
                  </div>
                  <ContentScore score={contentScore} />
                  <div className="w-full">
                    <p className="mb-0 border-[rgba(220.5,220.5,220.5,1)] bg-[rgba(220.5,220.5,220.5,1)] text-black rounded-[20px] p-[6px_20px] ml-5 lg:ml-0 text-[14.4px] inline-flex items-center mt-7.5 m-[20px_0_0] border-2 border-solid [transition:linear_.1s] ">
                      <Link href="" className="text-black w-full font-bold uppercase [text-decoration:none] inline-flex items-center underline-offset-3 text-[15.84px]">
                        <span className="mr-1.5 relative top-0 left-0 inline-flex min-w-[15.84px] w-[15.84px] min-h-[15.84px] h-[15.84px] leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center" style={{ backgroundImage: `url('/lock.svg')` }}></span>
                        Login to edit
                      </Link>
                    </p>
                  </div>
                  <div className="w-full mt-7.5 hidden lg:block">
                    <p className="mb-0 m-0 p-0 text-base ">
                      <Link href="" className="underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3 inline-flex items-center m-0 opacity-50 text-black">
                        <span className="mr-1 text-[22.4px] relative top-0 left-0 inline-flex min-w-[22.4px] w-[22.4px] min-h-[22.4px] h-[22.4px] leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center" style={{ backgroundImage: `url('/keyboard.svg')` }}></span>
                        keyboard Shortcuts
                      </Link>
                    </p>
                  </div>
                  <div className="w-full mt-5 flex items-center mb-5 lg:mb-0">
                    <p className="mb-0 m-0 flex items-center text-base ml-5 lg:ml-0  p-0 text-black">
                      <span className="mr-1 text-[22.4px] relative top-0 left-0 inline-flex min-w-[22.4px] w-[22.4px] min-h-[22.4px] h-[22.4px] leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center" style={{ backgroundImage: `url('/alert.svg')` }}></span>
                      Login to report an issue
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
