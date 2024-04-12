import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../../shared/errors/api.error";
import { RequestError } from "../../../shared/errors/request.error";

export class IdUserValidator {
  public static idUserValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;

      if (!id) {
        return RequestError.fieldNotProvided(res, "Id");
      }

      next();
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }
}
