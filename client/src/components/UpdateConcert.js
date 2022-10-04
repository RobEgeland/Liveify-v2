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
    function handleChange(e) {
        setUpdatedConcert({
            ...updatedConcert,
            [e.target.name]: e.target.value
        })

    }

    function handleSubmit() {

    }

    function handleArtistChange() {

    }
    const artistcards = updatedConcert.artists.map(artist => <li key={artist.id} className='artists'>{artist.name}<button>x</button></li>)
    

    // option to delete artists, and add new artist, dont change existing
    if (updatedConcert) {
        return (
            <form className='concert-form' onSubmit={handleSubmit}>
                <h1>Update Your Concert</h1>
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
                </div>
                <input type={"submit"} value={"update concert"}/>
            </form>
    )
    }else {
        <h1>Loading...</h1>
    }
   
}

export default UpdateConcert