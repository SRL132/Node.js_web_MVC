import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'

const CheckoutContext= createContext()

export function useCheckout(){
    return useContext(CheckoutContext)
}

export function CheckoutProvider(){
    
}