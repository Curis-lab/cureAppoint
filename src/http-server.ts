import express, { Request, Response, Express } from "express";
import baseRoutes from "./infrastructure/web/routes";

let _: {
  start(app: Express): void;
} = {};

_.start = (app: Express) => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export function startHttpServer() {
  const app = express();

  app.use(express.json());
  app.use("/api", baseRoutes);

  _.start(app);
}
