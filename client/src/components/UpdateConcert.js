import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateConcert = ({concerts, artists}) => {
    const { id } = useParams()
    const currentConcert = concerts.filter(concert => concert.id === parseInt(id))
    const concertArtists = currentConcert[0].artists
   console.log(concertArtists[1])
    function handleChange() {

    }

    function handleSubmit() {

    }

    function handleArtistChange() {

    }
    console.log(currentConcert)
    return (
        <form className='concert-form' onSubmit={handleSubmit}>
                <h1>Add a Concert</h1>
                <div >
                    <label htmlFor='name'>Concert Name</label>
                    <br/>
                    <input id="name" name='name' type={"text"} value={currentConcert[0].name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='location'>Location</label>
                    <br/>
                    <input id='location' name='location' type={"text"} value={currentConcert[0].location} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='review'>Review</label>
                    <br/>
                    <textarea id='review' name='review' type={"text"} value={currentConcert[0].review} onChange={handleChange}/>
                </div>
                <div>
                    <label>Change Who you saw</label>
                    <br/>
                    <select name='artist_id' value={concertArtists[0]} onChange={handleArtistChange}>
                    {artists.map((artist) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
                    </select>
                    <select name='artist_id' value={concertArtists[1]} onChange={handleArtistChange}>
                    {artists.map((artist) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
                    </select>
                    <select name='artist_id' value={concertArtists[2]} onChange={handleArtistChange}>
                    {artists.map((artist) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
                    </select>
                </div>
                <input type={"submit"} value={"create concert"}/>
            </form>
    )
}

export default UpdateConcert