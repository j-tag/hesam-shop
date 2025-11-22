import { getProduct } from "@/app/actions/product"
import { notFound } from "next/navigation"
import Image from "next/image"
import CommentForm from "@/app/components/CommentForm"
import { getComments } from "@/app/actions/comments"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = getProduct(id)

  if (!product) return notFound()

  const comments = await getComments()

  return (
    <>
      <h1>Product: {product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Image src={product.image} alt={product.name} width={200} height={200} />
      <CommentForm comments={comments} />
    </>
  )
}
