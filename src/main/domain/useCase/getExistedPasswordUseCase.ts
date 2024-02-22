import { LocalRepositoryImpl } from "@/main/data/LocalDataSourse";
import { LocalRepository } from "../repository/LocalRepository";

export class GetExistedPasswordUseCase {
    private localRepository: LocalRepository = new LocalRepositoryImpl();

    async execute() {
        return this.localRepository.getHashedPassword();
    }
}