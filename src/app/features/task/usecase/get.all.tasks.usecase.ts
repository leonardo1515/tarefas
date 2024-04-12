import { Return } from "../../../shared/util/return.default";
import { TaskRepository } from "../repository/task.repository";

export class GetAllTasksUsecase {
  public async esecute(id: string): Promise<Return> {
    const repository = new TaskRepository();
    const result = await repository.getTasks(id);

    return {
      ok: true,
      code: 201,
      message: "Tasks successfull obted",
      data: result,
    };
  }
}
