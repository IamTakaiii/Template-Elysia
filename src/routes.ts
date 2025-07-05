import Elysia from "elysia";
import { authController } from "./auth/auth.controller";

const authenModule = new Elysia({ prefix: "/auth" }).use(authController);

export default new Elysia({ prefix: "/api/v1" }).use(authenModule);
