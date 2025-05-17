import "dotenv/config";
import { t } from "elysia";
import { Value } from "@sinclair/typebox/value";

const nodeEnvChoices = [t.Literal("development"), t.Literal("production")];

const envSchema = t.Object({
	NODE_ENV: t.Union(nodeEnvChoices),
	PORT: t.Number(),
	DB_URL: t.String(),
	JWT_SECRET: t.String(),
	JWT_EXPIRES_IN: t.String(),
});

export const ENV = Value.Parse(envSchema, process.env);
