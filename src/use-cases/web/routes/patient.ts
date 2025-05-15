import { Router, Request, Response } from "express";
import { Patient } from "../../../adapters/common/models/patient";
import bcrypt from "bcryptjs";

const router = Router();

// User registration route
router.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await Patient.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Patient.create({
      name,
      email,
      password: hashedPassword,
      dateOfBirth: new Date("1990-01-01"), // Default value, should be replaced with actual data
      gender: "Male", // Default value, should be replaced with actual data
      contactNumber: "029993", // Default value, should be replaced with actual data
      address: {
        street: "123 Main St", // Default value, should be replaced with actual data
        city: "Yangon", // Default value, should be replaced with actual data
        state: "Yangon", // Default value, should be replaced with actual data
      },
    });

    res.status(201).json({ message: "Patient registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred during registration." });
  }
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
