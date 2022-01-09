import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth/reducer';


export default function RecoverPasswordForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const { resetPassword } = useAuth();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setMessage("");
            setError("");
            setLoading(true);
            await resetPassword(email);
            setMessage("Password reset email sent");
        }
        catch {
            setError('failed to reset password')
        }
        setLoading(false);
    }

    return (
        <div className="container p-5">
            <h2 className='text-center'>Recover Password</h2>
            {error && <p className='text-center danger'>{error}</p>}
            {message && <p className='text-center success'>{message}</p>}

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
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Reset Password</button>
                    </form>
                </div>
                <p className='text-center'>Don't have an account? Register <a href="/register">here</a></p>
                <p className='text-center'>Already have an account? Login <a href="/login">here</a></p>
            </div>
        </div>
    )
}
