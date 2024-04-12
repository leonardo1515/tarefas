import { v4 as creatUuid } from "uuid";
import { Tasks } from "./tasks";

export interface LoginUserTDO {
  email: string;
  password: string;
}

export interface UserTDO {
  name: string;
  email: string;
  password: string;
  id?: string;
  task?: Tasks[];
}

export interface CreateUserTDO {
  name: string;
  email: string;
  password: string;
  id?: string;
}

export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private _id?: string,
    private _tasks?: Tasks[]
  ) {
    this._id = creatUuid();
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get email() {
    return this._email;
  }

  public get password() {
    return this._password;
  }

  public get task() {
    return this._tasks ?? [];
  }

  public set name(name: string) {
    this._name = name;
  }

  public set email(email: string) {
    this._email = email;
  }

  public set password(passwrd: string) {
    this._password = passwrd;
  }

  public set task(task: Tasks[]) {
    this._tasks = task;
  }

  public toJson(): UserTDO {
    return {
      name: this._name,
      email: this._email,
      password: this._password,
      id: this._id,
      task: this._tasks,
    };
  }

  public static create(
    id: string,
    name: string,
    email: string,
    password: string,
    task: Tasks[]
  ) {
    const user = new User(name, email, password, id, task);
    user._id = id;

    return user;
  }
}
