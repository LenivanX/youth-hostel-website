import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useApp from '../../contexts/AppContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { changeIsLoggedIn } = useApp();
    const navigate = useNavigate();
    const onLogin = (e) => {
        e.preventDefault();
        console.log({ username, password })
        fetch('http://localhost:9001/user/login', {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json()).then(obj => {
            if (obj != null) {
                changeIsLoggedIn(true);
                console.log('login success')
                window.localStorage.setItem('isLoggedIn', true);
                window.localStorage.setItem('loggedInUser', JSON.stringify(obj));
                navigate('/');
            } else {
                alert('incorrect username/password')
            }
        });
    }
    return (
        <div className='login'>
            <form onSubmit={onLogin} className='login-form'>
                <div>
                    <label>Username</label>
                    <input value={username} type='text' onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input value={password} type='text' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <div className='login-register'>
                New user? Click to <Link className='login-register-link' to='/register'>Register</Link>.
            </div>
        </div>
    )
}

export default Login