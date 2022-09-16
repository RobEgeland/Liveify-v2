import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const UpdateConcert = ({concerts, artists}) => {
    const { id } = useParams()
    const currentConcert = concerts.filter(concert => concert.id === parseInt(id))
    const concertArtists = currentConcert[0].artists
    const [updatedConcert, setUpdatedConcert] = useState({
        name: currentConcert[0].name,
        location: currentConcert[0].location,
        review: currentConcert[0].review,
        user_id: currentConcert[0].user.id,
        artist_id: [currentConcert[0].artists]
    })
    console.log(updatedConcert.artist_id[0][1].name)
    function handleChange() {

    }

    function handleSubmit() {

    }

    function handleArtistChange() {

    }

    const artistcards = concertArtists.map(artist => {
        <select name='artist_id' value={artist.name} onChange={handleArtistChange}>
        {artists.map((artist) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
        </select>
    })
    console.log(artistcards)
    console.log(concertArtists)
    if (updatedConcert) {
        return (
            <form className='concert-form' onSubmit={handleSubmit}>
                <h1>Add a Concert</h1>
                <div >
                    <label htmlFor='name'>Concert Name</label>
                    <br/>
                    <input id="name" name='name' type={"text"} value={updatedConcert.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='location'>Location</label>
                    <br/>
                    <input id='location' name='location' type={"text"} value={updatedConcert.location} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='review'>Review</label>
                    <br/>
                    <textarea id='review' name='review' type={"text"} value={updatedConcert.review} onChange={handleChange}/>
                </div>
                <div>
                    <label>Change Who you saw</label>
                    <br/>
                    {artistcards}
                    {/* <select name='artist_id' value={updatedConcert.artist_id[0][0].name} onChange={handleArtistChange}>
                    {artists.map((artist) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
                    </select>
                    <select name='artist_id' value={updatedConcert.artist_id[0][1].name} onChange={handleArtistChange}>
                    {artists.map((artist) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
                    </select>
                    <select name='artist_id' value={updatedConcert.artist_id[0][2].name} onChange={handleArtistChange}>
                    {artists.map((artist) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
                    </select> */}
                </div>
                <input type={"submit"} value={"create concert"}/>
            </form>
    )
    }else {
        <h1>Loading...</h1>
    }
   
}

export default UpdateConcert