import { Router } from "express";
import { TaskController } from "../controller/task.controller";
import { TokenValidator } from "../../../shared/middleware/validator/check.login.validator";
import { CreateTaskValidator } from "../validator/validator.create.task";
import { IdTaskValidator } from "../validator/validator.id.Task";
import { NameTaskValidator } from "../validator/validator.name.task";
import { UpdateTaskValidator } from "../validator/validator.update.task";
import { LogedValidator } from "../../user/validator/validator.loged";

export const taskRoutes = () => {
  const app = Router();

  app.post(
    "/create",
    TokenValidator.checkTokemValidator,
    LogedValidator.logedValidator,
    CreateTaskValidator.createTaskValidator,
    new TaskController().create
  );

  app.get(
    "/getAll",
    TokenValidator.checkTokemValidator,
    LogedValidator.logedValidator,
    new TaskController().getAll
  );

  app.get(
    "/getByName",
    TokenValidator.checkTokemValidator,
    LogedValidator.logedValidator,
    NameTaskValidator.nameValidator,
    new TaskController().getByName
  );

  app.put(
    "/update",
    TokenValidator.checkTokemValidator,
    LogedValidator.logedValidator,
    UpdateTaskValidator.updateValidator,
    new TaskController().update
  );

  app.delete(
    "/:id/delete",
    TokenValidator.checkTokemValidator,
    LogedValidator.logedValidator,
    IdTaskValidator.idValidator,
    new TaskController().delete
  );

  return app;
};
