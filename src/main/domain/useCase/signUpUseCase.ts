import { RemoteRepositoryImpl } from '@/main/data/RemoteDataSourse';
import { RemoteRepository } from '../repository/RemoteRepository';

export class SignUpUseCase {
	private repository: RemoteRepository = new RemoteRepositoryImpl();

	async execute(
		fullName: string,
		phoneNumber: string,
		emailAddress: string,
		password: string,
	) {
		return this.repository.signUp(
			fullName,
			phoneNumber,
			emailAddress,
			password,
		);
	}
}
