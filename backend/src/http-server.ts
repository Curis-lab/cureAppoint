import express from "express";
import BaseRouter from '@infrastructure/web/routes/index';

export function startHttpServer() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", BaseRouter);

  const port = Number(process.env.PORT || 3000);
  app.listen(port, () => {
    console.log("Express server started on port: " + port);
  });
}
