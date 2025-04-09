import React from 'react'
import { Link } from 'react-router-dom'
import useApp from '../../contexts/AppContext'

function Header() { 
    const { isLoggedIn, changeIsLoggedIn, loggedInUser } = useApp();
    const logout = (e) => {
        changeIsLoggedIn(false);
        window.localStorage.setItem('isLoggedIn', 'false');
        window.localStorage.removeItem('loggedInUser');
    }
    return (
        <div className='navbar-div'>
            <nav>
                <ul className='navbar-list'>
                    <li className='navbar-list-item' hidden={!isLoggedIn}><span>{loggedInUser?.firstName}</span></li>
                    <li className='navbar-list-item'><Link to='' className='navbar-list-link'>Home</Link></li>
                    <li className='navbar-list-item'><Link to='tariff' className='navbar-list-link'>Tariff Charts</Link></li>
                    <li className='navbar-list-item'><Link to='gallery' className='navbar-list-link'>Gallery</Link></li>
                    <li className='navbar-list-item'><Link to='rules' className='navbar-list-link'>Rules &amp; Regulations</Link></li>
                    <li hidden={isLoggedIn} className='navbar-list-item'><Link to='login' className='navbar-list-link'>Login/Register</Link></li>
                    <li hidden={!isLoggedIn} className='navbar-list-item'><Link onClick={logout} to='' className='navbar-list-link'>Logout</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header