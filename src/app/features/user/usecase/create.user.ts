import { CreateUserTDO, User } from "../../../models/user";
import { Return } from "../../../shared/util/return.default";
import { UserRepository } from "../repository/user.repository";

export class CreateUserUsecase {
  public async execute(data: CreateUserTDO): Promise<Return> {
    const repository = new UserRepository();

    const checkId = await repository.getById(data.id!);
    const checkEmail = await repository.getEmail(data.email);

    if (checkId !== null || checkEmail !== null) {
      return {
        ok: false,
        code: 400,
        message: "User aready existing",
      };
    }
    const result = await repository.create(data);

    return {
      ok: true,
      code: 201,
      message: "new user successfull created",
      data: result,
    };
  }
}
