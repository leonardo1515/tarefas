import express from "express";
import cors from "cors";
import { userRoutes } from "../../app/features/user/routes/user.routes";
import { taskRoutes } from "../../app/features/task/routes/task.routes";

export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use("/user", userRoutes());

  app.use("/task", taskRoutes());

  return app;
};
