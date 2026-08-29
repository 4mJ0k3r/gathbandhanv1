import { MongoClient } from "mongodb";

function getUri(): string | undefined {
  return process.env.MONGODB_URI;
}

let clientPromise: Promise<import("mongodb").MongoClient> | null = null;

export async function getCollection<T extends Record<string, unknown>>(name: string) {
  const uri = getUri();
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (!clientPromise) {
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }
  const client = await clientPromise;
  const db = client.db("gathbandhan");
  return db.collection<T>(name);
}
