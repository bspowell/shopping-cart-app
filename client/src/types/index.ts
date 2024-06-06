export interface Header {

}

export interface ProductType {
  _id: string,
  title: string,
  quantity: number,
  price: number
}


export interface Products {
  products: ProductType[]
}

export type NewProduct = Omit<ProductType, '_id'>