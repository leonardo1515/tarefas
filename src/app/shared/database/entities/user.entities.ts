import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { TaskEntitiy } from "./task";

@Entity({ name: "user" })
export class UserEntitiy {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => TaskEntitiy, (task) => task.id)
  task: TaskEntitiy[];

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({
    name: "at_created",
  })
  public atCreate: Date;

  @UpdateDateColumn({
    name: "at_update",
  })
  public atUpdate: Date;
}
