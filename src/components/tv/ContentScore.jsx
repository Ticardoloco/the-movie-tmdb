import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContentScore = ({ score }) => {
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";
  const size = "/w45_and_h45_face";
  return (
    <div className="w-full">
      <section className="mb-7.5 w-full block text-black p-[0_20px] lg:p-0">
        <h4 className="inline-flex items-center mt-0.5 mb-0 text-[17.6px] font-semibold p-0 m-0 leading-1 ">
          Content Score
        </h4>

        <div className=" bg-[rgba(0,0,0,.15)] rounded-lg ">
          <div className="w-full h-9.5 bg-[rgba(0,0,0,.2)] rounded-tl-lg rounded-tr-lg ">
            <div className="w-full border-[rgba(220.5,220.5,220.5,1)] bg-[rgba(31.5,31.5,52.5,1)] text-black flex items-center h-full overflow-visible p-[0_12px] border-br-0 border-bl-0 rounded-tl-lg rounded-tr-lg">
              <p className="mb-0 text-white font-bold text-base p-0 flex flex-wrap m-0 whitespace-nowrap ">
                {score}
              </p>
            </div>
          </div>
          <p className="mb-0 flex flex-wrap m-0 p-[2px_12px_4px] text-[14.4px] whitespace-nowrap ">
            {score === 100
              ? "Yes! Looking good!"
              : score < 80
                ? "Just a little bit more..."
                : score < 100
                  ? "Almost there..."
                  : "Keep pushing"}
          </p>
        </div>
      </section>
      <section className="mb-7.5 w-full block text-black p-[0_20px] lg:p-0">
        <h4 className="text-[17.6px] font-semibold mb-2.5 mt-0 p-0 m-0 leading-none ">
          Top Contributors
        </h4>
        <div className="w-full flex flex-wrap ">
          <div className="w-full h-11.25 mb-5 flex items-center ">
            <div className="w-11.25 h-11.25 ">
              <Link
                href=""
                className="inline-block w-11.25 h-11.25 text-black font-normal"
              >
                <Image
                  width={45}
                  height={45}
                  src="/night.webp"
                  alt="avatar"
                  className="w-full h-full rounded-full outline-0 border-0 max-w-[inherit] block align-middle"
                />
              </Link>
            </div>
            <div className="pl-2.5 whitespace-nowrap overflow-hidden truncate ">
              <p className="whitespace-nowrap overflow-hidden truncate m-0 font-semibold text-base p-0 text-black">
                346 <br />
                <Link
                  href=""
                  className="font-light text-black underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3"
                >
                  night.owl
                </Link>
              </p>
            </div>
          </div>

          <div className="w-full h-11.25 mb-5 flex items-center ">
            <div className="w-11.25 h-11.25 ">
              <Link
                href=""
                className="inline-block w-11.25 h-11.25 text-black font-normal"
              >
                <Image
                  width={45}
                  height={45}
                  src="/jim.webp"
                  alt="avatar"
                  className="w-full h-full rounded-full outline-0 border-0 max-w-[inherit] block align-middle"
                />
              </Link>
            </div>
            <div className="pl-2.5 whitespace-nowrap overflow-hidden truncate ">
              <p className="whitespace-nowrap overflow-hidden truncate m-0 font-semibold text-base p-0 text-black">
                122 <br />
                <Link
                  href=""
                  className="font-light text-black underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3"
                >
                 Jim Stark
                </Link>
              </p>
            </div>
          </div>

          

          <div className="w-full h-11.25 mb-5 flex items-center ">
            <div className="w-11.25 h-11.25 ">
              <Link
                href=""
                className="inline-block w-11.25 h-11.25 text-black font-normal"
              >
                <Image
                  width={45}
                  height={45}
                  src="/banana.webp"
                  alt="avatar"
                  className="w-full h-full rounded-full outline-0 border-0 max-w-[inherit] block align-middle"
                />
              </Link>
            </div>
            <div className="pl-2.5 whitespace-nowrap overflow-hidden truncate ">
              <p className="whitespace-nowrap overflow-hidden truncate m-0 font-semibold text-base p-0 text-black">
                106 <br />
                <Link
                  href=""
                  className="font-light text-black underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3"
                >
                  Banana
                </Link>
              </p>
            </div>
          </div>

          <div className="w-full h-11.25 mb-5 flex items-center ">
            <div className="w-11.25 h-11.25 ">
              <Link
                href=""
                className="inline-block w-11.25 h-11.25 text-black font-normal"
              >
                <span className="w-11.25 h-11.25 flex items-center justify-center text-center uppercase text-white text-[19.2px] font-normal rounded-full bg-[rgba(1,198,172,1)]">
                  Q
                </span>
              </Link>
            </div>
            <div className="pl-2.5 whitespace-nowrap overflow-hidden truncate ">
              <p className="whitespace-nowrap overflow-hidden truncate m-0 font-semibold text-base p-0 text-black">
                54 <br />
                <Link
                  href=""
                  className="font-light text-black underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3"
                >
                  qualitylover
                </Link>
              </p>
            </div>
          </div>

          <p className="mb-0 w-full text-base m-[0_0_16px] p-0 ">
            <Link
              href=""
              className="underline decoration-[color-mix(in_srgb,currentColor_40%,transparent)] underline-offset-3 text-black "
            >
              <span className=""></span>
              View Edit History
            </Link>
          </p>
        </div>
      </section>
      <section className="mb-0 w-full block p-[0_20px] lg:p-0">
        <h4 className="text-[17.6px] font-semibold mb-2.5 mt-0 p-0 m-0 leading-none text-black">
          Popularity Trend
        </h4>
        <div className="w-55.5 h-11.25">
          <div className="relative [--kendo-chart-computed-title-height:0px] -left-3.25 w-50.75 h-12.5 border-[rgba(33,37,41,0.2)] text-[#212529] bg-transparent">
            <span className="w-50.75 h-12.5 inline-block align-top ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  left: "0px",
                  top: "-0.390625px",
                }}
              >
                <defs></defs>
                <g>
                  <path
                    d="M0 0 L 203 0 203 50 0 50Z"
                    stroke="none"
                    fill="none"
                  />
                  <path
                    d="M2 3 L 200 3 200 48 2 48Z"
                    stroke="none"
                    fill="#fff"
                    fillOpacity="0"
                  />
                  <g>
                    <path
                      d="M2 3 L 2 48"
                      stroke="color(srgb 0.129412 0.145098 0.160784 / 0.5)"
                      strokeWidth="2"
                      fill="none"
                      style={{ display: "none" }}
                    />
                    <path
                      d="M16.143 25.5 L 44.429 41.571 72.714 38.357 101 38.357 129.286 31.929 157.571 25.5 185.857 22.286"
                      stroke="#dddddd"
                      strokeWidth="2"
                      fill="none"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentScore;
