import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CheckoutProvider } from '../../context/checkout/reducer';
export default function Checkout() {
    return (
        <CheckoutProvider>
            <BrowserRouter>
                <Routes>
                    {/* CheckoutHeader */}
                    {/* <Route path='/checkout' element={<CheckoutRedirect />} />
                    <Route path='/checkout/step-1' element={<CheckoutPersonalDetails/>} />
                    <Route path='/checkout/step-2' element={<CheckoutBillingDetails/>} />
                    <Route path='/checkout/step-3' element={<PaymentForm/>} />
                    <Route path='/checkout/step-4' element={<CheckoutOrderSummary />} />
                    <Route path='/checkout/step-5' element={<PurchaseCompleted />} /> */}
                </Routes>
                <div>
                    {/* CheckoutItemList */}
                </div>
            </BrowserRouter>
        </CheckoutProvider>
    )
}
