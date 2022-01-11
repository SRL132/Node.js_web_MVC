
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'context/auth/reducer';

export default function UpdateProfileForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return setError('passwords do not match');
        }
        const promises = [];
        setLoading(true);
        setError('');
        if (email !== currentUser.email) {
            promises.push(updateEmail(email));
        }
        if (password !== currentUser.password) {
            promises.push(updatePassword(password));
        }
        Promise.all(promises).then(() => {
            navigate('home')
        }).catch(() => {
            setError('Failed to update profile')
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <div className="container p-5">
            <h2 className='text-center'>Update Profile</h2>
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
                                onChange={e => setEmail(e.target.value)}
                                defaultValue={currentUser.email}
                                required
                            />
                            <label htmlFor="inputPassword">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword" placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Leave blank to keep the same"

                            />
                            <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputConfirmPassword" placeholder="Password"
                                value={passwordConfirm}
                                onChange={e => setPasswordConfirm(e.target.value)}
                                placeholder="Leave blank to keep the same"
                            />
                        </div>

                        <button disabled={loading} type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
                <p className='text-center'> <a href="/login">Cancel</a></p>
            </div>
        </div>
    )
}
