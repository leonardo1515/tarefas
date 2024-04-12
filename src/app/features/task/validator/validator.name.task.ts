import { NextFunction, Request, Response } from "express";
import { RequestError } from "../../../shared/errors/request.error";
import { ApiError } from "../../../shared/errors/api.error";

export class NameTaskValidator {
  public static nameValidator(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;

      if (!name) {
        return RequestError.fieldNotProvided(res, "Name");
      }

      next();
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }
}
