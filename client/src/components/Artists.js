import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Artists = () => {
    const [artists, setArtists] = useState([])
    useEffect(() => {
        fetch('/artists')
        .then(r => r.json())
        .then(data => setArtists(data))
    }, [])

  return (
    <div>
        <h1>Artists our users have seen</h1>
        <ul className='artist-list'>
            {artists.map(artist => <li className='artistsp' ><NavLink to={`/artists/${artist.id}`}>{artist.name}</NavLink></li>)}
        </ul>
    </div>
  )
}

export default Artists