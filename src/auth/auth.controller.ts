import { Elysia, t } from "elysia";
import { AuthModel } from "./auth.model";
import { supabase } from "../shared/configs/supabase";
import { AuthService } from "./auth.service";
import { createSuccessResponse } from "../shared/utils/formatter.util";

export const authController = (app: Elysia) =>
	app
		.use(AuthModel)
		.decorate("fmt", createSuccessResponse)
		.decorate("service", new AuthService(supabase))
		.post(
			"/login",
			async ({ body, cookie: { access_token }, service, fmt }) => {
				const { email, password } = body;
				const { user, session } = await service.login(email, password);

				if (!session?.access_token) {
					throw new Error("Login failed: No access token received.");
				}

				access_token.set({
					value: session.access_token,
					httpOnly: true,
					secure: true,
					sameSite: "strict",
					path: "/",
				});

				return fmt({
					id: user.id,
					email: user.email ?? "-",
					created_at: user.created_at,
				});
			},
			{
				body: "body",
				response: "response",
			}
		)
		.post(
			"/register",
			async ({ body, service, fmt }) => {
				const { email, password } = body;
				const user = await service.register(email, password);

				if (!user) {
					throw new Error("Registration failed");
				}

				return fmt({
					id: user.id,
					email: user.email ?? "-",
					created_at: user.created_at,
				});
			},
			{
				body: "body",
				response: "response",
			}
		);
