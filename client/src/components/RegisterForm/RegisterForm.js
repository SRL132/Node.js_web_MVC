import React, { useState } from 'react'
// import { AuthContext } from '../../context/auth/reducer'
// import { auth } from '../../firebase/firebase.js'
// import { createOrUpdateUser } from '../../utils/auth'

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        // queries.registerUser(email, password)
        // try {
        //     const user = true;
        //     createOrUpdateUser(email, password)
        //         .then(res => console.log(res))
        //         .catch(err => {
        //             console.log(err)
        //         })
        // }
        // catch (err) {
        //     console.log(err)
        // }
    }

    return (
        <div className="container p-5">
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

                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}