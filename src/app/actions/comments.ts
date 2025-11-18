"use server"

import { readFile, writeFile } from "node:fs/promises"
import { CommentForm } from "../types"
import { revalidatePath } from "next/cache"

export async function sendComment(
  prevState: CommentForm | null,
  values: CommentForm,
) {
  const data = await readFile("/tmp/comments.json", "utf8")
  const comments = JSON.parse(data)

  const newComments = [...comments, { ...values, id: crypto.randomUUID() }]

  writeFile("/tmp/comments.json", JSON.stringify(newComments), "utf8").catch(
    console.error,
  )

  revalidatePath("/marketPlace/product/[id]", "page")

  return null
}

export async function getComments() {
  const data = await readFile("/tmp/comments.json", "utf8")
  return JSON.parse(data)
}
