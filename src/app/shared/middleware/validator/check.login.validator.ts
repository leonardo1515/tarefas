import { NextFunction, Request, Response } from "express";
import { RequestError } from "../../errors/request.error";
import { ApiError } from "../../errors/api.error";
import { JwtAdapter } from "../../util/jwt.adapter";

export class TokenValidator {
  public static checkTokemValidator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const header = req.headers["authorization"];
      req.headers["user"] = "";
      if (!header) {
        return RequestError.fieldNotProvided(res, "Token");
      }

      const token = JSON.parse(header!);

      const user = JwtAdapter.checkToken(token);

      req.headers["user"] = JSON.stringify(user);

      return next();
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }
}
