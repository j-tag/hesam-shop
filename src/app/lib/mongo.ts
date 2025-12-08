import { type Db, MongoClient } from "mongodb"

async function connectWithRetry(): Promise<Db> {
  const client = new MongoClient(process.env.MONGODB_URI ?? "")

  while (true) {
    try {
      await client.connect()
      console.info("✅ Connected to MongoDB")
      return client.db(process.env.MONGODB_DB_NAME ?? "shop")
    } catch (err) {
      console.error("❌ Failed to connect to MongoDB, retrying in 10s...", err)
      await new Promise((resolve) => setTimeout(resolve, 10_000))
    }
  }
}

export const mongo: Db = await connectWithRetry()
