import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [usernames, setUsernames] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [mobNo, setMobNo] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');

    useEffect(() => {
        fetch('http://localhost:9001/user/usernames').then(res => res.json()).then(res => setUsernames(res));
    }, []);

    const navigate = useNavigate();

    const addUser = (e) => {
        e.preventDefault();
        if (usernames.includes(username)) {
            alert('username already exists');
            return;
        }
        if (password !== reenterPassword) {
            alert('password missmatch');
            return;
        }
        const req = JSON.stringify({
            firstName, middleName, lastName, gender, address, mobNo, email, username, password
        });
        console.log('request: ', req);
        fetch('http://localhost:9001/user/add', {
            method: "POST",
            body: req,
            headers: {
                "Content-type": "application/json"
            }
        });
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setGender('');
        setAddress('');
        setMobNo('');
        setEmail('');
        setUsername('');
        setPassword('');
        setReenterPassword('');
        document.getElementById('selectgender').value = '';
        alert("user added")
        navigate(-1)
    }

    return (
        <div>
            <form className='register-form' onSubmit={addUser}>
                <div className='register-form-section'>
                    <span>About You</span>
                    <div>
                        <label>First Name</label>
                        <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label>Middle Name</label>
                        <input type='text' value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label>Gender</label>
                        <select id='selectgender' defaultValue='' name='Gender' onChange={(e) => { setGender(e.target.value); console.log(e.target.value) }} >
                            <option value="" disabled>Choose gender</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Address</label>
                        <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div>
                        <label>Mobile number</label>
                        <input type='text' value={mobNo} onChange={(e) => setMobNo(e.target.value)} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className='register-form-section'>
                    <span>Account details</span>
                    <div>
                        <label>Username</label>
                        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Re-enter password</label>
                        <input type='text' value={reenterPassword} onChange={(e) => setReenterPassword(e.target.value)} />
                    </div>
                </div>
                <button type='submit'>
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register