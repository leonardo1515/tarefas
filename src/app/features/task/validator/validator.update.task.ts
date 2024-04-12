import { NextFunction, Request, Response } from "express";
import { RequestError } from "../../../shared/errors/request.error";
import { ApiError } from "../../../shared/errors/api.error";

export class UpdateTaskValidator {
  public static updateValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { name, description, startDate, endDate, id } = req.body;

      if (!name) {
        return RequestError.fieldNotProvided(res, "Name");
      }

      if (!description) {
        return RequestError.fieldNotProvided(res, "Description");
      }

      if (!startDate) {
        return RequestError.fieldNotProvided(res, "StratDate");
      }

      if (!endDate) {
        return RequestError.fieldNotProvided(res, "EndDate");
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
