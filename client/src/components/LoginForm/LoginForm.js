import React, { useState } from 'react'
import { AuthContext } from '../../context/auth/reducer'

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);

    }

    return (
        <div className="container p-5">
            <h2 className='text-center'>Log In</h2>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail" placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                autoFocus
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword" placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                autoFocus
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Log in</button>
                    </form>
                </div>
                <p className='text-center'>Don't have an account? Register <a href="/register">here</a></p>
            </div>
        </div>
    )
}