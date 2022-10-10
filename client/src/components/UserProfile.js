import React from 'react'
import PersonalConcert from './PersonalConcert'

const UserProfile = ({currentUser, concerts, setConcerts}) => {
    const userConcerts = concerts.filter(concert => concert.user.username === currentUser.username)

    function handleDelete(id) {
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
        const options = {
            method: "DELETE",
            headers
        }
        fetch(`/concerts/${id}`, options)
        .then(res => res.json())
        .then(data => console.log(data))
        const filteredConcerts = concerts.filter(concert => concert.id !== id)
        setConcerts(filteredConcerts)
    }
    const userConcertCards = userConcerts.map(concert => <PersonalConcert concert={concert} handleDelete={handleDelete}  />)
    if (concerts) {
        return (
            <div>
                <h1>Hello, {currentUser.username}!</h1>
                <ul>
                    <li>{userConcertCards}</li>
                </ul>
            </div>
        )
    }else {
        return (
            <h1>Loading...</h1>
        )
    }
}

export default UserProfile