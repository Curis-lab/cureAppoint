import { Router, Request, Response } from "express";
import { Patient } from "../../../adapters/common/models/patient";
import bcrypt from "bcryptjs";
import RegisterController from "../../../adapters/register/register.controller";
import send from '../http-response';
const router = Router();
const registerController = new RegisterController();

router.post("/register", async (req: Request, res: Response) => {
  if (!req.body || !req.body.name || !req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: "Name, email, and password are required" });
  }
  registerController.run(req.body);

  send(res);
});

// User login route
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await Patient.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during login." });
  }
});

export default router;
