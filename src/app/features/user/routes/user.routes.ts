import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { CreateUservalidator } from "../validator/validator.create.user";
import { LoginUserValidator } from "../validator/validatoor.login";
import { IdUserValidator } from "../validator/validator.id.user";
import { TokenValidator } from "../../../shared/middleware/validator/check.login.validator";
import { LogedValidator } from "../validator/validator.loged";

export const userRoutes = () => {
  const app = Router();

  app.post(
    "/create",
    CreateUservalidator.createValidator,
    new UserController().create
  );

  app.post(
    "/login",
    LoginUserValidator.loginValidator,
    new UserController().login
  );

  app.delete(
    "/delete",
    TokenValidator.checkTokemValidator,
    LogedValidator.logedValidator,
    // IdUserValidator.idUserValidator,
    new UserController().delete
  );

  return app;
};
