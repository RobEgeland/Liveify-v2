import React from 'react'
import { useEffect, useState } from 'react'
import Concert from './Concert'

const Home = ({concerts}) => {
  
  // console.log(concerts[0].artists)
  const concertCards = concerts.map((concert, index) => <Concert concert={concert} key={index} />)

  if (concertCards){
    return (
    <ul className='home'>
      <li>{concertCards}</li>
    </ul>
  )
  }else {
    <h1>Loading...</h1>
  }
 
}

export default Home