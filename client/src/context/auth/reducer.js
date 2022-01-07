import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../../firebase/firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)


    function register(email, password) {
        return auth.CreateUserWithEmailAndPassword(email, password)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {

            setCurrentUser(user)

        })
        return unsubscribe
    }, [])
    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })

    const value = {
        currentUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

