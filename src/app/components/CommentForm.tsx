"use client"

import {
  Button,
  Card,
  Group,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core"
import { zod4Resolver } from "mantine-form-zod-resolver"
import { useForm } from "@mantine/form"
import { notifications } from "@mantine/notifications"
import { startTransition, useActionState } from "react"
import { sendComment } from "../actions/comments"
import { SavedCommentForm } from "@/app/db/types"
import { CommentFormSchema } from "@/app/lib/schema"

export default function CommentForm({
  comments,
}: {
  comments: SavedCommentForm[]
}) {
  const [, actionSendComment, pending] = useActionState(sendComment, null)
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      comment: "",
    },

    validate: zod4Resolver(CommentFormSchema),
  })

  return (
    <Paper maw={666} shadow="md" p="md">
      <Stack>
        {comments.map((comment) => (
          <Card key={comment.id}>
            <Text fw={"bold"}>{comment.name}</Text>
            <Text>{comment.comment}</Text>
          </Card>
        ))}
      </Stack>
      <Text>Comments</Text>
      <form
        onSubmit={form.onSubmit((values) =>
          startTransition(() => {
            actionSendComment(values)
            notifications.show({
              title: "Thanks!",
              message: "Your comments has been saved! 🎉",
            })
          }),
        )}
      >
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Your name"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />

        <Textarea
          mt="md"
          label="Your comment"
          key={form.key("comment")}
          {...form.getInputProps("comment")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit" loading={pending} disabled={pending}>
            Send your comment
          </Button>
        </Group>
      </form>
    </Paper>
  )
}
