import React from "react";
import { NavLink } from "react-router-dom";

import { ShoppingCartItem } from "components/UI/molecules";
import { Button } from "components/UI/atoms";

import { useCartItems } from "context";
import productsApi from "api/products";



function Cart({ ...props }) {
  const { cartItems, cartItemIds } = useCartItems();
  const getCartTotal = () => {

    return cartItemIds.reduce((accum, cartItemId) => {
      const carItem = cartItems[cartItemId];
      return accum + carItem.price * carItem.quantity;
    }, 0);
  }

  function itemCheckout() {
    console.log(cartItems)
    console.log("checking items out")
    const checkoutItems = cartItemIds.map(cartItemId => {
      const cartItem = cartItems[cartItemId];
      console.log(cartItem.id)
    })

  }
  return (
    <aside {...props}>
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Shopping Cart</h2>
          <hr className="mb-3" />
        </div>

        {cartItemIds.length > 0 ? (
          cartItemIds.map((itemId) => {
            const item = cartItems[itemId];

            return (
              <ShoppingCartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                img={item.img}
                quantity={item.quantity}
                unitsInStock={item.unitsInStock}
              />
            );
          })
        ) : (
          <div className="col mb-4">
            <h4>Your cart is empty</h4>
          </div>
        )}
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between">
                <h4 className="h5">Total</h4>
                <h4>
                  <strong>{getCartTotal()}€</strong>
                </h4>
              </div>
              <hr />
            </div>
            <div className="col">
              <NavLink
                className={cartItemIds.length == 0 ? "active" : ""}
                className="navbar-brand"
                to={cartItemIds.length == 0 ? "/home" : "/checkout"}
              >
                <Button disabled={cartItemIds.length == 0 ? true : false} onClick={itemCheckout}>
                  Checkout
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Cart;
