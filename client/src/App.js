import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  CheckoutDelivery,
  CheckoutInfo,
  CheckoutPayment,
  Home,
  Login,
  NewProduct,
  Register,
  ResetPassword,
  CheckoutCompleted,
} from "components/pages";

import { AuthProvider } from "context/auth/reducer";
import PrivateRoute from "components/UI/PrivateRoute";
import UpdateProfileForm from "components/UI/UpdateProfileForm";
// import Checkout from "components/pages/Checkout";

import { useCartItems, useProducts } from "context";

import useLocalStorage from "hooks/useLocalStorage";

const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

function App() {
  const { products } = useProducts();
  const { cartItems } = useCartItems();

  const [currentUser, setCurrentUser] = useState(null);

  useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
  useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);

  return (
    <AuthProvider value={currentUser}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<PrivateRoute />} >
            <Route path='/home' element={<Home />} />
          </Route>
          <Route path='/updateprofile' element={<PrivateRoute />} >
            <Route path='/updateprofile' element={<UpdateProfileForm />} />
          </Route>
          <Route path='/new-product' element={<PrivateRoute />} >
            <Route exact strict path='/new-product' element={<NewProduct />} />
          </Route>
          <Route path="/recoverpassword" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path='/checkout' element={<PrivateRoute />} >
            <Route exact strict path='/checkout' element={<CheckoutInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
