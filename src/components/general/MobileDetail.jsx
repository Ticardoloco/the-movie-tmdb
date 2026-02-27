import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileDetail = ({
  title,
  year,
  certification,
  date,
  country,
  genres,
  runtime,
  rating,
  play,
  tagline,
  overview,
}) => {
  return (
    <div className="w-full relative bottom-0 top-0 float-none pl-0 items-start flex flex-wrap content-center ">
      <div className="bg-[rgba(220.5,220.5,220.5,1)] relative top-0 left-0 mb-0 w-full flex flex-wrap ">
        <div className="w-full flex justify-center items-center flex-wrap p-[16px_20px] z-4 ">
          <div className="p-0 ">
            <Link href="" className="text-center text-black ">
              <h2 className="text-[calc(.7em+3vw)] w-full inline-block m-0 p-0 font-semibold leading-none ">
                {title}{" "}
                <span className="opacity-80 font-normal text-[22.112px] ml-0 ">
                  ({year})
                </span>
              </h2>
            </Link>
          </div>
        </div>
        <div className="min-h-0 p-[0_20px_16px] items-center w-full flex justify-around ">
          <div className="justify-center  items-center flex">
            <div>
              <div className="w-auto h-auto flex items-center [transition:transform.2s] transform-[scale(1)] ">
                <div className="flex w-12.5 h-12.5 rounded-full items-center justify-center  mr-2.5 bg-[#081c22]">
                  <div
                    className={`relative rounded-full flex items-center justify-center w-11.5 h-11.5 text-center ${Math.round(rating * 10) > 70 ? "bg-green-500" : "bg-yellow-500"}`}
                  >
                    <div className="w-10.5 h-10.5 relative rounded-full flex bg-[#081c22] items-center justify-center ">
                      <span className="text-white [speak:none] not-italic [font-variant:normal] font-semibold leading-none [-webkit-font-smoothing:antialiased] after:content-['*'] ">
                        {Math.round(rating * 10)}
                      </span>
                    </div>
                    <canvas className="bg-transparent absolute top-0 left-0 inline-block align-baseline w-15 h-15"></canvas>
                  </div>
                </div>
              </div>
            </div>

            <div className="font-bold text-black">User Score</div>
            {Math.round(rating * 10) > 70 ? (
              <ul className="ml-4 flex items-center justify-between ">
                <li className="ml-0! bg-[rgba(220.5,220.5,220.5,1)] flex items-center justify-center cursor-pointer rounded-[9999px] transition duration-150 w-9 h-9 mr-0! hover:scale-120 ">
                  <Image
                    width={28}
                    height={28}
                    src="/emoji1.svg"
                    alt="emoji"
                    className="w-7 h-7 "
                  />
                </li>

                <li className="-ml-3! bg-[rgba(220.5,220.5,220.5,1)] flex items-center justify-center cursor-pointer rounded-[9999px] transition duration-150 w-9 h-9 mr-0! hover:scale-120 ">
                  <Image
                    width={28}
                    height={28}
                    src="/emoji2.svg"
                    alt="emoji"
                    className="w-7 h-7 "
                  />
                </li>

                <li className="-ml-3! bg-[rgba(220.5,220.5,220.5,1)] flex items-center justify-center cursor-pointer rounded-[9999px] transition duration-150 w-9 h-9 mr-0! hover:scale-120 ">
                  <Image
                    width={28}
                    height={28}
                    src="/emoji3.svg"
                    alt="emoji"
                    className="w-7 h-7 "
                  />
                </li>
              </ul>
            ) : null}
          </div>

          <div className="w-px h-6 inline-block border-l border-solid  border-l-[rgba(255,255,255,.3)] mt-1 ml-2 mr-2 "></div>
          <div className="duration-150 font-bold justify-center items-center cursor-pointer transform flex ">
            <div className="whitespace-nowrap items-center flex-wrap flex text-black  ">
              What&apos;s your{" "}
              <span className="underline-offset-2 decoration-2 decoration-[#01b4e4] underline pl-1 flex ">
                Vibe
              </span>
              ?{" "}
              <span
                className=" relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-[inherit] bg-center bg-no-repeat color-inherit items-center justify-center ml-1 group"
                style={{ backgroundImage: `url('/idot-black.svg')` }}
              ></span>
            </div>
          </div>
        </div>

        <div className="w-full hidden ">
          <div className="text-white bg-[rgba(3,37,65,1)]"></div>
        </div>
        <div className="text-center w-full flex justify-center items-center border-t border-solid bg-[rgba(0,0,0,0.1)] border-t-[rgba(0,0,0,0.2)] p-2.5 z-0 ">
        <div className="flex-wrap justify-center mt-0 flex ">
          <span className="p-[0.96px_4px]! inline-flex whitespace-nowrap items-center border border-solid border-[rgba(0,0,0,.6)] text-[rgba(0,0,0,.6)] leading-none rounded-xs mr-1.75 ">
            {certification}
          </span>
          <span className="pl-0 relative left-0 top-0 before:content-[''] before:text-[17.6px] before:leading-none before:w-full before:h-full before:absolute before:top-0 text-black opacity-95 before:left-1.75 before:inline-flex before:items-center before:z-1 ">
            {date} ({country})
          </span>
          <span className="w-full order-4 pl-0 relative top-0 left-0  before:content-[''] before:text-[17.6px] before:leading-none before:w-full before:h-full before:absolute before:top-0 text-black opacity-95 before:left-1.75 before:inline-flex before:items-center before:z-1">
            {genres.map((item, index) => {
              const isLast = index === genres.length - 1;
              const isSecondToLast = index === genres.length - 2;
              return (
                <span key={item.id}>
                  <Link
                    href=""
                    className="text-black font-normal hover:underline hover:opacity-95 ml-2"
                  >
                    {item.name}
                  </Link>

                  {!isLast && <span>{isSecondToLast ? " and" : ","}</span>}
                </span>
              );
            })}
          </span>
          <span className="pl-1.25 relative top-0 left-0 before:content-[''] before:text-[17.6px] before:leading-none before:w-full before:h-full before:absolute before:top-0 text-black opacity-95 before:left-1.75 before:inline-flex before:items-center before:z-1">•  {runtime}</span>
          <div className="text-white inline-flex items-center overflow-hidden ml-2 ">
            <Link href={`${play}`} className="text-center inline-flex items-center text-base whitespace-nowrap overflow-hidden truncate text-black opacity-95 font-semibold ">
            <span className="mr-1.5 relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-[inherit] bg-center bg-no-repeat color-inherit items-center justify-center" style={{backgroundImage:`url('/play.svg')`}}></span> Play Trailer
            </Link>
          </div>
        </div>
      </div>
      </div>

      <div className="flex-col flex ">
        <div className="mb-0! "></div>
        <ul className="fixed bottom-0 left-0 h-10 z-2 mb-0 bg-[rgba(3,37,65,.8)] [backdrop-filter:blur(20px)] flex-wrap [transition:padding-bottom_.3s] w-full flex justify-around items-center ">
          <li className="bg-position-[0_0] m-0 p-0 border-0 ">
            <Link href="" className="w-1/2 h-1/2 text-[19.2px] bg-[rgba(3,37,65,1)] rounded-full text-white border-0! inline-flex items-center justify-center  ">
            <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-[inherit] bg-center bg-no-repeat color-inherit items-center justify-center  " style={{backgroundImage:`url('/thumbnails.svg')`}}></span>
            </Link>
          </li>

          <li className="bg-position-[0_0] m-0 p-0 border-0 ">
            <Link href="" className="w-1/2 h-1/2 text-[19.2px] bg-[rgba(3,37,65,1)] rounded-full text-white border-0! inline-flex items-center justify-center  ">
            <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-[inherit] bg-center bg-no-repeat color-inherit items-center justify-center  " style={{backgroundImage:`url('/heart.svg')`}}></span>
            </Link>
          </li>

          <li className="bg-position-[0_0] m-0 p-0 border-0 ">
            <Link href="" className="w-1/2 h-1/2 text-[19.2px] bg-[rgba(3,37,65,1)] rounded-full text-white border-0! inline-flex items-center justify-center  ">
            <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-[inherit] bg-center bg-no-repeat color-inherit items-center justify-center  " style={{backgroundImage:`url('/bookmark.svg')`}}></span>
            </Link>
          </li>

          <div className="items-center flex ">
            <li className="bg-position-[0_0] m-0 p-0 border-0 content-center items-center flex-col flex ">
            <Link href="" className="w-1/2 h-1/2 text-[19.2px] bg-[rgba(3,37,65,1)] rounded-full text-white border-0! inline-flex items-center justify-center  ">
            <span className="relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-[inherit] bg-center bg-no-repeat color-inherit items-center justify-center  " style={{backgroundImage:`url('/star.svg')`}}></span>
            </Link>
          </li>
          </div>
        </ul>

      </div>
      <div className="p-5 w-full ">
        <h3 className="mb-5 text-[19.2px] font-normal italic text-black opacity-70 pl-0 pr-0 leading-none w-full m-[0_0_8px]">{tagline}</h3>
        <h3 className="mt-5 w-full m-[0_0_8px] text-black opacity-95 font-semibold text-[20.8px] px-0 ">Overview</h3>
        <div>
          <p className="mb-7.5 text-base text-black opacity-95 leading-6 font-normal px-0 m-[0_0_16px] ">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MobileDetail;
