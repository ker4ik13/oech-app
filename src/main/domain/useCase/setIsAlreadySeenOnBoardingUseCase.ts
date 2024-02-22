import { LocalRepositoryImpl } from "@/main/data/LocalDataSourse";
import { LocalRepository } from "../repository";

export class SetIsAlreadySeenOnBoardingUseCase {
    private repository: LocalRepository = new LocalRepositoryImpl();

    async execute () {
        return this.repository.setIsAlreadySeenOnBoarding();
    }
}