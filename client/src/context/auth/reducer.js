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
  }

  async function login(email, password) {
    await auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    localStorage.setItem("user", "");
    setCurrentUser("");
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);

      localStorage.setItem("user", JSON.stringify(user));

      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  auth.onAuthStateChanged((user) => {
    setLoading(false);
    localStorage.setItem("user", JSON.stringify(user));
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
    updateEmail,
    updatePassword,
    setCurrentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
