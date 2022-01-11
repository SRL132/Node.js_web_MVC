import React from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../context/auth/reducer'

export default function NavBar() {
    const { logout, currentUser } = useAuth()

    async function handleLogout() {
        try {
            await logout()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/home" replace className="navbar-brand">Haroonify</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="Home">Home</a>
                        </li>
                        <li className="nav-item">
                            {currentUser === null ? <a className="nav-link" href="Login">Log In</a> : <a className="nav-link" href="Login" onClick={handleLogout} >Log Out</a>}
                        </li>
                        <li className="nav-item">
                            {currentUser === null ? <a className="nav-link" href="">Register</a> : <a className="nav-link" href="updateprofile">Profile</a>}
                        </li>
                        <li className="nav-link">Best PC components in the world!</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
