import { Redis } from "ioredis"
import { envConfig as config } from "../config.ts"

export const redis = new Redis({
    host: config.REDIS_HOST,
    maxRetriesPerRequest: null,
})
