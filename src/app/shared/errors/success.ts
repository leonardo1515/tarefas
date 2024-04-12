import { Response } from "express";

export class ResponseSuccess {
  public static success(
    res: Response,
    ok: boolean,
    code: number,
    msg: string,
    data: any
  ) {
    return res.status(code).send({
      ok: ok,
      code: code,
      message: msg,
      data: data,
    });
  }
  public static create(res: Response, code: number, field: string, data: any) {
    return res.status(201).send({
      ok: true,
      code: code,
      message: field + "successfully created!",
      data: data,
    });
  }
}
