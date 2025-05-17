import { defineConfig } from "drizzle-kit";
import { ENV } from "./src/shared/configs/env";

export default defineConfig({
	out: "./drizzle",
	schema: "./src/shared/db/postgres/schemas",
	dialect: "postgresql",
	dbCredentials: {
		url: ENV.DB_URL,
	},
	migrations: {
		schema: "public",
		table: "migrations",
		prefix: "timestamp",
	},
});
