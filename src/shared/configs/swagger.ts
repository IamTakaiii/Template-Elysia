import { ElysiaSwaggerConfig } from "@elysiajs/swagger";

export const swaggerConfig: ElysiaSwaggerConfig = {
	path: "/swagger",
	exclude: ["/swagger"],
	documentation: {
		info: {
			title: "Project API",
			description: "API documentation for Project",
			version: "1.0.0",
		},
	},
};
