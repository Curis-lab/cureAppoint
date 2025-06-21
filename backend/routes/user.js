import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from "../controllers/userController.js";
import { Router } from "express";

const router = Router();

router.get("/:id", getSingleUser);
router.get("/", getAllUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
