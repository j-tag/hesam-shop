import { CommentForm } from "@/app/lib/schema"

export type Product = {
  _id: string
  name: string
  description: string
  price: number
  image: string
}

export type SavedCommentForm = CommentForm & { id: string }
