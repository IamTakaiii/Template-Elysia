import { SupabaseClient } from "@supabase/supabase-js";
import { BadRequestError } from "../shared/errors/http.error";

export class AuthService {
	constructor(private supabase: SupabaseClient) {}

	async login(email: string, password: string) {
		const { data, error } = await this.supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) throw new Error(error.message);
		return data;
	}

	async register(email: string, password: string) {
		const { data, error } = await this.supabase.auth.signUp({
			email,
			password,
		});
		const identities = data?.user?.identities || [];

		if (identities.length === 0) {
			throw new BadRequestError("The email is already registered.", "EMAIL_ALREADY_REGISTERED");
		}

		if (error) throw new Error(error.message);
		return data.user;
	}
}
