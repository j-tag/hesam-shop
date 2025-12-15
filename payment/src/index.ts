import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { createClient } from "redis"
import os from "node:os"

const app = new Hono()

const redis = await createClient({
  url: "redis://redis:6379",
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect()

// Local counter which is isolated
let counter = 0

app.get("/", async (c) => {
  // Redis counter which is idempotent and sharable
  redis.incr("counter").catch(console.error)
  const redisCounter = await redis.get("counter")
  return c.text(
    `${++counter}:${redisCounter} Hello Hono!, Payment Service ${os.hostname()}`,
  )
})

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  },
)
