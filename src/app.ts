import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { elysiaHelmet } from "elysiajs-helmet";
import { rateLimit } from "elysia-rate-limit";
import logixlysia from "logixlysia";

import { loginxConfig } from "./shared/configs/logger";
import { swaggerConfig } from "./shared/configs/swagger";
import routes from "./routes";
import { ENV } from "./shared/configs/env";
import { createGlobalErrorResponse } from "./shared/utils/formatter.util";

const app = new Elysia()
	.use(cors())
	.use(elysiaHelmet({}))
	.use(logixlysia(loginxConfig))
	.use(swagger(swaggerConfig))
	.use(rateLimit())
	.use(routes)
	.onError(createGlobalErrorResponse);

app.listen(ENV.PORT);
