import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "context/auth/reducer";
export default function PrivateRoute({ component: Component, ...rest }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return !user ? <Navigate to="/login" /> : <Outlet />;
}
