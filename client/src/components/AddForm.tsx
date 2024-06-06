import { useState } from 'react'
import { NewProduct } from "../types/index";

interface AddFormProps {
  onSubmit: ( formData: NewProduct, callback?: () => void ) => void;
}

const AddForm = ( { onSubmit }: AddFormProps ) => {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);


  const reset = () => {
    setTitle('')
    setPrice(0)
    setQuantity(0)
  }

  return ( 
    <div className="add-form">
      <form 
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ title, price, quantity }, reset)
        }}
      >
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            required
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            required
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
}
 
export default AddForm;