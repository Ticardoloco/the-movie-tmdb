"use client"
import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
import NavBar from './navbar'

const Header = () => {
    const [toggleBar, setToggleBar] = useState(false);
  return (
    <div>
      <MobileMenu toggleBar={toggleBar} setToggleBar={setToggleBar}/>
      <NavBar toggleBar={toggleBar} setToggleBar={setToggleBar}/>
    </div>
  )
}

export default Header
