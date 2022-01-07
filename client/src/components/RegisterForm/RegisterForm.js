import { Alert } from 'bootstrap';
import React, { useState } from 'react'

import { useAuth } from '../../context/auth/reducer';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const { register } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === passwordConfirm) {
            console.log(email, password, passwordConfirm);
            try {
                setLoading(true);
                register(email, password);


            } catch {
                setError('Something went wrong')
            }
        } else {
            return setError('Passwords do not match');
        }
        setLoading(false);



    }

    return (
        <div className="container p-5">
            <h2 className='text-center'>Log In</h2>
            {error && <p className='text-center danger'>{error}</p>}
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
                            <label htmlFor="inputPassword">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword" placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                autoFocus
                            />
                            <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputConfirmPassword" placeholder="Password"
                                value={passwordConfirm}
                                onChange={e => setPasswordConfirm(e.target.value)}
                                autoFocus
                            />
                        </div>

                        <button disabled={loading} type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
                <p className='text-center'>Already have an account? Login <a href="/login">here</a></p>
            </div>
        </div>
    )
}