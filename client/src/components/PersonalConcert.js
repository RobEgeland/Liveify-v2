import React from 'react'

const PersonalConcert = ({concert, handleDelete}) => {
    const artists = concert.artists.map((artist) => <li className='artists'>{artist.name}</li>)

    
    return (
        <div className='card' >
            <h1>{concert.name}</h1>
            <h2>{concert.location}</h2>
            <h3 className='review'>{concert.review}</h3>
            <p>{artists}</p>
            <br/>
            <button onClick={() => handleDelete(concert.id)}>Delete</button>
            <button>Update</button>
            <p>By: {concert.user.username}</p>
        </div>
    )
}

export default PersonalConcert