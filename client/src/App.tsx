import { useState, useEffect } from 'react'
import './assets/index.css'
import './App.css'
import Products from './components/Products'
import AddForm from './components/AddForm'
import { ProductType } from "./types/index";
import { NewProduct } from "./types/index";
import axios from 'axios';
import ShoppingCart from './components/ShoppingCart'
import * as ProductServices from "./services/products";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductServices.getProducts();
        setProducts(data)
      } catch(e) {
        console.error(e)
      }
    }
    fetchProducts()
  }, []);

  const handleSubmit = async (
    formData: NewProduct,
    callback?: () => void
  ) => {
    try {
      const response = await axios.post('/api/products', { ...formData } )
      setProducts((prevState) => prevState.concat(response.data));
      console.log('changed product state')
      // change state to re-render app with new products
      if (callback) {
        console.log('Callback ran')
        callback();
      }
    } catch(e) {
      console.error(e)
    }

  }

  const handleDelete = async (id: string, callback?: () => void ) => {
    try {
      await ProductServices.deleteProduct(id)
      
      // change state to re-render app with new products
      setProducts((prevState) => prevState.filter(product => product._id !== id))
      if (callback) {
        console.log('delete callback run')
        callback()
      }
    } catch(e) {
      console.error(e)
    }
  }

  // We are passing this handler down to the EditForm Component
  // We then pass back up the updated product information
  // We set the products to update with the new product info

  const handleEdit = async (updatedProduct: ProductType, callback?: () => void ) => {
    try {
      const response = await axios.put(`/api/products/${updatedProduct._id}`, updatedProduct)
      console.log('Product Updated: ', response.data)

      setProducts((prevProducts) => prevProducts.map(product => 
        product._id === response.data._id ? updatedProduct : product
      ))
      if (callback) {
        console.log('Edit callback ran')
        callback()
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleAddToCart = (product: ProductType, checkout?: () => void) => {
    try {
      console.log(checkout)
      // find product within list of cartItems, if there, add 1 to total
      const cart = cartItems
      setCartItems(() => cart.concat(product))

      // handle removing quantity
      // setProducts(prevProducts => prevProducts.filter(product => {

    } catch (e) {
      console.error(e)
    }
  }
 

  return (
    <>
      <header>
        <ShoppingCart cartItems={cartItems}/>
      </header>
      <main>
        <Products products={products} onDelete={handleDelete} onEdit={handleEdit} onAddToCart={handleAddToCart}/>
        <AddForm onSubmit={handleSubmit}/>
      </main>
    </>
  )
}

export default App
