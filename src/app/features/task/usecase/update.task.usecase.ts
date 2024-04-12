import { TaskRepository } from "../repository/task.repository";

export class UpdatetaskUsecase {
  public async execute(
    name: string,
    description: string,
    startDate: string,
    endDate: string,
    id: string
  ) {
    const repository = new TaskRepository();
    const check = await repository.getId(id);

    if (check === null) {
      return {
        ok: false,
        code: 404,
        message: "Task not found.",
        data: check,
      };
    }

    const result = await repository.update(
      id,
      name,
      description,
      startDate,
      endDate
    );

    return {
      ok: true,
      code: 201,
      message: "Task successfull updated",
      data: result,
    };
  }
}
