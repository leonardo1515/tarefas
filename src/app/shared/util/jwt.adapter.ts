import jwt from "jsonwebtoken";
import { authEnv } from "../../envs/auth.envs";

export class JwtAdapter {
  // public static createToken(data: any) {
  //   return jwt.sign(JSON.stringify(data), authEnv.secret!, {
  //     expiresIn: "1h",
  //   });
  // }

  public static createToken(data: any) {
    return jwt.sign(JSON.stringify(data), authEnv.secret!);
  }

  public static checkToken(token: string) {
    return jwt.verify(token, authEnv.secret!);
  }
}
