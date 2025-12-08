import ProductList from "../components/ProductList"
import { getProducts } from "../actions/product"
import { getCart } from "@/app/actions/cart"

export default async function Page() {
  const data = await getCart()
  const products = await getProducts()

  return <ProductList products={products} initialCart={data} />
}
