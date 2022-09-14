import React from 'react'
import Concert from './Concert'

const UserProfile = ({currentUser, concerts}) => {
    const userConcertCards = concerts.filter(concert => concert.user.username === currentUser.username)

    return (
        <div>
            <h1>Hello, {currentUser.username}!</h1>
            <ul>
                <li>{userConcertCards.map(concert => <Concert concert={concert} />)}</li>
            </ul>
        </div>
    )
}

export default UserProfile