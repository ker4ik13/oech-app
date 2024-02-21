import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, Session } from '@supabase/supabase-js';
import { sha512 } from 'js-sha512';
import { UnexpectedError } from '../../domain/errors';
import { RemoteRepository } from '../../domain/repository';

export class RemoteRepositoryImpl implements RemoteRepository {
	private supabaseUrl = 'https://siwvlgedeictsxrumntu.supabase.co';
	private supabaseAnonKey =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpd3ZsZ2VkZWljdHN4cnVtbnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1NDIyOTYsImV4cCI6MjAyNDExODI5Nn0.dTXtBSJIqZgXBU1UkICxKxIoC7eXQGQ7C4BwEXZrPwY';
	supabase = createClient(this.supabaseUrl, this.supabaseAnonKey, {
		auth: {
			storage: AsyncStorage,
			autoRefreshToken: true,
			persistSession: true,
			detectSessionInUrl: false,
		},
	});

	async signUp(
		fullName: string,
		phoneNumber: string,
		emailAddress: string,
		password: string,
	): Promise<void> {
		const {
			data: { session },
			error: AuthError,
		} = await this.supabase.auth.signUp({
			email: emailAddress,
			password: sha512(password),
		});

		console.log(AuthError, session);

		const { error: PostgresError } = await this.supabase.from('users').insert({
			full_name: fullName,
			phone_number: phoneNumber,
			email_address: emailAddress,
			password: sha512(password),
		});

		if (PostgresError || AuthError) {
			throw new UnexpectedError();
		}
	}
	async signIn(
		emailAddress: string,
		password: string,
	): Promise<Session | null> {
		const {
			data: { session },
			error,
		} = await this.supabase.auth.signInWithPassword({
			email: emailAddress,
			password: sha512(password),
		});

		if (error) {
			throw new UnexpectedError();
		}

		return session;
	}
}
