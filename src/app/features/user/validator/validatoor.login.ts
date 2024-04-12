import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../shared/errors/api.error";
import { RequestError } from "../../../shared/errors/request.error";

export class LoginUserValidator {
  public static loginValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email, password } = req.body;

      if (!email) {
        return RequestError.fieldNotProvided(res, "Email");
      }

      if (!password) {
        return RequestError.fieldNotProvided(res, "Password");
      }

      next();
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }
}
