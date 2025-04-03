import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <form>
                <div>
                    <label>Username</label>
                    <input type='text' />
                </div>
                <div>
                    <label>Password</label>
                    <input type='text' />
                </div>
                <div>
                    <input type='submit' value='Login' />
                </div>
            </form>
            <div>
                New user? Click to <Link to='/register'>Register</Link>.
            </div>
        </div>
    )
}

export default Login