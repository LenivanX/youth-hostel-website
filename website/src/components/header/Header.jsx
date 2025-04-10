import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useApp from '../../contexts/AppContext'

function Header() {
    const { isLoggedIn, changeIsLoggedIn, loggedInUser } = useApp();
    const logout = () => {
        changeIsLoggedIn(false);
        window.localStorage.setItem('isLoggedIn', 'false');
        window.localStorage.removeItem('loggedInUser');
    }
    return (
        <div className='navbar-div'>
            <nav>
                <ul className='navbar-list'>
                    <li className='navbar-list-item' hidden={!isLoggedIn}><span>{loggedInUser?.firstName}</span></li>
                    <li className='navbar-list-item'><NavLink to='' className={({ isActive }) => `navbar-list-link ${isActive ? `navlink-active` : `navlink-inactive`}`}>Home</NavLink></li>
                    <li className='navbar-list-item'><NavLink to='tariff' className={({ isActive }) => `navbar-list-link ${isActive ? `navlink-active` : `navlink-inactive`}`}>Tariff Charts</NavLink></li>
                    <li className='navbar-list-item'><NavLink to='gallery' className={({ isActive }) => `navbar-list-link ${isActive ? `navlink-active` : `navlink-inactive`}`} >Gallery</NavLink></li>
                    <li className='navbar-list-item'><NavLink to='rules' className={({ isActive }) => `navbar-list-link ${isActive ? `navlink-active` : `navlink-inactive`}`}   >Rules &amp; Regulations</NavLink></li>
                    <li hidden={isLoggedIn} className='navbar-list-item'><NavLink to='login' className={({ isActive }) => `navbar-list-link ${isActive ? `navlink-active` : `navlink-inactive`}`}   >Login/Register</NavLink></li>
                    <li hidden={!isLoggedIn} className='navbar-list-item'><NavLink onClick={logout} to='login' className={({ isActive }) => `navbar-list-link ${isActive ? `navlink-active` : `navlink-inactive`}`} > Logout</NavLink></li>
                </ul>
            </nav>
        </div >
    )
}

export default Header