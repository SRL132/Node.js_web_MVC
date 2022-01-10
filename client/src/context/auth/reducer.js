import React from "react";
import firebase from "firebase/compat/app";
import { createContext, useContext, useState, useEffect } from "react";

import { auth } from "../../services/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function loginWithGoogle() {
    const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(GoogleAuthProvider);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  auth.onAuthStateChanged((user) => {
    setLoading(false);
    setCurrentUser(user);
  });

  const value = {
    currentUser,
    register,
    loading,
    login,
    logout,
    resetPassword,
    loginWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
