export class HttpError extends Error {
	constructor(public status: number, public message: string, public code?: string) {
		super(message);
	}
}

export class BadRequestError extends HttpError {
	constructor(message: string = "Bad Request", code = "VALIDATION_ERROR") {
		super(400, message, code);
	}
}
