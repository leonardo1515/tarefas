import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../shared/errors/api.error";
import { RequestError } from "../../../shared/errors/request.error";

export class CreateUservalidator {
  public static createValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email, password, name, id } = req.body;

      if (!email) {
        return RequestError.fieldNotProvided(res, "Email");
      }

      if (!password) {
        return RequestError.fieldNotProvided(res, "Password");
      }

      if (!name) {
        return RequestError.fieldNotProvided(res, "Name");
      }

      if (!id) {
        return RequestError.fieldNotProvided(res, "Id");
      }

      next();
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }
}
