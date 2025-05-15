import { Response } from "express";

const msg = "Success";

export default function send(res: Response) {
  res.status(200).json({ message: msg });
}
