import Product from './Product';
import { ProductType } from "../types/index";


interface ProductsProp {
  products: ProductType[],
  onDelete: (id: string) => void,
  onEdit: (product: ProductType, callback?: () => void ) => void,
  onAddToCart: (product: ProductType, callback?: () => void) => void
}

const Products = ({ products, onDelete, onEdit, onAddToCart }: ProductsProp) => {
  return (
    <>
      <div className="product-listing">
        <h2>Products</h2>
        <ul className="product-list">
          {products.map(prod => {
            return <Product key={prod._id} {...prod} onDelete={onDelete} onEdit={onEdit} onAddToCart={onAddToCart}/>
          })}
        </ul>
      </div>
      <p>
        <button className="add-product-button">Add A Product</button>
      </p>
    </>
);
}
 
export default Products;