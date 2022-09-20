import React from 'react'
import {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ArtistDetails = () => {
    const [currentArtist, setCurrentArtist] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`/artists/${id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setCurrentArtist(data)
        })

    }, [])
    if (currentArtist) {
      return (
        <div className='artist-detail'>
            <h1>{currentArtist.name}</h1>
            <h2>Band Members: {currentArtist.band_members}</h2> 
            <h2>Genre: {currentArtist.genre.name}</h2>
            <br/>
            <img src={currentArtist.band_img}/>
        </div>
  )} else {
    return (
      <h1>Loading...</h1>
    )
  }
}

export default ArtistDetails