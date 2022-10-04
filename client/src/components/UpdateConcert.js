import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

const UpdateConcert = ({artists}) => {
    const history = useHistory()
    const { id } = useParams()
    const [newArtist, setNewArtist] = useState(false)
    const [errors, setErrors] = useState()
    const [updatedConcert, setUpdatedConcert] = useState({
        name: "",
        location: "",
        review: "",
        user_id: "",
        artists: []
    })
    const deleteArtists = []
    

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
    function handleChange(e) {
        setUpdatedConcert({
            ...updatedConcert,
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
            method: "PATCH",
            headers,
            body: JSON.stringify({
                name: updatedConcert.name,
                location: updatedConcert.location,
                review: updatedConcert.review,
                user_id: updatedConcert.user_id,
                // need to get artist ids into patch
                artists: [updatedConcert.artists[0].id, updatedConcert.artists[1].id, updatedConcert.artists[2].id],
                // need deleted artists id to remove from concert join table 
                delete_artists: deleteArtists
            })
        }
        fetch(`/concerts/${id}`, options)
        .then(res => res.json())
        .then(data => console.log(data))
        history.push("/my-profile")
        
    }

    function handleArtistDelete(e) {
        e.preventDefault()
        const filteredArtists = updatedConcert.artists.filter(artist => artist.id !== parseInt(e.target.value))
        deleteArtists.push(e.target.value)
        setUpdatedConcert({
            ...updatedConcert,
            artists: filteredArtists
        })
        
    }

    function handleNewArtist(e) {
        e.preventDefault()
        const newArtist = artists.filter(artist => artist.id === parseInt(e.target.value) + 1)
        console.log(newArtist)
        setUpdatedConcert({
            ...updatedConcert,
            artists: [...updatedConcert.artists, newArtist[0]]
        })
        setNewArtist(false)
    }

    function handleArtistAdd(e) {
        e.preventDefault()
        if (updatedConcert.artists.length < 3) {
            setNewArtist(!newArtist)
        }else{
            setErrors("You can only add 3 artists at this time")
        }
    }
    const artistcards = updatedConcert.artists.map(artist => <li key={artist.id} className='artists'>{artist.name}<button value={artist.id} onClick={handleArtistDelete}>x</button></li>)
    

    // option to delete artists, and add new artist, dont change existing
    if (updatedConcert) {
        return (
            <form className='concert-form' onSubmit={handleSubmit}>
                <h1>Update Your Concert</h1>
                {errors ? <h2 className='error'>{errors}</h2> : null}
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
                    <ul>
                        {artistcards}
                    </ul>
                    {newArtist ? <select name='artists' onChange={handleNewArtist} >
                    {artists.map((artist, index) => <option key={index} value={index} >{artist.name}</option>)}
                    </select> : null}
                    <button onClick={handleArtistAdd}>Add Artist</button>
                </div>
                <input type={"submit"} value={"update concert"}/>
            </form>
    )
    }else {
        <h1>Loading...</h1>
    }
   
}

export default UpdateConcert