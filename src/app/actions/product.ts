import { mongo } from "@/app/lib/mongo"
import { Product } from "@/app/db/types"

export async function getProducts() {
  return mongo
    .collection<Product>("products")
    .find()
    .sort({ price: 1 })
    .toArray()
}

export function getProduct(id: string) {
  return mongo.collection<Product>("products").findOne({ _id: id })
}
