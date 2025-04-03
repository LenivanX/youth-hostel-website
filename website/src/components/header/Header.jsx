import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to=''>Home</Link></li>
                    <li><Link to='tariff'>Tariff</Link></li>
                    <li><Link to='gallery'>Gallery</Link></li>
                    <li><Link to='rules'>Rules &amp; Regulations</Link></li>
                    <li><Link to='login'>Login/Register</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header