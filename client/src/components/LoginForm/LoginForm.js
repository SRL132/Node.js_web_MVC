import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/auth/reducer";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loading, login, currentUser } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/home");
    } catch {
      setError("Something went wrong");
    }
  }

  return (
    <div className="container p-5">
      <h2 className="text-center">Log In</h2>
      {error && <p className="text-center danger">{error}</p>}
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </form>
        </div>
        <p className="text-center">
          Don't have an account? Register <a href="/register">here</a>
        </p>
        <p className="text-center">
          Forgot your password? Reset your password{" "}
          <a href="/recoverpassword">here</a>
        </p>
      </div>
    </div>
  );
}
