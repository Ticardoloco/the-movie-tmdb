import Title from '@/components/general/Title'
import MainContent from '@/components/tv/MainContent'
import React from 'react'

const TvPage = () => {
  return (
    <div className='flex justify-center w-full min-w-full flex-wrap items-start content-start'>
      <div className="flex items-start justify-center min-w-full">
        <div className="flex-wrap max-w-350 w-full py-7.5 px-5 lg:px-10 flex-col flex items-start content-start ">
            <Title text1={"Popular Tv Shows"}/>
            <MainContent/>
        </div>
      </div>
    </div>
  )
}

export default TvPage
