import { MongoClient, type Document } from "mongodb";

const DB_NAME = "gathbandhan";

let clientPromise: Promise<MongoClient> | null = null;

export async function getCollection<T extends Document>(name: string) {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (!clientPromise) {
    clientPromise = new MongoClient(uri).connect();
  }

  const client = await clientPromise;
  return client.db(DB_NAME).collection<T>(name);
}
