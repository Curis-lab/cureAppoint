import { Patient } from "../../adapters/common/models/patient";
import PatientRepository from "../../adapters/common/repositories/patient";

const registerRepository = new PatientRepository();

//combination of database
export default class RegisterGateway {
  async findByEmail(email: string): Promise<Patient | null> {
    return await registerRepository.findByEmail(email);
  }
  async register(patient: {
    name: string;
    email: string;
    password: string;
  }): Promise<void> {
    // await registerRepository.insert(patient);
    console.log("created.");
  }
}
