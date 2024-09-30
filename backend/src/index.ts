import express, { Response, NextFunction, Request } from "express";
import { startHttpServer } from "./http-server";

const init = async () => {
  const app = express();
  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("hello");
  });
  startHttpServer();
};

init();
