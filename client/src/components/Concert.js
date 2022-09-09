import React from 'react'

const Concert = (concert) => {
    const artists = concert.concert.artists.map((artist) => <li className='artists'>{artist.name}</li>)
  return (
    <div className='card' >
        <h1>{concert.concert.name}</h1>
        <h2>{concert.concert.location}</h2>
        <h3 className='review'>{concert.concert.review}</h3>
        <p>{artists}</p>
        <p>By: {concert.concert.user.username}</p>
    </div>
  )
}

export default Concert