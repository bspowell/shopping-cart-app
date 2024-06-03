import React from 'react';
import { mockProducts } from "../../mockData/data"

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