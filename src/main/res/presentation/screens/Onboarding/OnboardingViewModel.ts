import { IsAlreadySeenOnBoardingUseCase, SetIsAlreadySeenOnBoardingUseCase } from "@/main/domain/useCase";

export class OnboardingViewModel {
    private isAlreadySeenOnBoardingUseCase = new IsAlreadySeenOnBoardingUseCase();
    private setIsAlreadySeenOnBoardingUseCase = new SetIsAlreadySeenOnBoardingUseCase();

    async isAlreadySeenOnBoarding() {
        return this.isAlreadySeenOnBoardingUseCase.execute();
    }

    async setIsAlreadySeenOnBoarding() {
        return this.setIsAlreadySeenOnBoardingUseCase.execute();
    }
}