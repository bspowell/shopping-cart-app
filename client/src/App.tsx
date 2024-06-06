import { useState, useEffect } from 'react'
import './assets/index.css'
import './App.css'
import Cart from './components/Cart'
import Products from './components/Products'
import AddForm from './components/AddForm'
import { ProductType } from "./types/index";
import { NewProduct } from "./types/index";
import axios from 'axios';

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get<ProductType[]>('/api/products')
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
      await axios.delete(`/api/products/${id}`)
      
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
 

  return (
    <>
      <header>
        <Cart />
      </header>
      <main>
        <Products products={products} onDelete={handleDelete}/>
        <AddForm onSubmit={handleSubmit}/>
      </main>
    </>
  )
}

export default App
