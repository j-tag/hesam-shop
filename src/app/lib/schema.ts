import { z } from "zod"

export const CommentFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(69, "Name is too long"),
  comment: z
    .string()
    .min(10, "Comment must be at least 10 characters")
    .max(609, "Comment is too long"),
})

export type CommentForm = z.infer<typeof CommentFormSchema>
