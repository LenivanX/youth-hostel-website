import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { AppContext } from './contexts/AppContext'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState();
    const [loggedInUser, setLoggedInUser] = useState();
    const changeIsLoggedIn = (login) => setIsLoggedIn(login);
    const changeLoggedInUser = (user) => setLoggedInUser(user);
    useEffect(() => {
        let login = window.localStorage.getItem('isLoggedIn');
        let user = JSON.parse(window.localStorage.getItem('loggedInUser'));
        if (login != null) {
            setIsLoggedIn(login === 'true')
            if (user != null) {
                setLoggedInUser(user);
            }
        }

    }, [isLoggedIn])
    return (
        <AppContext value={{ isLoggedIn, changeIsLoggedIn, loggedInUser, changeLoggedInUser }}>
            <Header />
            <Outlet />
            <Footer />
        </AppContext>
    )
}

export default App