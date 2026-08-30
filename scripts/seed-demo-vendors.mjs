/**
 * Seeds a small set of clearly-labelled demo vendors so the directory has
 * data to render before real vendors sign up.
 *
 *   node scripts/seed-demo-vendors.mjs          insert (skips existing slugs)
 *   node scripts/seed-demo-vendors.mjs --delete  remove every demo record
 *
 * Every record carries `is_demo: true`, so --delete only ever touches these.
 * Phone numbers use the +91 99900 55xxx reserved-looking block and emails use
 * the example.com reserved domain, so nothing here reaches a real person.
 */
import { MongoClient } from "mongodb";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DB_NAME = "gathbandhan";
const CITY = "Kota, Rajasthan";

function loadEnv() {
  if (process.env.MONGODB_URI) return process.env.MONGODB_URI;
  try {
    const file = readFileSync(join(ROOT, ".env.local"), "utf8");
    for (const line of file.split("\n")) {
      const match = line.match(/^\s*MONGODB_URI\s*=\s*(.+)\s*$/);
      if (match) return match[1].trim().replace(/^["']|["']$/g, "");
    }
  } catch {
    /* fall through */
  }
  return undefined;
}

const photo = (id, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const DEMO_VENDORS = [
  {
    slug: "demo-royal-clicks-photography",
    business_name: "Demo — Royal Clicks Photography",
    category: "photographer",
    contact_person: "Demo Contact",
    phone: "+919990055001",
    email: "demo.photographer@example.com",
    instagram: "demoroyalclicks",
    starting_price: 25000,
    description:
      "Sample listing. Candid and traditional wedding photography, full-day coverage with an edited album.",
    photos: [
      photo("1519741497674-611481863552"),
      photo("1511285560929-80b456fea0bc"),
      photo("1465495976277-4387d4b0b4c6"),
    ],
    is_verified: true,
    view_count: 340,
  },
  {
    slug: "demo-glam-studio-makeup",
    business_name: "Demo — Glam Studio",
    category: "makeup",
    contact_person: "Demo Contact",
    phone: "+919990055002",
    email: "demo.makeup@example.com",
    instagram: "demoglamstudio",
    starting_price: 15000,
    description:
      "Sample listing. Bridal hair and makeup, including a trial session before the wedding date.",
    photos: [photo("1487412720507-e7ab37603c6f"), photo("1522337360788-8b13dee7a37e")],
    is_verified: true,
    view_count: 280,
  },
  {
    slug: "demo-bloom-decorations",
    business_name: "Demo — Bloom Decorations",
    category: "decor",
    contact_person: "Demo Contact",
    phone: "+919990055003",
    email: "demo.decor@example.com",
    starting_price: 50000,
    description:
      "Sample listing. Mandap design, stage setups, and floral installations for weddings and receptions.",
    photos: [photo("1509610973147-232dfea52a97"), photo("1519225421980-715cb0215aed")],
    is_verified: false,
    view_count: 190,
  },
  {
    slug: "demo-palace-grounds-venue",
    business_name: "Demo — Palace Grounds",
    category: "venue",
    contact_person: "Demo Contact",
    phone: "+919990055004",
    email: "demo.venue@example.com",
    starting_price: 200000,
    description:
      "Sample listing. Outdoor lawn venue for 500 guests, with parking and in-house catering available.",
    photos: [photo("1464366400600-7168b8af9bc3"), photo("1470229722913-7ea0d1f0eda6")],
    is_verified: true,
    view_count: 450,
  },
  {
    slug: "demo-henna-by-meera",
    business_name: "Demo — Henna by Meera",
    category: "mehendi",
    contact_person: "Demo Contact",
    phone: "+919990055005",
    email: "demo.mehendi@example.com",
    instagram: "demohennabymeera",
    starting_price: 8000,
    description:
      "Sample listing. Bridal mehendi with intricate Rajasthani and Arabic designs, travels to your venue.",
    photos: [photo("1595959183082-7b570b7e08e2")],
    is_verified: false,
    view_count: 120,
  },
  {
    slug: "demo-spice-route-caterers",
    business_name: "Demo — Spice Route Caterers",
    category: "catering",
    contact_person: "Demo Contact",
    phone: "+919990055006",
    email: "demo.catering@example.com",
    starting_price: 600,
    description:
      "Sample listing. Pure-vegetarian Rajasthani and North Indian menus, priced per plate.",
    photos: [photo("1555939594-58d7cb561ad1"), photo("1467003909585-2f8a72700288")],
    is_verified: true,
    view_count: 95,
  },
];

async function main() {
  const uri = loadEnv();
  if (!uri) {
    console.error("MONGODB_URI is not set (checked env and .env.local).");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const vendors = client.db(DB_NAME).collection("vendors");

  try {
    if (process.argv.includes("--delete")) {
      const { deletedCount } = await vendors.deleteMany({ is_demo: true });
      console.log(`Deleted ${deletedCount} demo vendor(s).`);
      return;
    }

    const now = new Date();
    let inserted = 0;

    for (const vendor of DEMO_VENDORS) {
      const existing = await vendors.findOne({ slug: vendor.slug });
      if (existing) {
        console.log(`skip   ${vendor.slug} (already present)`);
        continue;
      }

      await vendors.insertOne({
        ...vendor,
        city: CITY,
        status: "approved",
        is_featured: false,
        claimed_by_vendor: false,
        inquiry_count: 0,
        is_demo: true,
        created_at: now,
        updated_at: now,
      });
      inserted++;
      console.log(`insert ${vendor.slug}`);
    }

    const total = await vendors.countDocuments({ status: "approved" });
    console.log(`\nInserted ${inserted}. Approved vendors in DB: ${total}.`);
  } finally {
    await client.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
