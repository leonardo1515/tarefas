import { NextFunction, Request, Response } from "express";
import { RequestError } from "../../../shared/errors/request.error";
import { ApiError } from "../../../shared/errors/api.error";

export class IdTaskValidator {
  public static idValidator(req: Request, res: Response, next: NextFunction) {
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
