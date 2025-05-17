import { JWTOption } from "@elysiajs/jwt";
import { ENV } from "./env";

export const jwtConfig: JWTOption = {
	name: "jwt",
	secret: ENV.JWT_SECRET,
	expiresIn: ENV.JWT_EXPIRES_IN,
	algorithm: "HS256",
	cookie: {
		name: "jwt",
		options: {
			httpOnly: true,
			secure: true,
			sameSite: "Strict",
			maxAge: 3600,
		},
	},
};
