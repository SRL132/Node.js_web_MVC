import React from 'react'


export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Haroonify</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Login">Log In</a>
                        </li>
                        <li className="nav-link">Best PC components in the world!</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
