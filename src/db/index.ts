import { drizzle } from "drizzle-orm/node-postgres"
import env from "env-var"
import { Client } from "pg"

export const client = new Client({
    connectionString: env.get("DATABASE_URL").required().asString(),
})

export const db = drizzle({
    client,
    casing: "snake_case",
})
