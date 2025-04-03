import React from 'react'

function Register() {
    return (
        <div>
            <form>
                <div>
                    <span>About You</span>
                    <div>
                        <label>First Name</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Middle Name</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Gender</label>
                        <select name='Gender'>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Address</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Mobile number</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' />
                    </div>
                </div>
                <div>
                    <span>Account details</span>
                    <div>
                        <label>User ID</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Re-enter password</label>
                        <input type='text' />
                    </div>
                    <div>
                        <input type='submit' value='Register' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register