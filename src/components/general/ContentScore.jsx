import React from 'react'

const ContentScore = ({score}) => {
  return (
    <div className='w-full'>
      <section className="mb-7.5 w-full block text-black">
        <h4 className="inline-flex items-center mt-0.5 mb-0 text-[17.6px] font-semibold p-0 m-0 leading-1 ">Content Score</h4>

        <div className=" bg-[rgba(0,0,0,.15)] rounded-lg ">
            <div className="w-full h-9.5 bg-[rgba(0,0,0,.2)] rounded-tl-lg rounded-tr-lg ">
                <div className="w-full border-[rgba(220.5,220.5,220.5,1)] bg-[rgba(220.5,220.5,220.5,1)] text-black flex items-center h-full overflow-visible p-[0_12px] border-br-0 border-bl-0 rounded-tl-lg rounded-tr-lg">
                    <p className="mb-0 text-black font-bold text-base p-0 flex flex-wrap m-0 whitespace-nowrap ">{score}</p>
                </div>
            </div>
            <p className="mb-0 flex flex-wrap m-0 p-[2px_12px_4px] text-[14.4px] whitespace-nowrap ">{score === 100 ? "Yes! Looking good!": score < 80 ? "Just a little bit more...": score < 100 ? "Almost there..." : "Keep pushing" }</p>
        </div>
      </section>
      <section className="mb-7.5 w-full block text-black">
        <h4 className="text-[17.6px] font-semibold mb-2.5 mt-0 p-0 m-0 leading-none ">Top Contributors</h4>
        <div className="w-full flex flex-wrap "></div>
      </section>
    </div>
  )
}

export default ContentScore
