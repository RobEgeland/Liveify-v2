import React from 'react'
import { useState } from 'react'

const NewConcert = ({currentUser, artists}) => {
    const [newConcert, setNewConcert] = useState({
        name: "",
        location: "",
        review: "",
        user_id: currentUser.id,
        artist_id1: "",
        artist_id2: "",
        artist_id3: ""
    })

    function handleChange(e) {
        setNewConcert({
            ...newConcert,
            [e.target.name]: e.target.value
        })
    }

    function handleArtistChange(e) {
        setNewConcert({
            ...newConcert,
            [e.target.name]: e.target.value
        })

    }

    function handleSubmit(e) {
        e.preventDefault()
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
        const options = {
            method: "POST",
            headers,
            body: JSON.stringify({
            name: newConcert.name,
            location: newConcert.location,
            review: newConcert.review,
            artist_id: [parseInt(newConcert.artist_id1), parseInt(newConcert.artist_id2), parseInt(newConcert.artist_id3)],
            user_id: newConcert.user_id
            })
        }
        fetch('/concerts', options)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    
    return (
        <form className='concert-form' onSubmit={handleSubmit}>
            <h1>Add a Concert</h1>
            <div >
                <label htmlFor='name'>Concert Name</label>
                <br/>
                <input id="name" name='name' type={"text"} value={newConcert.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='location'>Location</label>
                <br/>
                <input id='location' name='location' type={"text"} value={newConcert.location} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='review'>Review</label>
                <br/>
                <textarea id='review' name='review' type={"text"} value={newConcert.review} onChange={handleChange}/>
            </div>
            <div>
                <label>Who did you see?</label>
                <br/>
                <select name='artist_id1' onChange={handleArtistChange}>
                <option value='' disabled selected hidden>Artists</option>
                {artists.map((artist, index) => <option key={index} value={index} >{artist.name}</option>)}
                </select>
                <select name='artist_id2' onChange={handleArtistChange}>
                <option value='' disabled selected hidden>Artists</option>
                {artists.map((artist, index) => <option key={index} value={index} >{artist.name}</option>)}
                </select>
                <select name='artist_id3' onChange={handleArtistChange}>
                <option value='' disabled selected hidden>Artists</option>
                {artists.map((artist, index) => <option key={index} value={index} >{artist.name}</option>)}
                </select>
            </div>
            <br></br>
            <input type={"submit"} value={"create concert"}/>
        </form>
    )
}

export default NewConcert