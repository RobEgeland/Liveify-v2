import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewArtist = ({ setArtists, artists }) => {
    const navigate = useNavigate()
    const [genres, setGenres] = useState([])
    const [errors, setErrors] = useState()
    const [newArtist, setNewArtist] = useState({
        name: "",
        band_members: "",
        band_img: "",
        genre_id: "",
        id: null
    })

    useEffect(() => {
        fetch('/genres')
        .then(res => res.json())
        .then(data => setGenres(data))
    }, [])

    const handleChange = (e) => {
        setNewArtist({
            ...newArtist,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
        const options = {
            method: "POST",
            headers,
            body: JSON.stringify({
                name: newArtist.name,
                band_members: parseInt(newArtist.band_members),
                band_img: newArtist.band_img,
                genre_id: parseInt(newArtist.genre_id)
            })
        }
        fetch('/artists', options)
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setArtists([...artists, data])
                })
                navigate("/artists")
            }else {
                res.json().then(error => {
                    console.log(error.errors)
                    setErrors(error.errors)
                    throw new Error(error)
                })
            }
        })
        
        
    }

    if (genres) {
        return (
            <form className='artist-form' onSubmit={handleSubmit}>
                <h1>Add an Artist</h1>
                {errors ? <h2 className='error'>{errors}</h2> : null}
                <div >
                    <label htmlFor='name'>Artist Name</label>
                    <br/>
                    <input id="name" name='name' type={"text"} value={newArtist.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='band_members'>Band Members</label>
                    <br/>
                    <input id='band_members' name='band_members' type={"text"} value={newArtist.band_members} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='band_img'>Band Picture</label>
                    <br/>
                    <input id='band_img' name='band_img' type={"text"} value={newArtist.band_img} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='genre_id'>Artist Genre</label>
                    <select name='genre_id' onChange={handleChange}>
                    <option value='' disabled selected hidden>Genres</option>
                    {genres.map((genre, index) => <option key={index} value={genre.id} >{genre.name}</option>)}
                    </select>
                </div>
                <br></br>
                <input type={"submit"} value={"Add Artist"}/>
            </form>
        )
    } else {
        <h1>Loading...</h1>
    }
}

export default NewArtist