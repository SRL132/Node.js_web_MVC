
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/auth/reducer';


export default function UpdateProfileForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (password === passwordConfirm) {
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
                navigate('/home')
            }).catch(() => {
                setError('Failed to update profile')
            }).finally(() => {
                setLoading(false);
            })
        }
        setLoading(false);
    }

    return (
        <div className="container p-5">
            <h2 className='text-center'>Update Profile</h2>
            {currentUser && <div variant="success">{currentUser.email} is logged in</div>}
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
                                defaultValue={currentUser.email}
                                autoFocus
                                required
                            />
                            <label htmlFor="inputPassword">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword" placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                defaultValue={currentUser.password}
                                placeholder="Leave blank to keep the same"
                                autoFocus

                            />
                            <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputConfirmPassword" placeholder="Password"
                                value={passwordConfirm}
                                onChange={e => setPasswordConfirm(e.target.value)}
                                placeholder="Leave blank to keep the same"
                                autoFocus
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
