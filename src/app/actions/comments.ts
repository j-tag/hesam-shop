"use server"

import { SavedCommentForm } from "@/app/db/types"
import { revalidatePath } from "next/cache"
import { mongo } from "@/app/lib/mongo"
import { CommentForm, CommentFormSchema } from "@/app/lib/schema"

export async function sendComment(
  prevState: CommentForm | null,
  values: CommentForm,
) {
  const validationResult = CommentFormSchema.safeParse(values)
  if (!validationResult.success) {
    return null
  }

  mongo
    .collection<{
      username: string
      comments: SavedCommentForm[]
    }>("comments")
    .updateOne(
      { username: "test-username" },
      {
        $push: {
          comments: { ...validationResult.data, id: crypto.randomUUID() },
        },
        $setOnInsert: { username: "test-username" },
      },
      { upsert: true },
    )
    .catch(console.error)

  revalidatePath("/marketPlace/product/[id]", "page")

  return null
}

export async function getComments() {
  const data = await mongo
    .collection("comments")
    .findOne({ username: "test-username" })

  if (!data) {
    return []
  }

  return data.comments
}
