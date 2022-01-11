import React from "react";
import { NavLink } from "react-router-dom";

import "./AppHeader.scss";

function AppHeader({ ...props }) {
  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">

            <NavLink
              className={(navData) => navData.isActive ? "active nav-brand" : "nav-brand"}
              to="/"
            >
              Home
            </NavLink>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  className={(navData) => navData.isActive ? "active nav-link" : "nav-link"}
                  to="/new-product"
                >
                  New Product
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
