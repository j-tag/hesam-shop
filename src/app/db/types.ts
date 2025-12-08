export type Product = {
  _id: string
  name: string
  description: string
  price: number
  image: string
}

export type CommentForm = { name: string; comment: string }
export type SavedCommentForm = CommentForm & { id: string }
