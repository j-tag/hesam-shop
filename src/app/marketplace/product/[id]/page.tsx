import { getProduct } from "@/app/actions/product"
import { notFound } from "next/navigation"
import Image from "next/image"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = getProduct(id)

  if (!product) return notFound()

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Image src={product.image} alt={product.name} width={200} height={200} />
    </>
  )
}
