import MainContent from '@/components/person/MainContent'
import Title from '@/components/person/Title'
import React from 'react'

const PeoplePage = () => {
  return (
    <div className='w-full flex items-center justify-center '>
      <div className="max-w-350 w-full my-5 px-5 lg:px-10">
        <Title text1={"Popular People"}/>
        <MainContent/>
      </div>
    </div>
  )
}

export default PeoplePage
