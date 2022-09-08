import React from 'react'

const Concert = (concert) => {
    console.log(concert.concert.artists)
    const artists = concert.concert.artists.map((artist) => <li>{artist.name}</li>)
  return (
    <div className='card' >
        <h1>{concert.concert.name}</h1>
        <h2>{concert.concert.location}</h2>
        <h3>{concert.concert.review}</h3>
        <p>{artists}</p>
    </div>
  )
}

export default Concert