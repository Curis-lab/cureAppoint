import RegisterInteractor from "../../use-cases/register/register.interactor";
const registerInteractor = new RegisterInteractor();

export default class RegisterController {
  run(request: { name: string; email: string; password: strign }) {
    registerInteractor.run(request);
  }
}
