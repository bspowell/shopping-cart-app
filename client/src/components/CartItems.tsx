// import React from 'react'
import CartItem from './CartItem'
import { ProductType } from '../types';

interface CartItemsProps {
  cartItems: ProductType[]
}

const CartItems = ({ cartItems }: CartItemsProps ) => {

  const calculateTotal = (cartItems: ProductType[]) => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return parseFloat(total.toFixed(2));
  };

    return (  
      <>
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>  
          { cartItems.map(product => {
            return <CartItem key={product._id} {...product} />
          }) }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="total">Total: ${calculateTotal(cartItems)}</td>
          </tr>
        </tfoot>
      </table>
      </>
    );
}
 
export default CartItems;

/* <tr>
<td>Amazon Kindle E-reader</td>
<td>2</td>
<td>$79.99</td>
</tr>
<tr>
<td>Apple 10.5-Inch iPad Pro</td>
<td>1</td>
<td>$649.99</td>
</tr> */