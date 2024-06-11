import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Product from './Product'
import { ProductType } from '../types/index';

const mockProduct: ProductType = {
  price: 649.99,
  quantity: 0,
  title: "Apple 11.5-Inch iPad Pro",
  _id: "6660a2637f1875902706d432",
}
const mockOnDelete = vi.fn()
const mockOnEdit = vi.fn()
const mockOnAddToCart = vi.fn()



describe('Product component', () => {
  it('should not show edit form', async () => {
    render(
      <Product 
        {...mockProduct}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
        onAddToCart={mockOnAddToCart}
      />
    )
    const editHeading = screen.queryByRole('heading', { name: /Edit Product/})
    expect(editHeading).not.toBeInTheDocument();
  })

  it('should show eidt form when edit button is clicked', async () => {
    render(
      <Product 
        {...mockProduct}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
        onAddToCart={mockOnAddToCart}
      />
    )
    const editButton = await screen.findByRole('button', { name: 'Edit' })
    const user = userEvent.setup()
    await user.click(editButton)
    const editHeading = screen.queryByRole('heading', { name: /Edit Product/})
    expect(editHeading).toBeInTheDocument()
  })
})