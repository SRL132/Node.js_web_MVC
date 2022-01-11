import React from "react";
import firebase from "firebase/compat/app";
import { createContext, useContext, useState, useEffect } from "react";
import { syncUserData } from "../../services/utils";

import { auth } from "../../services/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function register(email, password) {
    await auth.createUserWithEmailAndPassword(email, password);

    const res = await syncUserData();
    setCurrentUser(res.data.userId);
  }

  async function loginWithGoogle() {
    const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(GoogleAuthProvider);

    const res = await syncUserData();
    setCurrentUser(res.data.userId);
  }

  async function login(email, password) {
    await auth.signInWithEmailAndPassword(email, password);

    const res = await syncUserData();
    console.log(res.data.userId);
    // setCurrentUser(res.data.userId);
  }
  function logout() {
    setCurrentUser("");
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);

      //setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  auth.onAuthStateChanged((user) => {
    setLoading(false);
    //setCurrentUser(user);
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
