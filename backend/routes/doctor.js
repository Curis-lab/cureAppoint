import {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
} from "../controllers/doctorController.js";
import { Router } from "express";

const router = Router();

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
