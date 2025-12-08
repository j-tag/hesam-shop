import { createClient } from "redis"

export const redis = await createClient({
  url: "redis://127.0.0.1:34556",
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect()
