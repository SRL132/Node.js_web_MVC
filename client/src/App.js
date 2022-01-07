import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RecoverPassword from "./pages/RecoverPassword/RecoverPassword";
import { AuthContext } from "./context/auth/reducer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <AuthContext.Provider value={currentUser}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recoverpassword" element={<RecoverPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
