import React from 'react'
import { useState } from 'react'

const SignUp = ({setCurrentUser, setLoggedIn}) => {
    const [errors, setErrors] = useState()
    const [user, setUser] = useState({
        username: "",
        age: "",
        password: "",
        password_confirmation: ""
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
        fetch('/users', options)
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setCurrentUser(data)
                    setLoggedIn(true)
                })
            }else {
                res.json().then(error => {
                    console.log(error.errors)
                    const errorAr = []
                    for (const element in error.errors) {
                        errorAr.push(` - ${element} ${error.errors[element]} `)
                    }
                    setErrors(errorAr)

                    throw new Error(errors)
                })
            }
        })
    }

    
  return (
    <form className='artist-form' onSubmit={handleSubmit}>
        <h1>Sign up for Liveify!</h1>
        {errors ? <div className='error'>{errors}</div> : null}
        <div>
            <label htmlFor='username'>Username</label>
            <br/>
            <input id="username" name='username' type={"text"} value={user.username} onChange={handleChange}  />
        </div>
        <div>
            <label htmlFor='age'>Age</label>
            <br/>
            <input id="age" name='age' type={"text"} value={user.age} onChange={handleChange}  />
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <br/>
            <input id="password" name='password' type={"password"} value={user.password} onChange={handleChange}  />
        </div>
        <div>
            <label htmlFor='password_confirmation'>Confirm your Password</label>
            <br/>
            <input id="password_confirmation" name='password_confirmation' type={"password"}  value={user.password_confirmation} onChange={handleChange}  />
        </div>
        <br/>
        <input type={"submit"} value={"Sign Up"}/>
    </form>
  )
}

export default SignUp