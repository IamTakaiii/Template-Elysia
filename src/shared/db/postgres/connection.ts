import { drizzle } from "drizzle-orm/node-postgres";
import { ENV } from "../../configs/env";

const sqldb = drizzle(ENV.DB_URL);

export default sqldb;
