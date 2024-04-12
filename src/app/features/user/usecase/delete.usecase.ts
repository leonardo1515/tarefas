import { Return } from "../../../shared/util/return.default";
import { UserRepository } from "../repository/user.repository";

export class DeleteUserUsecase {
  public async execute(id: string): Promise<Return> {
    const repository = new UserRepository();

    const result = await repository.delete(id);

    if (result !== 1) {
      return {
        ok: false,
        code: 404,
        message: "User not found.",
        data: result,
      };
    }

    return {
      ok: true,
      code: 201,
      message: "User successfull deleted",
      data: result,
    };
  }
}
