import { v4 as creatUuid } from "uuid";

export interface UpdateTaskDTO {
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  id: string;
}

export interface TasksDTO {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  id?: string;
}

export interface CreateTasksDTO {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  id?: string;
  idUser: string;
}

export class Tasks {
  constructor(
    private _name: string,
    private _description: string,
    private _startDate: string,
    private _endDate: string,
    private _id?: string
  ) {
    this._id = creatUuid();
  }
  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get description() {
    return this._description;
  }

  public get startDate() {
    return this._startDate;
  }

  public get endDate() {
    return this._endDate;
  }

  public set name(name: string) {
    this._name = name;
  }

  public set description(description: string) {
    this._description = description;
  }

  public set startDate(startDate: string) {
    this._startDate = startDate;
  }

  public set endDate(endDate: string) {
    this._endDate = endDate;
  }

  public toJson(): TasksDTO {
    return {
      name: this._name,
      description: this._description,
      startDate: this._startDate,
      endDate: this._endDate,
      id: this._id,
    };
  }

  public static create(
    id: string,
    name: string,
    description: string,
    startDate: string,
    endDate: string
  ) {
    const task = new Tasks(name, description, startDate, endDate, id);
    task._id = id;

    return task;
  }
}
