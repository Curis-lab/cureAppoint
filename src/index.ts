import express, { Request, Response } from "express";
import { connectToDatabase } from "./infrastructure/db/dbConnection";
import { Patient } from "./adapters/common/models/patient";
import bcrypt from "bcryptjs";
import cors from "cors";

import dotenv from "dotenv";
import { startHttpServer } from "./http-server";

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
app.use(express.json());

const init = async () => {
  await connectToDatabase();
  startHttpServer();
};

init();
