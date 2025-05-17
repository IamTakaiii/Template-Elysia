import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { elysiaHelmet } from "elysiajs-helmet";
import { rateLimit } from "elysia-rate-limit";
import logixlysia from "logixlysia";

import { loginxConfig } from "./shared/configs/logger";
import { swaggerConfig } from "./shared/configs/swagger";
import { AppRoutes } from "./routes";
import { ENV } from "./shared/configs/env";

const app = new Elysia()
	.use(cors())
	.use(elysiaHelmet({}))
	.use(logixlysia(loginxConfig))
	.use(swagger(swaggerConfig))
	.use(rateLimit())
	.use(AppRoutes);

app.listen(ENV.PORT);
