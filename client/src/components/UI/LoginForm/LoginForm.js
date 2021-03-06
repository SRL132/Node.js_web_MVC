import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/UI/Button/Button";
import { useAuth } from "context/auth/reducer";
import { syncUserData } from "services/utils";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginWithGoogle, login, setCurrentUser } = useAuth();

  let navigate = useNavigate();

  async function handleLoginWithGoogleClick(e) {
    e.preventDefault();

    try {
      await loginWithGoogle();
      console.log("before sync");
      const res = await syncUserData();

      console.log("after sync");
      setCurrentUser(res.data.userId);

      navigate("/home", { replace: true });
    } catch {
      setError("User not found");
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(email, password);
      console.log("before sync");
      const res = await syncUserData();

      console.log("after sync");
      setCurrentUser(res.data.userId);

      navigate("/home", { replace: true });
    } catch (err) {
      setError("Something went wrong");
      console.log(err);
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
        <hr />
        <div className="col text-center">
          <h2 className="h5">Login with Google</h2>
          <div className="col">
            <Button onClick={handleLoginWithGoogleClick}>
              Login With Google
            </Button>
          </div>
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
