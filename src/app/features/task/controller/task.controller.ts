import { Request, Response } from "express";
import { ApiError } from "../../../shared/errors/api.error";
import { CreateTaskUsecase } from "../usecase/create.task.usecase";
import { GetAllTasksUsecase } from "../usecase/get.all.tasks.usecase";
import { GetTaskByNameUsecase } from "../usecase/get.by.name.usecase";
import { UpdatetaskUsecase } from "../usecase/update.task.usecase";
import { DeleteTaskUsecase } from "../usecase/delet.task.usecase";

export class TaskController {
  public async getAll(req: Request, res: Response) {
    try {
      const usecase = new GetAllTasksUsecase();
      const user = req.headers["user"] as string;
      const decode = JSON.parse(user);

      const result = await usecase.esecute(decode.id);
      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }

  public async getByName(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const usecase = new GetTaskByNameUsecase();
      const result = await usecase.execute(name);

      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { name, description, startDate, endDate, id } = req.body;
      const usecase = new CreateTaskUsecase();

      const user = req.headers["user"] as string;
      const decode = JSON.parse(user);

      const data = {
        name: name,
        description: description,
        startDate: startDate,
        endDate: endDate,
        id: id,
        idUser: decode.id,
      };

      const result = await usecase.execute(data);

      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { name, description, startDate, endDate, id } = req.body;
      const usecase = new UpdatetaskUsecase();
      const result = await usecase.execute(
        name,
        description,
        startDate,
        endDate,
        id
      );

      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const usecase = new DeleteTaskUsecase();
      const result = await usecase.execute(id);

      return res.status(result.code).send(result);
    } catch (error: any) {
      return ApiError.serverError(res, error);
    }
  }
}
