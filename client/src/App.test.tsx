import { describe, it, expect, vi } from 'vitest'
import * as ProductService from './services/products'
import { render, screen } from '@testing-library/react'
import App from './App'

vi.mock('./services/products.tsx')
const mockedGetProducts = vi.mocked(ProductService.getProducts, true)
const mockProducts = [
  {
    price: 649.99,
    quantity: 0,
    title: "Apple 11.5-Inch iPad Pro",
    _id: "6660a2637f1875902706d432",
  },
  {
    price: 1500.00,
    quantity: 0,
    title: "MacBook Air",
    _id: "325325",
  }
]


describe('App', () => {
  it('should display all products', async () => {
    mockedGetProducts.mockResolvedValue(mockProducts)
    render(<App />)
    await ProductService.getProducts()
    const productTitle = await screen.findByText('Apple 11.5-Inch iPad Pro');
    const productTitle2 = await screen.findByText('MacBook Air');

    expect(productTitle).toBeInTheDocument()
    expect(productTitle2).toBeInTheDocument()
  })

  // it('should delete product when delete is clicked', () => {
  //   const mockDelete = 
  //   const mockedDeleteProduct = vi.mocked(ProductService.deleteProduct)
  // })
})

