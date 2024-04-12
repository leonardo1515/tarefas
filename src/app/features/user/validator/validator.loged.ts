import { NextFunction, Request, Response } from "express";
import { RequestError } from "../../../shared/errors/request.error";
import { ApiError } from "../../../shared/errors/api.error";

export class LogedValidator {
  public static logedValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = req.headers["user"] as string;

      if (!user) {
        return RequestError.fieldNotProvided(res, "User is not loged");
      }

      next();
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }
}
