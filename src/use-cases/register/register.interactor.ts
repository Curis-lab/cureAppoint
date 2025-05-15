import RegisterGateway from "./register.gateway";
import bcrypt from "bcryptjs";

const registerGateway = new RegisterGateway();
export default class RegisterInteractor {
  run(request: { name: string; email: string; password: string }) {
    const { name, email, password } = request;
    const existingPatient = registerGateway.findByEmail(email);
    // if (existingPatient) {
    //   throw new Error("Patient already exists");
    // }

    const hashedPassword = bcrypt.hashSync(password, 10);
    request.password = hashedPassword;

    
    return registerGateway.register(request);
  }
}
