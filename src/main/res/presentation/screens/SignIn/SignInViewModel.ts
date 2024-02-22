import { GetExistedPasswordUseCase, SignInUseCase } from "@/main/domain/useCase";

export class SignInViewModel {
    private signInUseCase = new SignInUseCase();
    private getExistedPasswordUseCase = new GetExistedPasswordUseCase();

    async signIn(email: string, password: string, rememberPassword: boolean) {
        return this.signInUseCase.execute(email, password, rememberPassword);
    }

    async getExistedPassword() {
        return this.getExistedPasswordUseCase.execute();
    }
}