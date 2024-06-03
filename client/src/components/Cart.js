import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h3>Cart item: {cart.title}</h3>
            <p>Quantity: {cart.quantity}</p>
            <p>Price: {cart.price}</p>
        </div>
    )
}

export default Cart