import Image from "next/image"
import { Product } from "../types"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <Image src={product.image} alt={product.name} width={100} height={100} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p style={{ color: product.price > 20 ? "red" : "green" }}>
        ${product.price}
      </p>
    </div>
  )
}
