import Elysia, { t } from "elysia";
import { createResponseSchema } from "../shared/utils/formatter.util";

const body = t.Object({
	email: t.String({ format: "email" }),
	password: t.String({ minLength: 6, maxLength: 20 }),
});

const response = createResponseSchema(
	t.Object({
		id: t.String(),
		email: t.String({ format: "email" }),
		created_at: t.String({ format: "date-time" }),
	})
);

export const AuthModel = new Elysia().model({
	body: body,
	response: response,
});
