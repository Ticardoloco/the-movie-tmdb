"use client"
import Hero from '@/components/hero'
import SearchBar from '@/components/searchBar'
import Trending from '@/components/trending'
import React, { useState } from 'react'

const HomePage = () => {
  const [data, setData] = useState([
  {
    id: 1,
    title: "Cosmic Princess Kaguya!",
    poster: "/9I9cM38gecZcwJ0C6r0cwfvtPJP.jpg",
    rating: "NR",
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 2,
    title: "The Beauty",
    poster: "/qKOoFawE4fdzNPNdGRWtI2qsFib.jpg",
    rating: 3.6,
    releaseDate: "Jan 21, 2026",
  },
  {
    id: 3,
    title: "From the Ashes: The Pit",
    poster: "/9jpq7YSNIwY4Wua15QM0lmGp3zn.jpg",
    rating: 4.0,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 4,
    title: "Sinners",
    poster: "/lOfjeJMKS7cOaaTn6q3J0y2ypiA.jpg",
    rating: 7.5,
    releaseDate: "Apr 16, 2025",
  },
  {
    id: 5,
    title: "Marty Supreme",
    poster: "/firAhZA0uQvRL2slp7v3AnOj0ZX.jpg",
    rating: 8.1,
    releaseDate: "Dec 19, 2025",
  },
  {
    id: 6,
    title: "The SpongeBob Movie: Search for SquarePants",
    poster: "/pDWYW9v8fmJdA7N0I1MOdQA3ETq.jpg",
    rating: 6.4,
    releaseDate: "Dec 16, 2025",
  },
  {
    id: 7,
    title: "Steal",
    poster: "/6KmlaPhsohh3Ki9XJUq0jiUYbf3.jpg",
    rating: 8.4,
    releaseDate: "Jan 21, 2026",
  },
  {
    id: 8,
    title: "JUJUTSU KAISEN",
    poster: "/fHpKWq9ayzSk8nSwqRuaAUemRKh.jpg",
    rating: 8.6,
    releaseDate: "Oct 03, 2020",
  },
  {
    id: 9,
    title: "Hamnet",
    poster: "/61xMzN4h8iLk0hq6oUzr9Ts6GE9.jpg",
    rating: 7.7,
    releaseDate: "Nov 26, 2025",
  },
  {
    id: 10,
    title: "The Rip",
    poster: "/p4bW2sJKAwcHuLpfoZK7Zo63osA.jpg",
    rating: 7.0,
    releaseDate: "Jan 16, 2026",
  },
  {
    id: 11,
    title: "The Secret Agent",
    poster: "/rZqolYhxMEe6TZZTjSmFw9crDTD.jpg",
    rating: 7.7,
    releaseDate: "Jul 23, 2025",
  },
  {
    id: 12,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 13,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 14,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 15,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 16,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 17,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 18,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 19,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 20,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 21,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 22,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 23,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 24,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 25,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 26,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 27,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  {
    id: 28,
    title: "Finding Her Edge",
    poster: "/rundKWddXHke82ee8Sv9KJmuGhn.jpg",
    rating: 7.2,
    releaseDate: "Jan 22, 2026",
  },
  
])
  return (
    <div className=''>
      <SearchBar/>
        <Hero/>
        <Trending data={data} setData={setData}/>
    </div>
  )
}

export default HomePage
