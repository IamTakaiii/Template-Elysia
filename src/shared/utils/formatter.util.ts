import { Context, t, TSchema } from "elysia";

export const createResponseSchema = <T extends TSchema>(data: T) => {
	return t.Object({
		success: t.Boolean(),
		data: data,
		metaData: t.Any(),
	});
};

export const createSuccessResponse = <T>(data: T, message: string = "successful", meta: any = {}) => {
	return {
		success: true,
		message,
		data,
		metaData: meta,
	};
};

interface HttpError extends Error {
	status?: number;
}

export const createGlobalErrorResponse = ({
	code,
	error,
	set,
}: {
	code: string;
	error: HttpError;
	set: Context["set"];
}) => {
	console.error(`[${code}] - ${error.message}`);

	set.status = error.status || 500;

	return {
		success: false,
		error: {
			type: code, // e.g., 'NOT_FOUND', 'VALIDATION'
			message: error.message,
		},
	};
};
