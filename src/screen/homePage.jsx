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
  const data  = [
  {
    id: 1,
    title: "Cosmic Princess Kaguya!",
    poster: "/9I9cM38gecZcwJ0C6r0cwfvtPJP.jpg",
    rating: "7.2",
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
  
];

const latestTrailers = [
  {
    id: 1,
    title: "Wuthering Heights",
    description: "For the yearners...",
    backdrop_path: "/sYM02XfZhqvlixmRkDcseQ6Xllk.jpg",
  },
  
  {
    id: 2,
    title: "Send Help",
    description: "Paradise",
    backdrop_path: "/hO2jx1H3XafR7Y8QbFgVH1sHTY9.jpg",
  },
  
  {
    id: 3,
    title: "Primate",
    description: "Ready To Play",
    backdrop_path: "/isx3gXPkrt37ERtW47hhTdJD0Pg.jpg",
  },
  
  {
    id: 4,
    title: "Mercy",
    description: "90 minutes to prove your innocence.",
    backdrop_path: "/mHC8tSRYfAKGh2jaSNQMSzGdbOW.jpg",
  },
  
  {
    id: 5,
    title: "The Super Mario Galaxy Movie",
    description: "Yoshi First Look",
    backdrop_path: "/5U0tqruExz7ssDyr5pwiAGFzI8S.jpg",
  },
  
  {
    id: 6,
    title: "Shelter",
    description: "Hold On",
    backdrop_path: "/uCGzI1EtQWXG5yRPB5PSyOdFNcC.jpg",
  },
  
  {
    id: 7,
    title: "28 Years Later: The Bone Temple",
    description: "Views from The Bone Temple.",
    backdrop_path: "/dT1p0K1szMAUBuE2bibouDQdNb8.jpg",
  },
  
  {
    id: 8,
    title: "The Strangers: Chapter 3",
    description: "are you scared?",
    backdrop_path: "/fPfDB0IHOqvmKIzFP9CA51OOS1N.jpg",
  },
  
  {
    id: 9,
    title: "The Beauty",
    description: "Critics Review - “Heart-Pumping Action”.",
    backdrop_path: "/cX6dzeKsBTTXHoG3uQUuhQbqyvq.jpg",
  },
  
  {
    id: 10,
    title: "Supergirl",
    description: "Dreaming Of Lobo",
    backdrop_path: "/28PGUwfIkAByymJOb6KkJt5SgYw.jpg",
  },
  
  {
    id: 11,
    title: "Love Me Love Me",
    description: "Official Trailer",
    backdrop_path: "/nQS2esz8u3AmTqEAZheVnupw2i1.jpg",
  },
  
  {
    id: 12,
    title: "The Pitt",
    description: "Season 2 Episode 4 Preview",
    backdrop_path: "/6uPBHw488MUW6x51zZ2OCJo6Dgp.jpg",
  },
  
  {
    id: 13,
    title: "Invincible",
    description: "Season 4 Official Trailer",
    backdrop_path: "/dfmPbyeZZSz3bekeESvMJaH91gS.jpg",
  },
  
  {
    id: 14,
    title: "Masters of the Universe",
    description: "Official Teaser Trailer",
    backdrop_path: "/bLYjQ6KNrJzh6AAEfOAl6vPI2xh.jpg",
  },
  
  {
    id: 15,
    title: "HUMINT",
    description: "Official Second Trailer [Subtitled]",
    backdrop_path: "/5KFThZkdBEQkp9gPWWWNb5CI5yD.jpg",
  },
  
  {
    id: 16,
    title: "Clika",
    description: "We’re TWO DAYS AWAY.",
    backdrop_path: "/yHZpvJEzeBKMPZfNN6OFfMQ9Jf0.jpg",
  },

  {
    id: 17,
    title: "Scream 7",
    description: "Traitors",
    backdrop_path: "/xXFtetuwZkI3Byl7qmQ8DZXQqY.jpg",
  },

  {
    id: 18,
    title: "Tuner",
    description: "Official Trailer",
    backdrop_path: "/sT5Inhc0aaReSZoufWgfJTQUbKp.jpg",
  }
  
  
  
];

  return (
    <div className=''>
      <SearchBar/>
        <Hero/>
        <Trending trendingData={data}/>
        <Trailer trailerData={latestTrailers}/>
        <Popular popularData={data}/>
        <Watch watchData={data}/>
        <LeaderBoard/>
    </div>
  )
}

export default HomePage
