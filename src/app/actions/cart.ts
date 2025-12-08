"use server"
import { Product } from "@/app/db/types"
import { redis } from "@/app/lib/redis"

export async function getCart(): Promise<Product[]> {
  const value = await redis.get("cart-test-username")

  if (!value) {
    return []
  }

  return JSON.parse(value)
}

export async function saveCart(products: Product[]) {
  redis.set("cart-test-username", JSON.stringify(products)).catch(console.error)
  return null
}
