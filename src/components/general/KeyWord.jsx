import Link from "next/link";
import React from "react";

const KeyWord = ({id, status, language, budget, revenue, keyword}) => {
  return (
    <div className="w-full pb-0! mb-0!">
      <section className="mb-7.5 w-full block ">
        <div className="min-h-12.5 mb-7.5 w-full ">
          <span >
            <div className="pt-0">
              <div className="cursor-pointer max-w-[320px]! min-w-72.5! w-full! h-12.5! bg-[#f0f0f0]! flex! justify-between! border-none! rounded-[5px]! m-0! p-0! ">
                <div className="flex! items-center! pl-2.5! ">
                  <button className="w-auto h-auto! cursor-pointer bg-[#57afd5] text-white text-sm! font-bold! border-none! py-1.25! px-2.5! rounded-[5px]! flex! items-center! shadow-[0px_3px_6px_rgba(0,0,0,0.3)] [-webkit-appearance:button] overflow-visible bg-none ">
                    <svg className="heart-beat" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: "20px", height: "20px", marginRight: "10px" }}>        <path d="M6 4l15 8-15 8z" fill="#ffffff"></path>      </svg>
                    Watch Now
                  </button>
                </div>
                <div className="flex! flex-col! justify-center! items-end! pr-2.5!">
                    <div className="leading-[16.8px]! text-black! text-sm! font-normal! p-0! ">Dope Thief</div>
                    <div className="leading-[14.4px]! text-black! text-[12px] font-extralight! p-0!">on Apple TV</div>
                </div>
              </div>
            </div>
          </span>
        </div>

        <div className="flex ">
        <div className="h-7.5 mb-7.5 ">
        <Link href="" className="block text-[30.4px] text-black font-normal ">
        <span className="relative top-0 left-0 inline-flex min-w-[30.4px] w-[30.4px] min-h-[30.4px] h-[30.4px] leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center " style={{backgroundImage:`url("/facebook.svg")`}}></span>
        </Link>
        </div>

        <div className="ml-2.5 h-7.5 mb-7.5 ">
        <Link href="" className="block text-[30.4px] text-black font-normal ">
        <span className="relative top-0 left-0 inline-flex min-w-[30.4px] w-[30.4px] min-h-[30.4px] h-[30.4px] leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center " style={{backgroundImage:`url("/instagram.svg")`}}></span>
        </Link>
        </div>

        <div className=" border-l border-solid border-l-[#d7d7d7] pl-2 ml-2.5 h-7.5 mb-7.5 ">
        <Link href="" className="block text-[30.4px] text-black font-normal ">
        <span className="relative top-0 left-0 inline-flex min-w-[30.4px] w-[30.4px] min-h-[30.4px] h-[30.4px] leading-[inherit] bg-center bg-no-repeat text-inherit justify-center items-center " style={{backgroundImage:`url("/homepage.svg")`}}></span>
        </Link>
        </div>
        </div>
        <p className="m-[0_0_20px] text-base p-0 text-black ">
          <strong className="font-semibold block"><span>Status</span></strong>
          {status}
        </p>

        <p className="m-[0_0_20px] text-base p-0 text-black ">
          <strong className="font-semibold block"><span>Original Language</span></strong>
          {language}
        </p>

        <p className="m-[0_0_20px] text-base p-0 text-black ">
          <strong className="font-semibold block"><span>Budget</span></strong>
          ${budget}
        </p>

        <p className="mb-0 m-[0_0_20px] text-base p-0 text-black ">
          <strong className="font-semibold block"><span>Revenue</span></strong>
          ${revenue}
        </p>

      </section>
      <section className="border-b border-solid border-[#d7d7d7] text-black mb-7.5 w-full mt-7.5 block ">
        <h4 className="text-[17.6px] font-semibold mb-2.5 mt-0 p-0 m-0 leading-none "><span>Keywords</span></h4>
        <ul className="pb-7.5 w-full flex flex-wrap justify-start m-0 p-0 ">
          {keyword.length > 0 ? (keyword?.map(item=>(
            <li key={item.id} className="mr-1.25 mb-2.5 leading-[24px] text-[14.4px] whitespace-nowrap ">
              <Link href="" className="bg-[rgba(0,0,0,.1)] border border-solid border-[#d7d7d7] text-black p-[4px_10px] rounded-[4px] text-[12.96px] [transition:linear_.1s] font-normal ">{item.name}</Link>
            </li>)
          )): (<p className="text-black">No keywords have been added.</p>)}
        </ul>
      </section>
    </div>
  );
};

export default KeyWord;
