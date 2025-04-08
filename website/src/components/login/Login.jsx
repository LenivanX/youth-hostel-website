import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <form className='login-form'>
                <div>
                    <label>Username</label>
                    <input type='text' />
                </div>
                <div>
                    <label>Password</label>
                    <input type='text' />
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