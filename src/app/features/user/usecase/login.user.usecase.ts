import { JwtAdapter } from "../../../shared/util/jwt.adapter";
import { Return } from "../../../shared/util/return.default";
import { UserRepository } from "../repository/user.repository";

export class LoginUserUsecase {
  public async execute(email: string, password: string): Promise<Return> {
    const repository = new UserRepository();
    const result = await repository.login(email, password);

    if (result === null) {
      return {
        ok: false,
        code: 404,
        message: "User not found.",
        data: result,
      };
    }

    const token = JwtAdapter.createToken(result.toJson());

    return {
      ok: true,
      code: 201,
      message: "User successfull obted",
      data: { ...result.toJson(), token },
    };
  }
}
