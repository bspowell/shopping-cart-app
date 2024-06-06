import { SyntheticEvent } from "react";
import { useState } from 'react'
import EditForm from "./EditForm";

interface ProductProp {
  _id: string,
  title: string,
  price: number,
  quantity: number,
  onDelete: (id: string) => void;
}


const Product = ( { _id, title, price, quantity, onDelete }: ProductProp) => {
  const [showEditForm, setEditForm] = useState(false)

  const handleOnDelete = (e:SyntheticEvent) => {
    e.preventDefault()
    onDelete(_id)
  }

  const handleEditForm = (e:SyntheticEvent) => {
    e.preventDefault()
    showEditForm ? setEditForm(false) : setEditForm(true)
  }
  
  return (
    <li className="product">
      <div className="product-details">
        <h3 className='title'>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={handleEditForm}>Edit</button>
        </div>
        <button className="delete-button" onClick={handleOnDelete}><span>X</span></button>
      </div>
      { showEditForm && <EditForm product={{ title, price, quantity }} /> }
    </li>
);
}
 
export default Product;