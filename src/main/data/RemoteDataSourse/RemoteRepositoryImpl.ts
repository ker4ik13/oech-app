import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, Session } from '@supabase/supabase-js';
import { sha512, sha512_256 } from 'js-sha512';
import { UnexpectedError } from '../../domain/errors';
import { RemoteRepository } from '../../domain/repository';

export class RemoteRepositoryImpl implements RemoteRepository {
	private supabaseUrl = 'https://ylodljpopwfhwrsjldik.supabase.co';
	private supabaseAnonKey =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsb2RsanBvcHdmaHdyc2psZGlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0NjQzOTYsImV4cCI6MjAwNDA0MDM5Nn0.KPMRPgUXoemVRoWcuXtiZU-BRYRUAIdurCLJ2ntTmKE';
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
		email: string,
		password: string,
	): Promise<void> {
		const {
			data: { session },
			error: AuthError,
		} = await this.supabase.auth.signUp({
			email,
			password,
		});


		const { error: PostgresError } = await this.supabase.from('users').insert({
			full_name: fullName,
			phone_number: phoneNumber,
			email_address: email,
			password,
		});

		if (PostgresError || AuthError) {
			throw new UnexpectedError();
		}
	}
	async signIn(
		email: string,
		password: string,
	): Promise<Session | null> {
		const {
			data: { session },
			error,
		} = await this.supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			throw new UnexpectedError();
		}

		return session;
	}
}
