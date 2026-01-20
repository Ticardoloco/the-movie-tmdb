import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {


  return (
    <div className="h-112.5 max-h-112.5 max-w-350 min-w-auto min-h-75 bg-[rgba(0,0,0,0.2) bg-cover bg-no-repeat text-white box-border w-full flex justify-center flex-wrap items-start content-start bg-center">
      <div className="h-112.5 w-full max-w-350 absolute bg-[rgba(0,0,0,0.2)] z-1 flex lg:justify-between lg:flex-nowrap overflow-hidden flex-wrap justify-center ">
       
        <div
          className="lg:w-full w-1/2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `image-set(
      url('/bg-1.webp') 1x,
      url('/bg1.webp') 2x
    ) `,
          }}
        ></div>
        <div
          className="lg:w-full w-1/2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `image-set(
      url('/bg-2.webp') 1x,
      url('/bg2.webp') 2x
    ) `,
          }}
        ></div>
        <div
          className="lg:w-full w-1/2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `image-set(
      url('/bg-3.webp') 1x,
      url('/bg3.webp') 2x
    ) `,
          }}
        ></div>
        
        <div
          className="lg:w-full w-1/2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `image-set(
      url('/bg-4.webp') 1x,
      url('/bg4.webp') 2x
    ) `,
          }}
        ></div>

        <div
          className="lg:w-full w-1/2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `image-set(
      url('/bg-5.webp') 1x,
      url('/bg5.webp') 2x
    ) `,
          }}
        ></div>

        <div
          className="lg:w-full w-1/2 bg-cover bg-no-repeat block lg:hidden"
          style={{
            backgroundImage: `image-set(
      url('/bg-6.webp') 1x,
      url('/bg6.webp') 2x
    ) `,
          }}
        ></div>

        
      </div>
      <div className="w-screen bg-[rgba(0,0,0,0.7)] relative z-2 h-full flex justify-center items-center content-center  min-w-full flex-wrap box-border">
        <div className="w-full flex items-start justify-center min-w-full content-start ">
          <div className="flex-col flex-wrap lg:max-w-350 max-w-screen w-full lg:py-7.5 lg:px-10 flex items-start content-start p-5 ">
            <div>
              <div className="bg-[linear-gradient(to_bottom_right,#b18bf5_0%,#efafbb_65%)] bg-size-[100%] bg-clip-text text-transparent">
                <h2 className="font-bold text-6xl leading-none p-0 m-0">That&apos;s a <br /> Wrap 2025</h2>
              </div>
            </div>
            <div className="mt-2.5">
              <p className="text-xl mb-5 px-0 lg:p-0 font-extralight ">The best (and worst) of the year from TMDB.</p>
              <h4 className="m-0 p-0 leading-none text-base font-medium">
                <Link className="inline-flex items-center m-0 rounded-4xl text-white font-semibold border-2 border-white py-2 px-4 transition leading-none " href="/">Check it out <span className="ml-1 relative top-0 left-0 inline-flex min-w-4 w-4 min-h-4 h-4 leading-none justify-center items-center"><MoveRight/></span></Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
