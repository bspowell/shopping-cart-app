import React from 'react';

const Product = ({ product }) => {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>Quantity: {product.quantity}</p>
            <p>Price: {product.price}</p>
        </div>
    )
}

export default Product