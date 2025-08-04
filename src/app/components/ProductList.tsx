"use client"
import { useState } from "react"
import ProductCard from "./ProductCard"
import { Product } from "../types"
import { saveCart } from "../actions/cart"

export default function ProductList({
  products,
  initialCart,
}: {
  products: Product[]
  initialCart: Product[]
}) {
  const [cart, setCart] = useState<Product[]>(initialCart)

  return (
    <>
      <div>
        <h3>Your cart</h3>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
        <button onClick={() => saveCart(cart)}>Save Cart</button>
      </div>
      <br />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              onAddToCartAction={() => setCart([...cart, product])}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
