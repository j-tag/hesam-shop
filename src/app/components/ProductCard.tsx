"use client"
import Image from "next/image"
import { Product } from "../types"
import Link from "next/link"

export default function ProductCard({
  product,
  onAddToCartAction,
}: {
  product: Product
  onAddToCartAction: () => void
}) {
  return (
    <div className="product-card">
      <Image src={product.image} alt={product.name} width={100} height={100} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p style={{ color: product.price > 20 ? "red" : "green" }}>
        ${product.price}
      </p>
      <button onClick={onAddToCartAction}>Add to Cart</button>
      <Link href={`/marketplace/product/${product.id}`}>View Details</Link>
    </div>
  )
}
