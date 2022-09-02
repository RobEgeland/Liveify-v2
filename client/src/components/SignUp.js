import React from 'react'
import { useState } from 'react'

const SignUp = () => {
    const [errors, setErrors] = useState(null)
    const [user, SetUser] = useState({
        username: "",
        age: "",
        password: "",
        password_confirmation: ""
    })

    function handleChange(e) {
        SetUser({
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
                res.json().then(data => console.log(data))
            }else {
                res.text().then(error => {
                    setErrors(error)
                    // setError(error)
                    throw new Error(errors)
                })
            }
        })
        // .catch(error => window.onerror(error))
        
    }

    
  return (
    <form onSubmit={handleSubmit}>
        <h1>Sign up for Liveify!</h1>
        {errors ? <div>{errors}</div> : null}
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
        <input type={"submit"} value={"create concert"}/>
    </form>
  )
}

export default SignUp