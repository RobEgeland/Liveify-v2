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
            console.log(data.name)
            setCurrentArtist(data)
        })
    }, [])
    console.log(currentArtist.band_members)
  return (
    <div>
        {/* <h1>{currentArtist.name}</h1>
        <h2>{currentArtist.band_members}</h2> */}
        {/* <img>{currentArtist.band_img}</img> */}
    </div>
  )
}

export default ArtistDetails