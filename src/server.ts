import { cors } from "@elysiajs/cors"
import { serverTiming } from "@elysiajs/server-timing"
import { swagger } from "@elysiajs/swagger"
import { Elysia } from "elysia"
import { elysiaHelmet } from "elysiajs-helmet"
import logixlysia from "logixlysia"
import { swaggerConfig } from "./config.ts"
import { db } from "./db/index.ts"
import { BetterAuthPlugin } from "./lib/auth.ts"

await db.$client.connect()

export const app = new Elysia()
    .use(BetterAuthPlugin)
    .use(swagger(swaggerConfig))
    .use(elysiaHelmet())
    .use(cors())
    .use(logixlysia())
    .use(serverTiming())
