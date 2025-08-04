"use server"
import { Product } from "../types"
import { writeFile } from "node:fs"

export async function saveCart(products: Product[]) {
  const filePath = "/tmp/cart.json"
  const textContent = JSON.stringify(products)

  writeFile(filePath, textContent, (err) => {
    if (err) {
      console.error("Error writing to file:", err)
      return
    }
    console.log("Cart successfully saved to", filePath)
  })
}
