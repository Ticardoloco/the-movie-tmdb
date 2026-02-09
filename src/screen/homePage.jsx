"use client"
import Hero from '@/components/hero'
import LeaderBoard from '@/components/leaderBoard'
import Popular from '@/components/popular'
import SearchBar from '@/components/searchBar'
import Trailer from '@/components/trailer'
import Trending from '@/components/trending'
import Watch from '@/components/watch'
import React, { useState } from 'react'

const HomePage = () => {


  return (
    <div className=''>
      <SearchBar/>
        <Hero/>
        <Trending />
        <Trailer/>
        <Popular/>
        <Watch/>
        <LeaderBoard/>
    </div>
  )
}

export default HomePage
