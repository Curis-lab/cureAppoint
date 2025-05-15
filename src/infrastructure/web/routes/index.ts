import { Router } from "express";
import patientRoute from "./patient";

const _ = Router();

_.use("/patient", patientRoute);
export default _;
