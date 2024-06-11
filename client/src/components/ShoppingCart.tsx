// import { useState } from "react";
import CartItems from './CartItems';
import { ProductType } from '../types/index';

interface ShoppingCartProps {
  cartItems: ProductType[]
}

const ShoppingCart = ({cartItems}: ShoppingCartProps ) => {

  // add ShoppingCart component to App.jsx
  // create handler to see if items have been addded to cart or not
  // when someone clicks Add To Cart on Product Page
  //  - run an event handler on the main app.tsx that adds a product to 
  //    cart state, which is then passed to shopping cart component
  //  - 
  console.log(cartItems)
  return ( 
    <>
    <h1>The Shop!</h1>
    <div className="cart">
      <h2>Your Cart</h2>
      { cartItems.length > 0 ? 
        (<CartItems cartItems={cartItems} />) : 
        <div>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
        </div>
      }
    </div>
    <div className="checkout-button">
      <button className="checkout">Checkout</button>
    </div>
  </>
   );
}
 
export default ShoppingCart;