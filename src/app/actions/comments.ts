"use server"

import { CommentForm, SavedCommentForm } from "@/app/db/types"
import { revalidatePath } from "next/cache"
import { mongo } from "@/app/lib/mongo"

export async function sendComment(
  prevState: CommentForm | null,
  values: CommentForm,
) {
  mongo
    .collection<{
      username: string
      comments: SavedCommentForm[]
    }>("comments")
    .updateOne(
      { username: "test-username" },
      {
        $push: {
          comments: { ...values, id: crypto.randomUUID() },
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
