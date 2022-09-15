import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateConcert = ({concerts}) => {
    const { id } = useParams()
    const currentConcert = concerts.filter(concert => concert.id === parseInt(id))
    const concertArtists = currentConcert.artists
    console.log(currentConcert[0].artists)
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
                    <select name='artist_id' value={currentConcert[0].artists[0]} onChange={handleArtistChange}>
                    {currentConcert[0].artists.map((artist) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
                    </select>
                    <select name='artist_id' value={currentConcert[0].artists[1]} onChange={handleArtistChange}>
                    {currentConcert[0].artists.map((artist) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
                    </select>
                    <select name='artist_id' value={currentConcert[0].artists[2]} onChange={handleArtistChange}>
                    {currentConcert[0].artists.map((artist) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
                    </select>
                </div>
                <input type={"submit"} value={"create concert"}/>
            </form>
    )
}

export default UpdateConcert