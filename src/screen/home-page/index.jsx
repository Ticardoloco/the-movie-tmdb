"use client"
import Hero from '@/components/home/hero'
import LeaderBoard from '@/components/home/leaderBoard'
import Popular from '@/components/home/popular'
import SearchBar from '@/components/home/searchBar'
import Trailer from '@/components/home/trailer'
import Trending from '@/components/home/trending'
import Watch from '@/components/home/watch'
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
