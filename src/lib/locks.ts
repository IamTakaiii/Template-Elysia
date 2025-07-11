import { Verrou } from "@verrou/core"
import { memoryStore } from "@verrou/core/drivers/memory"
import { redisStore } from "@verrou/core/drivers/redis"
import { envConfig } from "../config.ts"
import { redis } from "./redis.ts"

export const verrou = new Verrou({
    default: envConfig.LOCK_STORE,
    stores: {
        memory: { driver: memoryStore() },
        redis: { driver: redisStore({ connection: redis }) },
    },
})
