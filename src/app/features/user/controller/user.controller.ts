import { Request, Response } from "express";
import { ApiError } from "../../../shared/errors/api.error";
import { CreateUserUsecase } from "../usecase/create.user";
import { LoginUserUsecase } from "../usecase/login.user.usecase";
import { DeleteUserUsecase } from "../usecase/delete.usecase";

export class UserController {
  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const usecase = new LoginUserUsecase();
      const result = await usecase.execute(email, password);
      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { name, email, password, id } = req.body;
      const usecase = new CreateUserUsecase();
      const data = {
        name: name,
        email: email,
        password: password,
        id: id,
      };
      const result = await usecase.execute(data);
      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const usecase = new DeleteUserUsecase();

      const user = req.headers["user"] as string;
      const decode = JSON.parse(user);

      const result = await usecase.execute(decode.id);

      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }
}
