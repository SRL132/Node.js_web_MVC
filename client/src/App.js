import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from "./context/auth/reducer";
import { NavBar } from "./components";
import { Home, Login, Register, ResetPassword } from "./pages";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AuthProvider value={currentUser}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recoverpassword" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
