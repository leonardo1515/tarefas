import { TaskRepository } from "../repository/task.repository";

export class GetTaskByNameUsecase {
  public async execute(name: string) {
    const repository = new TaskRepository();
    const result = await repository.getByName(name);

    if (result === null) {
      return {
        ok: false,
        code: 404,
        message: "Task not found.",
        data: result,
      };
    }

    return {
      ok: true,
      code: 201,
      message: "Task successfull obted",
      data: result.toJson(),
    };
  }
}
