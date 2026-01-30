import React from 'react'
import LeaderTitle from './leaderTitle'
import LeaderDetail from './leaderDetail'

const LeaderBoard = () => {
  return (
    <div className='mb-2.5 min-w-full max-w-350 w-full flex justify-center flex-wrap items-start content-start bg-cover bg-no-repeat bg-position-[50%_50%]'>
        <div className="w-full flex items-start justify-center min-w-full ">
            <div className="max-w-350 w-full py-7.5 px-5 lg:px-10 flex items-start content-start flex-wrap ">
                <div className="w-full">
                    <LeaderTitle/>
                    <LeaderDetail/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeaderBoard
