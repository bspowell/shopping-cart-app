import { SyntheticEvent } from "react";
import { useState } from 'react'
import EditForm from "./EditForm";
import { ProductType } from '../types/index'

interface ProductProp {
  _id: string,
  title: string,
  price: number,
  quantity: number,
  onDelete: (id: string) => void,
  onEdit: (product: ProductType, callback?: () => void ) => void,
  onAddToCart: (product: ProductType, callback?: () => void) => void
}


const Product = ( { _id, title, price, quantity, onDelete, onEdit, onAddToCart }: ProductProp) => {
  const prod = { _id, title, price, quantity }
  const [showEditForm, setShowEditForm] = useState(false)
  // const [toggleQuantity, setToggleQuantity] = useState(0)

  const handleOnDelete = (e:SyntheticEvent) => {
    e.preventDefault()
    onDelete(_id)
  }

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm)
  }
  
  const handleAddToCart = () => {
    onAddToCart(prod, handleAddToCart)
  }


  return (
    <li className="product">
      <div className="product-details">
        <h3 className='title'>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          <button className="edit" onClick={toggleEditForm}>Edit</button>
        </div>
        <button className="delete-button" onClick={handleOnDelete}><span>X</span></button>
      </div>
      { showEditForm && <EditForm product={prod} onEdit={onEdit} toggleEditForm={toggleEditForm} /> }
    </li>
);
}
 
export default Product;