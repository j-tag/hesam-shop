import { readFile } from "node:fs/promises"
import ProductList from "../components/ProductList"
import { getProducts } from "../actions/product"

export default async function Page() {
  const data = await readFile("/tmp/cart.json", "utf8")
  const products = getProducts()

  return <ProductList products={products} initialCart={JSON.parse(data)} />
}
