import express, { Request, Response } from "express";
import { connectToDatabase } from "./use-cases/db/dbConnection";
import { Patient } from "./adapters/common/models/patient";
import bcrypt from "bcryptjs";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

const init = async () => {
  await connectToDatabase();

  app.get("/", async (req: Request, res: Response) => {
    res.send("Hello wrold");
  });

  //register
  app.post("/", async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const existingUser = await Patient.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      await Patient.create({
        name,
        email,
        password: hashedPassword,
        dateOfBirth: new Date("1990-01-01"),
        gender: "Male",
        contactNumber: "029993",
        address: {
          street: "123 Main St",
          city: "Yangon",
          state: "Yangon",
        },
      });
      res.status(200).json({ message: "Patient created successfully!" }); // Changed to JSON response
    } catch (error) {
      console.log(error);
      res.status(500).send("An error occurred while creating the patient.");
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

init();
