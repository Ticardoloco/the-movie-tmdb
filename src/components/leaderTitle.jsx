import React from 'react'

const LeaderTitle = () => {
  return (
    <div className='flex justify-start items-center'>
      <h2 className="mr-5 whitespace-nowrap m-0 font-semibold text-2xl p-0 leading-none text-black">Leaderboard
</h2>
    <div>
        <p className="flex items-center p-0 m-0 text-[14.4px] text-black ">
            <span className="bg-[linear-gradient(to_right,rgba(192,254,207,1)_0%,rgba(30,213,169,1))] rounded-[50%] inline-block w-2 h-2 mr-2.5 "></span>
            All Time Edits
        </p>
        <p className="flex items-center p-0 m-0 text-[14.4px] text-black ">
            <span className="bg-[linear-gradient(to_right,rgba(253,193,112,1)_0%,rgba(217,59,99,1))] rounded-[50%] inline-block w-2 h-2 mr-2.5 "></span>
            Edits This Week
        </p>
    </div>
    </div>
  )
}

export default LeaderTitle
