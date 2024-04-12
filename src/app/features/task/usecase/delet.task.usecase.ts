import { Return } from "../../../shared/util/return.default";
import { TaskRepository } from "../repository/task.repository";

export class DeleteTaskUsecase {
  public async execute(id: string): Promise<Return> {
    const repository = new TaskRepository();
    const result = await repository.delete(id);

    if (result !== 1) {
      return {
        ok: false,
        code: 404,
        message: "Task not found",
        data: result,
      };
    }

    return {
      ok: true,
      code: 201,
      message: "Task successfull deleted",
      data: result,
    };
  }
}
