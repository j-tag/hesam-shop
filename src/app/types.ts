export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export type CommentForm = { name: string; comment: string }
export type SavedCommentForm = CommentForm & { id: string }
