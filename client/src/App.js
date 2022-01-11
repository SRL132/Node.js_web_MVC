import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from "./context/auth/reducer";
import { NavBar } from "./components";
import { Home, Login, Register, ResetPassword } from "./pages";
import PrivateRoute from "./components/PrivateRoute";
import UpdateProfileForm from "./components/UpdateProfileForm";
import Checkout from "./pages/Checkout";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AuthProvider value={currentUser}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<PrivateRoute />} >
            <Route path='/home' element={<Home />} />
          </Route>
          <Route path='/updateprofile' element={<PrivateRoute />} >
            <Route path='/updateprofile' element={<UpdateProfileForm />} />
          </Route>
          <Route path="/recoverpassword" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path='/checkout' element={<PrivateRoute />} >
            <Route path='/checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
