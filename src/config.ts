import type { ElysiaSwaggerConfig } from "@elysiajs/swagger"
import env from "env-var"
import { OpenAPI } from "./lib/auth.ts"

export const envConfig = {
    NODE_ENV: env
        .get("NODE_ENV")
        .default("development")
        .asEnum(["production", "test", "development"]),

    PORT: env.get("PORT").default(3000).asPortNumber(),
    API_URL: env.get("API_URL").default(`https://${env.get("PUBLIC_DOMAIN").asString()}`).asString(),
    DATABASE_URL: env.get("DATABASE_URL").required().asString(),
    REDIS_HOST: env.get("REDIS_HOST").default("localhost").asString(),
    LOCK_STORE: env.get("LOCK_STORE").default("memory").asEnum(["memory", "redis"]),
}

export const swaggerConfig: ElysiaSwaggerConfig = {
    path: "/swagger",
    exclude: ["/swagger"],
    documentation: {
        info: {
            title: "Project API",
            description: "API documentation for Project",
            version: "1.0.0",
        },
        components: await OpenAPI.components,
        paths: await OpenAPI.getPaths(),

    },
}
