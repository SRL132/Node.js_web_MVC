import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import { useAuth } from "context/auth/reducer";

import "./AppHeader.scss";

function AppHeader({ ...props }) {
  const { logout, currentUser } = useAuth();

  let navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">

            <Link to="/home" replace className="navbar-brand">
              Home
            </Link>

            {currentUser &&
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink
                    className={(navData) => navData.isActive ? "active nav-link" : "nav-link"}
                    to="/new-product"
                  >
                    New Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login" onClick={handleLogout}>
                    Log Out
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"
                    to="/updateprofile" >
                    Profile
                  </Link>
                </li>
              </ul>}

            {!currentUser &&
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">
                    Log In
                  </Link>
                </li>
              </ul>
            }

          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
