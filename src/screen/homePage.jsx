import Hero from '@/components/hero'
import SearchBar from '@/components/searchBar'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <SearchBar/>
        <Hero/>
    </div>
  )
}

export default HomePage
