import { Patient } from "../models/patient";

export default class PatientRepository {
  async findByEmail(email: string) {
    return await Patient.findOne({ email });
  }
  async insert(patient: { name: string; email: string; password: string }) {
    return await Patient.create(patient);
  }
}
