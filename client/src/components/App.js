import React from 'React'
import { mockCart, mockProducts } from "../../mockData/data"
import Product from "./Product"
import Cart from "./Cart"


export default function App() {
    return (
        <div>
            <h1>Shopping App</h1>
            <h2>Products</h2>
            {mockProducts.map(product => {
                <Product key={product._id} product={product} />
            })}
            <hr />
            <Cart cart={mockCart} />

        </div>
    )
}