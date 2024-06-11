// We need to pass product 

import { ProductType } from "../types";

const CartItem = ({ title, quantity, price }: ProductType) => {
  return (
    <tr id={`cartItem-${title}`}>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${price}</td>
    </tr>
   );
}
 
export default CartItem;