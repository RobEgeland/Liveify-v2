import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const UpdateConcert = ({artists}) => {
    const { id } = useParams()
    const [updatedConcert, setUpdatedConcert] = useState({
        name: "",
        location: "",
        review: "",
        user_id: "",
        artists: []
    })

    useEffect(() => {
        fetch(`/concerts/${id}`)
        .then(res => {
            if(res.ok) {
                res.json().then(data => setUpdatedConcert({
                    name: data.name,
                    location: data.location,
                    review: data.review,
                    user_id: data.user_id,
                    artists: data.artists
                }))
            }else {
                res.json().then(error => {
                    console.log(error.error)
                    
                })
            }
        })
    },[])
    function handleChange() {

    }

    function handleSubmit() {

    }

    function handleArtistChange() {

    }

    const artistcards = updatedConcert.artists.map(artist => {
        <select name='artist_id' value={artist.name} onChange={handleArtistChange}>
            {artists.map((artist) => <option key={artist.id} value={artist.id} >{artist.name}</option>)}
        </select>
        console.log(artist)
    })
    console.log(artistcards)

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
                    {/* <select name='artist_id' value={updatedConcert.artist_id[0][1].name} onChange={handleArtistChange}>
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