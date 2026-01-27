"use client"
import React, { useState } from 'react'
import Title from './title'
import DataBox from './dataBox';

const Trending = ({data, setData}) => {
  const [slideTrend, setSlideTrend] = useState("text2");
  const [dropDownTrend, setDropDownTrend] = useState(false);
  return (
    <div className='bg-position-[50%_200px] bg-size-[1400px] bg-no-repeat min-w-full max-w-350 w-full flex box-border justify-center flex-wrap items-start content-start p-0'  style={{
            backgroundImage: `url('/trending-bg.svg')`
    ,
          }}>
            <div className="w-full flex items-start justify-center min-w-full">
              <div className="max-w-screen w-full py-7.5 px-5 lg:px-10 flex items-start content-start flex-wrap mb-0! pb-0!">
                <div className="w-full">
                  <Title text1={"Trending"} text2={"Today"} text3={"This Week"} slide={slideTrend} setSlide={setSlideTrend} dropDown={dropDownTrend} setDropDown={setDropDownTrend}/>

                  <div className="relative top-0 left-0 flex justify-center w-full min-w-full flex-wrap items-start content-start ">
                    <div className="min-h-0 h-auto w-full min-w-full max-w-350 overflow-x-scroll custom-scroll overflow-y-hidden transition-[height] duration-500 ease-linear flex gap-5 justify-start items-start py-5 whitespace-normal ">
                      {slideTrend==="text2" && data.map((item)=> (
                        
                          <DataBox key={item.id} id={item.id} poster={item.poster} title={item.title} rating={item.rating} date={item.releaseDate}/>
                        
                      ))}

                        {slideTrend==="text3" && data.map((item)=> (
                        
                          <DataBox key={item.id} id={item.id} poster={item.poster} title={item.title} rating={item.rating} date={item.releaseDate}/>
                        
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
    </div>
  )
}

export default Trending
