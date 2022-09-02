import React from 'react'
import { useState } from 'react'

const LogIn = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    function handleChange(e) {
        setUser({
            ...user,
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
            body: JSON.stringify(user)
        }
        fetch('/login', options)
        .then(res => {
            if(res.ok){
                res.json().then(data => console.log(data))
                setLoggedIn(true)
            }else {
                res.text().then(error => {
                    throw new Error(error)
                })
            }
        })
        // .catch(error => window.onerror(error))
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        {loggedIn ? <div>Hello {user.username}</div> : null}
        <div>
                <label htmlFor='username'>Username</label>
                <br/>
                <input id="username" name='username' type={"text"} value={user.username} onChange={handleChange}  />
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <br/>
            <input id="password" name='password' type={"password"} value={user.password} onChange={handleChange}  />
        </div>
        <input type={"submit"} value={"Log In"}/>
    </form>
  )
}

export default LogIn