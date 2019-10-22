import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = () => {
        alert(`Username: ${username} Password: ${password}`)
    }

    return (
        <div>
            <input onChange={e => setUsername(e.target.value)}></input>
            <input onChange={e => setPassword(e.target.value)}></input>
            <button onClick={login}>Login</button>
        </div>
    )
}
export default Login