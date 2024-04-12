import { CreateTasksDTO } from "../../../models/tasks";
import { Return } from "../../../shared/util/return.default";
import { UserRepository } from "../../user/repository/user.repository";
import { TaskRepository } from "../repository/task.repository";

export class CreateTaskUsecase {
  public async execute(data: CreateTasksDTO): Promise<Return> {
    const repository = new TaskRepository();
    const repositoryUser = new UserRepository();

    const check = await repositoryUser.getById(data.idUser!);
    const result = await repository.create(data);

    if (check === null) {
      return {
        ok: false,
        code: 404,
        message: "User not found",
      };
    }

    return {
      ok: true,
      code: 201,
      message: "new user successfull created",
      data: result,
    };
  }
}
