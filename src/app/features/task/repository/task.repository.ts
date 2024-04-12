import { TypeormConnection } from "../../../../main/database/typeorm.connection";
import { CreateTasksDTO, Tasks, UpdateTaskDTO } from "../../../models/tasks";
import { TaskEntitiy } from "../../../shared/database/entities/task";

export class TaskRepository {
  private repository = TypeormConnection.connection.getRepository(TaskEntitiy);

  public static mapEtityToModel(entity: TaskEntitiy): Tasks {
    return Tasks.create(
      entity.id,
      entity.name,
      entity.description,
      entity.startDate,
      entity.endDate
    );
  }

  public async getTasks(idUser: string): Promise<Tasks[]> {
    const result = await this.repository.findBy({
      idUser,
    });

    return result.map((task) => TaskRepository.mapEtityToModel(task));
  }

  public async getId(id: string): Promise<Tasks[]> {
    const result = await this.repository.findBy({
      id,
    });

    return result.map((task) => TaskRepository.mapEtityToModel(task));
  }

  public async getByName(name: string): Promise<Tasks | null> {
    const result = await this.repository.findOneBy({ name });
    if (result === null) {
      return null;
    }
    return TaskRepository.mapEtityToModel(result);
  }

  public async create(task: CreateTasksDTO): Promise<Tasks> {
    const taskEntity = this.repository.create({
      id: task.id,
      name: task.name,
      description: task.description,
      startDate: task.startDate,
      endDate: task.endDate,
      idUser: task.idUser,
    });

    const result = await this.repository.save(taskEntity);
    return TaskRepository.mapEtityToModel(result);
  }

  public async update(
    id: string,
    name?: string,
    description?: string,
    startDate?: string,
    endDate?: string
  ): Promise<number | null> {
    const result = await this.repository.update(
      { id },
      {
        name,
        description,
        startDate,
        endDate,
        atUpdate: new Date(),
      }
    );
    return result.affected ?? 0;
  }

  public async delete(id: string): Promise<number | null> {
    const result = await this.repository.delete({ id });

    return result.affected ?? 0;
  }
}
