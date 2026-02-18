"use client"
import config from '@/config'
import api from '@/services/httpService'
import React, { useEffect, useState } from 'react'
import PersonCard from './PersonCard'
import Pagination from './Pagination'

const MainContent = () => {
  const [personDatas, setPersonDatas] = useState([])

  const getPersonData = async ()=>{
    const personData = await api.get(config.subUrl.person.popular);
    if (personData.status === 200) {
      setPersonDatas(personData.data.results);
    }
  }

  useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getPersonData()
  },[])
  return (
    <div className='justify-between content-start flex flex-wrap '>
      {personDatas.map(item=>(
        <PersonCard key={item.id} name={item.name} image={item.profile_path} title={item.known_for[0].title} title1={item.known_for[0].name} title2={item.known_for[1].title} title3={item.known_for[2].title}/>
      ))}

      <Pagination/>
    </div>
  )
}

export default MainContent
