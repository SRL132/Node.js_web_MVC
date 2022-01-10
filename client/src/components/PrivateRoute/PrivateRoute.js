import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import { useAuth } from '../../context/auth/reducer'
export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()

    return !currentUser ? <Navigate to="/login" /> : <Outlet />;
}

