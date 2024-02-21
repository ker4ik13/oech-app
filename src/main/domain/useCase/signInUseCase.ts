import { LocalRepositoryImpl } from '@/main/data/LocalDataSourse';
import { RemoteRepositoryImpl } from '@/main/data/RemoteDataSourse';
import { RemoteRepository } from '../repository';

export class SignInUseCase {
	private remoteRepository: RemoteRepository = new RemoteRepositoryImpl();
	private localRepository: LocalRepositoryImpl = new LocalRepositoryImpl();

	async execute(email: string, password: string, rememberPassword: boolean) {
		if (rememberPassword) {
			await this.localRepository.hashAndSavePassword(password);
		}

		return this.remoteRepository.signIn(email, password);
	}
}
