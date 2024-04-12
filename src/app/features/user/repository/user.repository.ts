import { TypeormConnection } from "../../../../main/database/typeorm.connection";
import { LoginUserTDO, User, UserTDO } from "../../../models/user";
import { UserEntitiy } from "../../../shared/database/entities/user.entities";
import { TaskRepository } from "../../task/repository/task.repository";

export class UserRepository {
  private repository = TypeormConnection.connection.getRepository(UserEntitiy);

  private mapEntityToModel(entity: UserEntitiy): User {
    const userEntity = entity.task ?? [];
    const task = userEntity.map((item) => TaskRepository.mapEtityToModel(item));
    return User.create(
      entity.id,
      entity.name,
      entity.email,
      entity.password,
      task
    );
  }

  public async login(email: string, password: string): Promise<User | null> {
    const result = await this.repository.findOne({
      where: { email, password },
    });

    if (result === null) {
      return null;
    }

    return this.mapEntityToModel(result);
  }

  public async getById(id: string): Promise<User | null> {
    const result = await this.repository.findOne({
      where: { id: id },
    });

    if (result === null) {
      return null;
    }

    return this.mapEntityToModel(result);
    // return result.map((user) => this.mapEntityToModel(user));
  }

  public async getEmail(email: string): Promise<User | null> {
    const result = await this.repository.findOne({
      where: { email: email },
    });

    if (result === null) {
      return null;
    }

    return this.mapEntityToModel(result);
  }

  public async create(user: UserTDO): Promise<UserTDO> {
    const userEntity = this.repository.create({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });

    const result = await this.repository.save(userEntity);
    return this.mapEntityToModel(result);
  }

  public async delete(id: string): Promise<number | null> {
    const result = await this.repository.delete({ id });

    return result.affected ?? 0;
  }
}
