// import { ProductType } from "../types/index";

import { useState } from "react";
import { ProductType } from "../types";

interface EditFormProps {
    product: {
      _id: string,
      title: string,
      price: number,
      quantity: number
    },
    onEdit: (product: ProductType, callback?: () => void ) => void,
    toggleEditForm: () => void
}

const EditForm = ( { product, onEdit, toggleEditForm }: EditFormProps ) => {
  const [title, setTitle] = useState(product.title)
  const [price, setPrice] = useState(product.price)
  const [quantity, setQuantity] = useState(product.quantity)


  return ( 
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onEdit({ _id: product._id, title, price, quantity }, toggleEditForm)
        }}
      >
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            aria-label="Product Name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={price}
            aria-label="Product Price"
            onChange={(e) => setPrice(+e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            aria-label="Product Quantity"
            onChange={(e) => setQuantity(+e.target.value)}
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={toggleEditForm}>Cancel</button>
        </div>
      </form>
    </div>
   );
}
 
export default EditForm;